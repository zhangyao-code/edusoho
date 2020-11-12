<?php

namespace Biz\Visualization\Dao\Impl;

use Biz\Visualization\Dao\UserVideoDailyDao;
use Codeages\Biz\Framework\Dao\AdvancedDaoImpl;

class UserVideoDailyDaoImpl extends AdvancedDaoImpl implements UserVideoDailyDao
{
    protected $table = 'user_video_daily';

    public function declares()
    {
        return [
            'timestamps' => ['createdTime', 'updatedTime'],
            'serializes' => [
            ],
            'conditions' => [
                'id = :id',
                'dayTime = :dayTime',
            ],
            'orderbys' => ['id', 'createdTime'],
        ];
    }
}
