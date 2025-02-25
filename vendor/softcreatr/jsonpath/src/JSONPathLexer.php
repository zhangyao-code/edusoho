<?php

/**
 * JSONPath implementation for PHP.
 *
 * @license https://github.com/SoftCreatR/JSONPath/blob/main/LICENSE  MIT License
 */

namespace Flow\JSONPath;

class JSONPathLexer
{
    /*
     * Match within bracket groups
     * Matches are whitespace insensitive
     */
    const MATCH_INDEX = '(?!\-)[\-\w]+ | \*'; // Eg. foo or 40f35757-2563-4790-b0b1-caa904be455f
    const MATCH_INDEXES = '\s* -?\d+ [-?\d,\s]+'; // Eg. 0,1,2
    const MATCH_SLICE = '[-\d:]+ | :'; // Eg. [0:2:1]
    const MATCH_QUERY_RESULT = '\s* \( .+? \) \s*'; // Eg. ?(@.length - 1)
    const MATCH_QUERY_MATCH = '\s* \?\(.+?\) \s*'; // Eg. ?(@.foo = "bar")
    const MATCH_INDEX_IN_SINGLE_QUOTES = '\s* \' (.+?)? \' \s*'; // Eg. 'bar'
    const MATCH_INDEX_IN_DOUBLE_QUOTES = '\s* " (.+?)? " \s*'; // Eg. "bar"

    /**
     * The expression being lexed.
     *
     * @var string
     */
    protected $expression = '';

    /**
     * The length of the expression.
     *
     * @var int
     */
    protected $expressionLength = 0;

    /**
     * @param string $expression
     */
    public function __construct($expression)
    {
        $expression = trim($expression);
        $len = strlen($expression);

        if ($len > 1) {
            if ($expression[0] === '$') {
                $expression = substr($expression, 1);
                $len--;
            }

            if ($expression[0] !== '.' && $expression[0] !== '[') {
                $expression = '.' . $expression;
                $len++;
            }

            $this->expression = $expression;
            $this->expressionLength = $len;
        }
    }

    /**
     * @throws JSONPathException
     *
     * @return array
     */
    public function parseExpressionTokens()
    {
        $dotIndexDepth = 0;
        $squareBracketDepth = 0;
        $tokenValue = '';
        $tokens = [];

        for ($i = 0; $i < $this->expressionLength; $i++) {
            $char = $this->expression[$i];

            if (($squareBracketDepth === 0) && $char === '.') {
                if ($this->lookAhead($i) === '.') {
                    $tokens[] = new JSONPathToken(JSONPathToken::T_RECURSIVE, null);
                }

                continue;
            }

            if ($char === '[') {
                ++$squareBracketDepth;

                if ($squareBracketDepth === 1) {
                    continue;
                }
            }

            if ($char === ']') {
                --$squareBracketDepth;

                if ($squareBracketDepth === 0) {
                    continue;
                }
            }

            /*
             * Within square brackets
             */
            if ($squareBracketDepth > 0) {
                $tokenValue .= $char;

                if ($squareBracketDepth === 1 && $this->lookAhead($i) === ']') {
                    $tokens[] = $this->createToken($tokenValue);
                    $tokenValue = '';
                }
            }

            /*
             * Outside square brackets
             */
            if ($squareBracketDepth === 0) {
                $tokenValue .= $char;

                // Double dot ".."
                if ($char === '.' && $dotIndexDepth > 1) {
                    $tokens[] = $this->createToken($tokenValue);
                    $tokenValue = '';
                    continue;
                }

                if ($this->atEnd($i) || in_array($this->lookAhead($i), ['.', '['])) {
                    $tokens[] = $this->createToken($tokenValue);
                    $tokenValue = '';
                    --$dotIndexDepth;
                }
            }
        }

        if ($tokenValue !== '') {
            $tokens[] = $this->createToken($tokenValue);
        }

        return $tokens;
    }

