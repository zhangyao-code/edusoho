<template>
  <a-form-model
    ref="form"
    :model="form"
    layout="inline"
  >
    <a-form-model-item>
      <a-select
        v-model="form.classroomCourseSetId"
        style="width: 120px;"
        placeholder="全部课程"
      >
        <a-select-option value="default">
          全部课程
        </a-select-option>
        <a-select-option
          v-for="courseSet in conditions.courseSets"
          :value="courseSet.id"
          :key="courseSet.id"
        >
          {{ courseSet.title }}
        </a-select-option>
      </a-select>
    </a-form-model-item>

    <a-form-model-item>
      <a-select
        show-search
        option-filter-prop="children"
        notFoundContent="暂无数据"
        style="width: 120px;"
        v-model="form.classroomMediaType"
        @change="(value) => handleChange(value, 'classroomMediaType')"
      >
        <a-select-option value="default">题目来源</a-select-option>

        <a-select-option
          v-for="item in conditions.mediaTypes"
          :value="item"
          :key="item"
        >
          {{ item | sourceTitle }}
        </a-select-option>
      </a-select>
    </a-form-model-item>

    <a-form-model-item>
      <a-select
        show-search
        option-filter-prop="children"
        :filter-option="filterOption"
        notFoundContent="暂无数据"
        style="width: 120px;"
        v-model="form.classroomTaskId"
      >
        <a-select-option value="default">任务名称</a-select-option>

        <a-select-option
          v-for="task in conditions.tasks"
          :value="task.id"
          :key="task.id"
        >
          {{ task.title }}
        </a-select-option>
      </a-select>
    </a-form-model-item>

    <a-form-model-item>
      <a-select
        style="width: 120px;"
        v-model="form.wrongTimesSort"
      >
        <a-select-option value="default">
          做错频次
        </a-select-option>
        <a-select-option value="DESC">
          由高至低
        </a-select-option>
        <a-select-option value="ASC">
          由低至高
        </a-select-option>
      </a-select>
    </a-form-model-item>

    <a-form-model-item>
      <a-button type="primary" @click="onSearch">搜索</a-button>
    </a-form-model-item>
  </a-form-model>
</template>

<script>
import _ from "lodash";
import { WrongBookSourceManageCondition } from 'common/vue/service';
const sources = {
  testpaper: '考试任务',
  homework: '作业任务',
  exercise: '练习任务'
}
export default {
  data() {
    return {
      form: {
        classroomCourseSetId: 'default',
        classroomMediaType: 'default',
        classroomTaskId: 'default',
        wrongTimesSort: 'default',
      },
      conditions: {},
    }
  },
  props: {
    targetId: 0,
  },
  created() {
    this.initSearchParams();
    this.fetchWrongBookCondition();
  },
  filters: {
    sourceTitle(value) {
      return sources[value];
    }
  },
  methods: {
    initSearchParams() {
      const params = this.$route.query;

      _.forEach(params, (value, key) => {
        this.form[key] = value;
      });
    },
    filterOption(input, option) {
      return (
        option.componentOptions.children[0].text.toLowerCase().indexOf(input.toLowerCase()) >= 0
      );
    },
    onSearch() {
      this.$refs.form.validate(valid => {
        if (valid) {
          const params = {};
          _.forEach(_.keys(this.form), item => {
            const value = this.form[item];
            if (value !== 'default') {
              params[item] = value;
            }
          });
          this.$emit('on-search', params);
        }
      })
    },
    handleChange(value, type) {
      this.fetchWrongBookCondition(type);
    },
    async fetchWrongBookCondition(type) {
      const params = this.getParams(type);

      const result = await WrongBookSourceManageCondition.get(params);

      this.conditions = result;
    },

    getParams(type) {
      const { classroomCourseSetId, classroomMediaType } = this.form;

      const apiParams = {
        query: {
          targetId: this.targetId,
          targetType: 'classroom',
        },
        params: {

        }
      };

      const params = apiParams.params;

      if (type === 'classroomCourseSetId') {
        _.assign(this.form, {
          classroomMediaType: 'default',
          classroomTaskId: 'default'
        });

        classroomCourseSetId !== 'default' && (params.classroomCourseSetId = classroomCourseSetId);
      }

      if (type === 'classroomMediaType') {
        _.assign(this.form, {
          classroomTaskId: 'default'
        });

        classroomMediaType !== 'default' && (params.classroomMediaType = classroomMediaType);
        classroomCourseSetId !== 'default' && (params.classroomCourseSetId = classroomCourseSetId);
      }

      return apiParams;
    },
  }
}
</script>
