<?php

namespace App;

use ScoutElastic\SearchRule;

class ThreadSearchRule extends SearchRule
{
    /**
     * @inheritdoc
     */
    public function buildHighlightPayload()
    {
        //
    }

    /**
     * @inheritdoc
     */
    public function buildQueryPayload()
    {
        $query = $this->builder->query;
        // return [
        //     'should' => [
        //         [
        //             'match' => [
        //                 'title' => [
        //                     'query' => $query,
        //                     'boost' => 3
        //                 ]
        //             ]
        //         ],
        //         [
        //             'match' => [
        //                 'body' => [
        //                     'query' => $query,
        //                     'boost' => 2
        //                 ]
        //             ]
        //         ],
        //         [
        //             'match' => [
        //                 'tags' => [
        //                     'query' => $query,
        //                     'boost' => 1
        //                 ]
        //             ]
        //         ]
        //     ]
        // ];

        return [
            'must' => [
                'query_string' => [
                    'query' => $this->builder->query
                ]
            ]
         ];
    }
}