    /**
     * @param int $pos
     * @param int $forward
     *
     * @return string|null
     */
    protected function lookAhead($pos, $forward = 1)
    {
        return isset($this->expression[$pos + $forward]) ? $this->expression[$pos + $forward] : null;
    }

    /**
     * @param int $pos
     *
     * @return bool
     */
    protected function atEnd($pos)
    {
        return $pos === $this->expressionLength;
    }

    /**
     * @throws JSONPathException
     *
     * @return array
     */
    public function parseExpression()
    {
        return $this->parseExpressionTokens();
    }

    /**
     * @param string $value
     *
     * @throws JSONPathException
     *
     * @return JSONPathToken
     */
    protected function createToken($value)
    {
        // The IDE doesn't like, what we do with $value, so let's
        // move it to a separate variable, to get rid of any IDE warnings
        $tokenValue = $value;

        /** @var JSONPathToken|null $ret */
        $ret = null;

        if (preg_match('/^(' . static::MATCH_INDEX . ')$/xu', $tokenValue, $matches)) {
            if (preg_match('/^-?\d+$/', $tokenValue)) {
                $tokenValue = (int)$tokenValue;
            }

            $ret = new JSONPathToken(JSONPathToken::T_INDEX, $tokenValue);
        } elseif (preg_match('/^' . static::MATCH_INDEXES . '$/xu', $tokenValue, $matches)) {
            $tokenValue = explode(',', trim($tokenValue, ','));

            foreach ($tokenValue as $i => $v) {
                $tokenValue[$i] = (int)trim($v);
            }

            $ret = new JSONPathToken(JSONPathToken::T_INDEXES, $tokenValue);
        } elseif (preg_match('/^' . static::MATCH_SLICE . '$/xu', $tokenValue, $matches)) {
            $parts = explode(':', $tokenValue);
            $tokenValue = [
                'start' => isset($parts[0]) && $parts[0] !== '' ? (int)$parts[0] : null,
                'end' => isset($parts[1]) && $parts[1] !== '' ? (int)$parts[1] : null,
                'step' => isset($parts[2]) && $parts[2] !== '' ? (int)$parts[2] : null,
            ];

            $ret = new JSONPathToken(JSONPathToken::T_SLICE, $tokenValue);
        } elseif (preg_match('/^' . static::MATCH_QUERY_RESULT . '$/xu', $tokenValue)) {
            $tokenValue = substr($tokenValue, 1, -1);

            $ret = new JSONPathToken(JSONPathToken::T_QUERY_RESULT, $tokenValue);
        } elseif (preg_match('/^' . static::MATCH_QUERY_MATCH . '$/xu', $tokenValue)) {
            $tokenValue = substr($tokenValue, 2, -1);

            $ret = new JSONPathToken(JSONPathToken::T_QUERY_MATCH, $tokenValue);
        } elseif (
            preg_match('/^' . static::MATCH_INDEX_IN_SINGLE_QUOTES . '$/xu', $tokenValue, $matches) ||
            preg_match('/^' . static::MATCH_INDEX_IN_DOUBLE_QUOTES . '$/xu', $tokenValue, $matches)
        ) {
            if (isset($matches[1])) {
                $tokenValue = $matches[1];
                $tokenValue = trim($tokenValue);

                $possibleArray = false;
                if ($matches[0][0] === '"') {
                    $possibleArray = explode('","', $tokenValue);
                } elseif ($matches[0][0] === "'") {
                    $possibleArray = explode("','", $tokenValue);
                }
                if ($possibleArray !== false && count($possibleArray) > 1) {
                    $tokenValue = $possibleArray;
                }
            } else {
                $tokenValue = '';
            }

            $ret = new JSONPathToken(JSONPathToken::T_INDEX, $tokenValue);
        }

        if ($ret !== null) {
            return $ret;
        }

        throw new JSONPathException("Unable to parse token {$tokenValue} in expression: $this->expression");
    }
}
