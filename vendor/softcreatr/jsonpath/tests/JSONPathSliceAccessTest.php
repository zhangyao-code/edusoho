<?php

/**
 * JSONPath implementation for PHP.
 *
 * @license https://github.com/SoftCreatR/JSONPath/blob/main/LICENSE  MIT License
 */

namespace Flow\JSONPath\Test;

use Flow\JSONPath\JSONPath;
use Flow\JSONPath\JSONPathException;

class JSONPathSliceAccessTest extends TestCase
{
    public function sliceDataProvider()
    {
        return [
            [
                '$.data[1:3]',
                ['data' => ['foo0', 'foo1', 'foo2', 'foo3', 'foo4', 'foo5']],
                ['foo1', 'foo2']
            ],
            [
                '$.data[4:]',
                ['data' => ['foo0', 'foo1', 'foo2', 'foo3', 'foo4', 'foo5']],
                ['foo4', 'foo5']
            ],
            [
                '$.data[:2]',
                ['data' => ['foo0', 'foo1', 'foo2', 'foo3', 'foo4', 'foo5']],
                ['foo0', 'foo1']
            ],
            [
                '$.data[:]',
                ['data' => ['foo0', 'foo1', 'foo2', 'foo3', 'foo4', 'foo5']],
                ['foo0', 'foo1', 'foo2', 'foo3', 'foo4', 'foo5']
            ],
            [
                '$.data[-1]',
                ['data' => ['foo0', 'foo1', 'foo2', 'foo3', 'foo4', 'foo5']],
                ['foo5']
            ],
            [
                '$.data[-2:]',
                ['data' => ['foo0', 'foo1', 'foo2', 'foo3', 'foo4', 'foo5']],
                ['foo4', 'foo5']
            ],
            [
                '$.data[:-2]',
                ['data' => ['foo0', 'foo1', 'foo2', 'foo3', 'foo4', 'foo5']],
                ['foo0', 'foo1', 'foo2', 'foo3']
            ],
            [
                '$.data[::2]',
                ['data' => ['foo0', 'foo1', 'foo2', 'foo3', 'foo4', 'foo5']],
                ['foo0', 'foo2', 'foo4']
            ],
            [
                '$.data[2::2]',
                ['data' => ['foo0', 'foo1', 'foo2', 'foo3', 'foo4', 'foo5']],
                ['foo2', 'foo4']
            ],
            [
                '$.data[:-2:2]',
                ['data' => ['foo0', 'foo1', 'foo2', 'foo3', 'foo4', 'foo5']],
                ['foo0', 'foo2']
            ],
            [
                '$.data[1:5:2]',
                ['data' => ['foo0', 'foo1', 'foo2', 'foo3', 'foo4', 'foo5']],
                ['foo1', 'foo3']
            ]
        ];
    }

    /**
     * @dataProvider sliceDataProvider
     *
     * @param string $path
     * @param array $data
     * @param array $expected
     *
     * @throws JSONPathException
     */
    public function testSlice($path, array $data, array $expected)
    {
        $result = (new JSONPath($data))
            ->find($path);

        self::assertEquals($expected, $result->getData());
    }
}
