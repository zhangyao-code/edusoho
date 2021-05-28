<?php


namespace ApiBundle\Api\Resource\MultiClass;


use ApiBundle\Api\ApiRequest;
use ApiBundle\Api\Resource\AbstractResource;
use AppBundle\Common\ArrayToolkit;
use Biz\Activity\Service\ActivityService;
use Biz\Activity\Service\HomeworkActivityService;
use Biz\Activity\Service\TestpaperActivityService;
use Biz\Testpaper\TestpaperException;
use Codeages\Biz\ItemBank\Answer\Service\AnswerRecordService;
use Codeages\Biz\ItemBank\Answer\Service\AnswerReportService;
use Codeages\Biz\ItemBank\Answer\Service\AnswerSceneService;
use Codeages\Biz\ItemBank\Assessment\Service\AssessmentService;

class MultiClassReviewResult extends AbstractResource
{
    public function search(ApiRequest $request, $multiClassId, $assessmentId)
    {
        $assessment = $this->getAssessmentService()->getAssessment($assessmentId);
        if (!$assessment) {
            throw TestpaperException::NOTFOUND_TESTPAPER();
        }

        $answerScene = $this->getAnswerSceneByActivityId($request->query->get('activityId'));
        $status = $request->query->get('status', 'finished');

        if (!in_array($status, ['all', 'finished', 'reviewing', 'doing'])) {
            $status = 'all';
        }

        $conditions = ['answer_scene_id' => $answerScene['id']];
        if ('all' !== $status) {
            $conditions['status'] = $status;
        }

        $total = $this->getAnswerRecordService()->count($conditions);
        list($offset, $limit) = $this->getOffsetAndLimit($request);
        $orderBy = in_array($status, ['reviewing', 'finished']) ? ['end_time' => 'ASC'] : ['updated_time' => 'DESC'];
        $answerRecords = $this->getAnswerRecordService()->search(
            $conditions,
            $orderBy,
            $offset,
            $limit
        );
        $answerRecords = $this->filterRecords($answerRecords);

        return $this->makePagingObject($answerRecords, $total, $offset, $limit);
    }

    protected function filterRecords($answerRecords)
    {
        $answerReports = ArrayToolkit::index($this->getAnswerReportService()->findByIds(ArrayToolkit::column($answerRecords, 'answer_report_id')), 'id');
        $studentIds = ArrayToolkit::column($answerRecords, 'user_id');
        $teacherIds = ArrayToolkit::column($answerReports, 'review_user_id');
        $userIds = array_merge($studentIds, $teacherIds);
        $users = $this->getUserService()->findUsersByIds($userIds);

        foreach ($answerRecords as &$answerRecord){
            $answerRecord['answerReportInfo'] = isset($answerRecords[$answerRecord['answer_report_id']]) ? $answerRecords[$answerRecord['answer_report_id']] : [];
            $answerRecord['userInfo'] = isset($users[$answerRecord['user_id']]) ? $users[$answerRecord['user_id']] : [];
        }

        return $answerRecords;
    }

    protected function getAnswerSceneByActivityId($activityId)
    {
        $activity = $this->getActivityService()->getActivity($activityId);
        if ('testpaper' == $activity['mediaType']) {
            $testpaperActivity = $this->getTestpaperActivityService()->getActivity($activity['mediaId']);

            return $this->getAnswerSceneService()->get($testpaperActivity['answerSceneId']);
        }

        if ('homework' == $activity['mediaType']) {
            $homeworkActivity = $this->getHomeworkActivityService()->get($activity['mediaId']);

            return $this->getAnswerSceneService()->get($homeworkActivity['answerSceneId']);
        }
    }

    /**
     * @return AssessmentService
     */
    protected function getAssessmentService()
    {
        return $this->service('ItemBank:Assessment:AssessmentService');
    }

    /**
     * @return ActivityService
     */
    protected function getActivityService()
    {
        return $this->service('Activity:ActivityService');
    }

    /**
     * @return TestpaperActivityService
     */
    protected function getTestpaperActivityService()
    {
        return $this->service('Activity:TestpaperActivityService');
    }

    /**
     * @return AnswerSceneService
     */
    protected function getAnswerSceneService()
    {
        return $this->service('ItemBank:Answer:AnswerSceneService');
    }

    /**
     * @return HomeworkActivityService
     */
    protected function getHomeworkActivityService()
    {
        return $this->service('Activity:HomeworkActivityService');
    }

    /**
     * @return \Biz\User\Service\UserService
     */
    protected function getUserService()
    {
        return $this->service('User:UserService');
    }

    /**
     * @return AnswerRecordService
     */
    protected function getAnswerRecordService()
    {
        return $this->service('ItemBank:Answer:AnswerRecordService');
    }

    /**
     * @return AnswerReportService
     */
    protected function getAnswerReportService()
    {
        return $this->service('ItemBank:Answer:AnswerReportService');
    }
}