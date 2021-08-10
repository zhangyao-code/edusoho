<?php


namespace ApiBundle\Api\Resource\MultiClassInspection;


use ApiBundle\Api\ApiRequest;
use ApiBundle\Api\Resource\AbstractResource;
use ApiBundle\Api\Resource\Filter;
use ApiBundle\Api\Resource\User\UserFilter;
use AppBundle\Common\ArrayToolkit;
use AppBundle\Common\Exception\AccessDeniedException;
use Biz\Activity\Service\ActivityService;
use Biz\Course\Service\CourseService;
use Biz\Course\Service\MemberService;
use Biz\MultiClass\Service\MultiClassService;
use Biz\Task\Service\TaskService;
use Biz\User\Service\UserService;

class MultiClassInspection extends AbstractResource
{
    public function search(ApiRequest $request)
    {
        $user = $this->getCurrentUser();
        if (!$user->hasPermission('admin_v2_education')) {
            throw new AccessDeniedException();
        }

        $multiClasses = $this->getMultiClassService()->findAllMultiClass();

        $tasks = $this->getTaskService()->searchTasks(
            [
                'type' => 'live',
                'startTime_GE' => strtotime(date('Y-m-d')),
                'startTime_LE' => strtotime('tomorrow') - 1,
                'courseIds' => ArrayToolkit::column($multiClasses, 'courseId'),
                'isLesson' => 1,
                'status' => 'published',
            ],
            ['startTime' => 'DESC'],
            0,
            PHP_INT_MAX
        );

        return $this->filterActivities($tasks, $multiClasses);
    }

    protected function filterActivities($tasks, $multiClasses)
    {
        $multiClasses = ArrayToolkit::index($multiClasses, 'courseId');
        $multiClassIds = ArrayToolkit::column($multiClasses, 'id');
        $courses = ArrayToolkit::index($this->getCourseService()->findCoursesByIds(ArrayToolkit::column($multiClasses, 'courseId')), 'id');
        $teachers = ArrayToolkit::index($this->getCourseMemberService()->findMultiClassMembersByMultiClassIdsAndRole($multiClassIds, 'teacher'), 'courseId');
        $teacherIds = ArrayToolkit::column($teachers, 'userId');
        $assistants = $this->getCourseMemberService()->findMultiClassMembersByMultiClassIdsAndRole($multiClassIds, 'assistant');
        $assistantIds = ArrayToolkit::column($assistants, 'userId');

        $userIds = array_unique(array_merge($teacherIds, $assistantIds));
        $users = ArrayToolkit::index($this->getUserService()->findUsersByIds(array_values($userIds)), 'id');
        $userFilter = new UserFilter();
        $userFilter->setMode(Filter::SIMPLE_MODE);
        $userFilter->filters($users);

        $multiAssistants = [];
        foreach ($assistants as $assistant) {
            $multiAssistants[$assistant['courseId']]['assistantInfo'][] = isset($users[$assistant['userId']]) ? $users[$assistant['userId']] : [];
        }

        foreach ($tasks as &$task) {
            $task['multiClass'] = isset($multiClasses[$task['courseId']]) ? $multiClasses[$task['courseId']] : [];
            $task['studentNum'] = isset($courses[$task['courseId']]) ? $courses[$task['courseId']]['studentNum'] : 0;
            $task['teacherInfo'] = isset($users[$teachers[$task['courseId']]['userId']]) ? $users[$teachers[$task['courseId']]['userId']] : [];
            $task['assistantInfo'] = isset($multiAssistants[$task['courseId']]) ? $multiAssistants[$task['courseId']]['assistantInfo'] : [];
        }

        return $tasks;
    }

    /**
     * @return MultiClassService
     */
    private function getMultiClassService()
    {
        return $this->service('MultiClass:MultiClassService');
    }

    /**
     * @return ActivityService
     */
    protected function getActivityService()
    {
        return $this->service('Activity:ActivityService');
    }

    /**
     * @return MemberService
     */
    protected function getCourseMemberService()
    {
        return $this->service('Course:MemberService');
    }

    /**
     * @return UserService
     */
    protected function getUserService()
    {
        return $this->service('User:UserService');
    }

    /**
     * @return CourseService
     */
    protected function getCourseService()
    {
        return $this->service('Course:CourseService');
    }

    /**
     * @return TaskService
     */
    protected function getTaskService()
    {
        return $this->service('Task:TaskService');
    }
}