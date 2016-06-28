<?php
namespace Topxia\Service\RefererLog;

interface RefererLogService
{
    public function addRefererLog($refererlog);

    public function getRefererLogById($id);
    /**
     * [searchAnalysisSummary 公开课数据统计 ->来源分析->汇总]
     * @param  [type] $conditions     [description]
     * @param  [type] $groupBy        [description]
     * @return [type] [description]
     */
    public function searchAnalysisSummary($conditions);
    /**
     * [searchAnalysisSummaryList 统计公开课的列表信息]
     * @param  [type] $conditions     [description]
     * @param  [type] $groupBy        [description]
     * @param  [type] $start          [description]
     * @param  [type] $limit          [description]
     * @return [type] [description]
     */
    public function searchAnalysisSummaryList($conditions, $groupBy, $start, $limit);

    public function searchAnalysisSummaryListCount($conditions);

    public function searchAnalysisDetailList($conditions, $groupBy, $start, $limit);

    public function searchAnalysisDetailListCount($conditions);

    public function searchRefererLogs($conditions, $orderBy, $start, $limit);

    public function searchRefererLogCount($conditions);

    /**
     * 通过时间段得到来源日志 以Y-m-d时间格式分组
     * return: array(
     *     '2016-06-21' => logs,
     *     '2016-06-22' => logs,
     * )
     * @param  $conditions array
     * @return mixed
     */
    public function findRefererLogsGroupByDate($conditions);
}
