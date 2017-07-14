import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// require('../../libs/neo4jd3.js');
// import neo4jd3 from 'neo4jd3';

var Graph = React.createClass({
    getInitialState() {
        return {
            // graph: {
            //     "nodes": [{ name: "Peter", label: "Person", id: 1 }, { name: "Michael", label: "Person", id: 2 },
            //     { name: "Neo4j", label: "Database", id: 3 }],
            //     "links": [{ source: 0, target: 1, type: "KNOWS", since: 2010 }, { source: 0, target: 2, type: "FOUNDED" },
            //     { source: 1, target: 2, type: "WORKS_ON" }]
            // },
            graph: {
                "results": [
                    {
                        "columns": [
                            "u",
                            "u2",
                            "u3",
                            "k",
                            "u4",
                            "key",
                            "reports"
                        ],
                        "data": [
                            {
                                "graph": {
                                    "nodes": [
                                        {
                                            "id": 79,
                                            "labels": [
                                                "User"
                                            ],
                                            "properties": {
                                                "name": "Snehal",
                                                "email": "snehal.todewale@weboniselab.com",
                                                "additionalProperties": {}
                                            }
                                        },
                                        {
                                            "id": 79,
                                            "labels": [
                                                "User"
                                            ],
                                            "properties": {
                                                "name": "Snehal",
                                                "email": "snehal.todewale@weboniselab.com",
                                                "additionalProperties": {}
                                            }
                                        },
                                        {
                                            "id": 81,
                                            "labels": [
                                                "User"
                                            ],
                                            "properties": {
                                                "name": "Aayushi",
                                                "email": "aayushi@weboniselab.com",
                                                "additionalProperties": {}
                                            }
                                        },
                                        {
                                            "id": 82,
                                            "labels": [
                                                "Kpi"
                                            ],
                                            "properties": {
                                                "name": "Handle Client",
                                                "email": null,
                                                "additionalProperties": {}
                                            }
                                        },
                                        {
                                            "id": 79,
                                            "labels": [
                                                "User"
                                            ],
                                            "properties": {
                                                "name": "Snehal",
                                                "email": "snehal.todewale@weboniselab.com",
                                                "additionalProperties": {}
                                            }
                                        },
                                        {
                                            "id": 79,
                                            "labels": [
                                                "User"
                                            ],
                                            "properties": {
                                                "name": "Snehal",
                                                "email": "snehal.todewale@weboniselab.com",
                                                "additionalProperties": {}
                                            }
                                        },
                                        {
                                            "id": 79,
                                            "labels": [
                                                "User"
                                            ],
                                            "properties": {
                                                "name": "Snehal",
                                                "email": "snehal.todewale@weboniselab.com",
                                                "additionalProperties": {}
                                            }
                                        },
                                        {
                                            "id": 81,
                                            "labels": [
                                                "User"
                                            ],
                                            "properties": {
                                                "name": "Aayushi",
                                                "email": "aayushi@weboniselab.com",
                                                "additionalProperties": {}
                                            }
                                        },
                                        {
                                            "id": 73,
                                            "labels": [
                                                "Kpi"
                                            ],
                                            "properties": {
                                                "name": "Estimated vs actual time per task",
                                                "email": null,
                                                "additionalProperties": {}
                                            }
                                        },
                                        {
                                            "id": 79,
                                            "labels": [
                                                "User"
                                            ],
                                            "properties": {
                                                "name": "Snehal",
                                                "email": "snehal.todewale@weboniselab.com",
                                                "additionalProperties": {}
                                            }
                                        },
                                        {
                                            "id": 79,
                                            "labels": [
                                                "User"
                                            ],
                                            "properties": {
                                                "name": "Snehal",
                                                "email": "snehal.todewale@weboniselab.com",
                                                "additionalProperties": {}
                                            }
                                        },
                                        {
                                            "id": 79,
                                            "labels": [
                                                "User"
                                            ],
                                            "properties": {
                                                "name": "Snehal",
                                                "email": "snehal.todewale@weboniselab.com",
                                                "additionalProperties": {}
                                            }
                                        },
                                        {
                                            "id": 81,
                                            "labels": [
                                                "User"
                                            ],
                                            "properties": {
                                                "name": "Aayushi",
                                                "email": "aayushi@weboniselab.com",
                                                "additionalProperties": {}
                                            }
                                        },
                                        {
                                            "id": 74,
                                            "labels": [
                                                "Kpi"
                                            ],
                                            "properties": {
                                                "name": "No. of iterations per task",
                                                "email": null,
                                                "additionalProperties": {}
                                            }
                                        },
                                        {
                                            "id": 79,
                                            "labels": [
                                                "User"
                                            ],
                                            "properties": {
                                                "name": "Snehal",
                                                "email": "snehal.todewale@weboniselab.com",
                                                "additionalProperties": {}
                                            }
                                        },
                                        {
                                            "id": 79,
                                            "labels": [
                                                "User"
                                            ],
                                            "properties": {
                                                "name": "Snehal",
                                                "email": "snehal.todewale@weboniselab.com",
                                                "additionalProperties": {}
                                            }
                                        },
                                        {
                                            "id": 79,
                                            "labels": [
                                                "User"
                                            ],
                                            "properties": {
                                                "name": "Snehal",
                                                "email": "snehal.todewale@weboniselab.com",
                                                "additionalProperties": {}
                                            }
                                        },
                                        {
                                            "id": 81,
                                            "labels": [
                                                "User"
                                            ],
                                            "properties": {
                                                "name": "Aayushi",
                                                "email": "aayushi@weboniselab.com",
                                                "additionalProperties": {}
                                            }
                                        },
                                        {
                                            "id": 76,
                                            "labels": [
                                                "Kpi"
                                            ],
                                            "properties": {
                                                "name": "Error rate",
                                                "email": null,
                                                "additionalProperties": {}
                                            }
                                        },
                                        {
                                            "id": 79,
                                            "labels": [
                                                "User"
                                            ],
                                            "properties": {
                                                "name": "Snehal",
                                                "email": "snehal.todewale@weboniselab.com",
                                                "additionalProperties": {}
                                            }
                                        },
                                        {
                                            "id": 79,
                                            "labels": [
                                                "User"
                                            ],
                                            "properties": {
                                                "name": "Snehal",
                                                "email": "snehal.todewale@weboniselab.com",
                                                "additionalProperties": {}
                                            }
                                        },
                                        {
                                            "id": 79,
                                            "labels": [
                                                "User"
                                            ],
                                            "properties": {
                                                "name": "Snehal",
                                                "email": "snehal.todewale@weboniselab.com",
                                                "additionalProperties": {}
                                            }
                                        },
                                        {
                                            "id": 81,
                                            "labels": [
                                                "User"
                                            ],
                                            "properties": {
                                                "name": "Aayushi",
                                                "email": "aayushi@weboniselab.com",
                                                "additionalProperties": {}
                                            }
                                        },
                                        {
                                            "id": 2,
                                            "labels": [
                                                "Kpi"
                                            ],
                                            "properties": {
                                                "name": "Client satisfation rate",
                                                "email": null,
                                                "additionalProperties": {}
                                            }
                                        },
                                        {
                                            "id": 80,
                                            "labels": [
                                                "User"
                                            ],
                                            "properties": {
                                                "name": "Nayan",
                                                "email": "nayan.deshmukh@weboniselab.com",
                                                "additionalProperties": {}
                                            }
                                        },
                                        {
                                            "id": 79,
                                            "labels": [
                                                "User"
                                            ],
                                            "properties": {
                                                "name": "Snehal",
                                                "email": "snehal.todewale@weboniselab.com",
                                                "additionalProperties": {}
                                            }
                                        },
                                        {
                                            "id": 79,
                                            "labels": [
                                                "User"
                                            ],
                                            "properties": {
                                                "name": "Snehal",
                                                "email": "snehal.todewale@weboniselab.com",
                                                "additionalProperties": {}
                                            }
                                        },
                                        {
                                            "id": 81,
                                            "labels": [
                                                "User"
                                            ],
                                            "properties": {
                                                "name": "Aayushi",
                                                "email": "aayushi@weboniselab.com",
                                                "additionalProperties": {}
                                            }
                                        },
                                        {
                                            "id": 1,
                                            "labels": [
                                                "Kpi"
                                            ],
                                            "properties": {
                                                "name": "Handle Client",
                                                "email": null,
                                                "additionalProperties": {}
                                            }
                                        },
                                        {
                                            "id": 80,
                                            "labels": [
                                                "User"
                                            ],
                                            "properties": {
                                                "name": "Nayan",
                                                "email": "nayan.deshmukh@weboniselab.com",
                                                "additionalProperties": {}
                                            }
                                        },
                                        {
                                            "id": 79,
                                            "labels": [
                                                "User"
                                            ],
                                            "properties": {
                                                "name": "Snehal",
                                                "email": "snehal.todewale@weboniselab.com",
                                                "additionalProperties": {}
                                            }
                                        },
                                        {
                                            "id": 79,
                                            "labels": [
                                                "User"
                                            ],
                                            "properties": {
                                                "name": "Snehal",
                                                "email": "snehal.todewale@weboniselab.com",
                                                "additionalProperties": {}
                                            }
                                        },
                                        {
                                            "id": 81,
                                            "labels": [
                                                "User"
                                            ],
                                            "properties": {
                                                "name": "Aayushi",
                                                "email": "aayushi@weboniselab.com",
                                                "additionalProperties": {}
                                            }
                                        },
                                        {
                                            "id": 0,
                                            "labels": [
                                                "Kpi"
                                            ],
                                            "properties": {
                                                "name": "Manage Team",
                                                "email": null,
                                                "additionalProperties": {}
                                            }
                                        },
                                        {
                                            "id": 80,
                                            "labels": [
                                                "User"
                                            ],
                                            "properties": {
                                                "name": "Nayan",
                                                "email": "nayan.deshmukh@weboniselab.com",
                                                "additionalProperties": {}
                                            }
                                        },
                                        {
                                            "id": 79,
                                            "labels": [
                                                "User"
                                            ],
                                            "properties": {
                                                "name": "Snehal",
                                                "email": "snehal.todewale@weboniselab.com",
                                                "additionalProperties": {}
                                            }
                                        },
                                        {
                                            "id": 79,
                                            "labels": [
                                                "User"
                                            ],
                                            "properties": {
                                                "name": "Snehal",
                                                "email": "snehal.todewale@weboniselab.com",
                                                "additionalProperties": {}
                                            }
                                        },
                                        {
                                            "id": 81,
                                            "labels": [
                                                "User"
                                            ],
                                            "properties": {
                                                "name": "Aayushi",
                                                "email": "aayushi@weboniselab.com",
                                                "additionalProperties": {}
                                            }
                                        },
                                        {
                                            "id": 78,
                                            "labels": [
                                                "Kpi"
                                            ],
                                            "properties": {
                                                "name": "Rate of designer about solution failure",
                                                "email": null,
                                                "additionalProperties": {}
                                            }
                                        },
                                        {
                                            "id": 81,
                                            "labels": [
                                                "User"
                                            ],
                                            "properties": {
                                                "name": "Aayushi",
                                                "email": "aayushi@weboniselab.com",
                                                "additionalProperties": {}
                                            }
                                        },
                                        {
                                            "id": 79,
                                            "labels": [
                                                "User"
                                            ],
                                            "properties": {
                                                "name": "Snehal",
                                                "email": "snehal.todewale@weboniselab.com",
                                                "additionalProperties": {}
                                            }
                                        },
                                        {
                                            "id": 79,
                                            "labels": [
                                                "User"
                                            ],
                                            "properties": {
                                                "name": "Snehal",
                                                "email": "snehal.todewale@weboniselab.com",
                                                "additionalProperties": {}
                                            }
                                        },
                                        {
                                            "id": 81,
                                            "labels": [
                                                "User"
                                            ],
                                            "properties": {
                                                "name": "Aayushi",
                                                "email": "aayushi@weboniselab.com",
                                                "additionalProperties": {}
                                            }
                                        },
                                        {
                                            "id": 74,
                                            "labels": [
                                                "Kpi"
                                            ],
                                            "properties": {
                                                "name": "No. of iterations per task",
                                                "email": null,
                                                "additionalProperties": {}
                                            }
                                        },
                                        {
                                            "id": 81,
                                            "labels": [
                                                "User"
                                            ],
                                            "properties": {
                                                "name": "Aayushi",
                                                "email": "aayushi@weboniselab.com",
                                                "additionalProperties": {}
                                            }
                                        },
                                        {
                                            "id": 79,
                                            "labels": [
                                                "User"
                                            ],
                                            "properties": {
                                                "name": "Snehal",
                                                "email": "snehal.todewale@weboniselab.com",
                                                "additionalProperties": {}
                                            }
                                        },
                                        {
                                            "id": 79,
                                            "labels": [
                                                "User"
                                            ],
                                            "properties": {
                                                "name": "Snehal",
                                                "email": "snehal.todewale@weboniselab.com",
                                                "additionalProperties": {}
                                            }
                                        },
                                        {
                                            "id": 81,
                                            "labels": [
                                                "User"
                                            ],
                                            "properties": {
                                                "name": "Aayushi",
                                                "email": "aayushi@weboniselab.com",
                                                "additionalProperties": {}
                                            }
                                        },
                                        {
                                            "id": 77,
                                            "labels": [
                                                "Kpi"
                                            ],
                                            "properties": {
                                                "name": "Progress rate of designer about solution success",
                                                "email": null,
                                                "additionalProperties": {}
                                            }
                                        },
                                        {
                                            "id": 81,
                                            "labels": [
                                                "User"
                                            ],
                                            "properties": {
                                                "name": "Aayushi",
                                                "email": "aayushi@weboniselab.com",
                                                "additionalProperties": {}
                                            }
                                        },
                                        {
                                            "id": 79,
                                            "labels": [
                                                "User"
                                            ],
                                            "properties": {
                                                "name": "Snehal",
                                                "email": "snehal.todewale@weboniselab.com",
                                                "additionalProperties": {}
                                            }
                                        },
                                        {
                                            "id": 80,
                                            "labels": [
                                                "User"
                                            ],
                                            "properties": {
                                                "name": "Nayan",
                                                "email": "nayan.deshmukh@weboniselab.com",
                                                "additionalProperties": {}
                                            }
                                        },
                                        {
                                            "id": 79,
                                            "labels": [
                                                "User"
                                            ],
                                            "properties": {
                                                "name": "Snehal",
                                                "email": "snehal.todewale@weboniselab.com",
                                                "additionalProperties": {}
                                            }
                                        },
                                        {
                                            "id": 82,
                                            "labels": [
                                                "Kpi"
                                            ],
                                            "properties": {
                                                "name": "Handle Client",
                                                "email": null,
                                                "additionalProperties": {}
                                            }
                                        },
                                        {
                                            "id": 79,
                                            "labels": [
                                                "User"
                                            ],
                                            "properties": {
                                                "name": "Snehal",
                                                "email": "snehal.todewale@weboniselab.com",
                                                "additionalProperties": {}
                                            }
                                        },
                                        {
                                            "id": 79,
                                            "labels": [
                                                "User"
                                            ],
                                            "properties": {
                                                "name": "Snehal",
                                                "email": "snehal.todewale@weboniselab.com",
                                                "additionalProperties": {}
                                            }
                                        },
                                        {
                                            "id": 80,
                                            "labels": [
                                                "User"
                                            ],
                                            "properties": {
                                                "name": "Nayan",
                                                "email": "nayan.deshmukh@weboniselab.com",
                                                "additionalProperties": {}
                                            }
                                        },
                                        {
                                            "id": 79,
                                            "labels": [
                                                "User"
                                            ],
                                            "properties": {
                                                "name": "Snehal",
                                                "email": "snehal.todewale@weboniselab.com",
                                                "additionalProperties": {}
                                            }
                                        },
                                        {
                                            "id": 73,
                                            "labels": [
                                                "Kpi"
                                            ],
                                            "properties": {
                                                "name": "Estimated vs actual time per task",
                                                "email": null,
                                                "additionalProperties": {}
                                            }
                                        },
                                        {
                                            "id": 79,
                                            "labels": [
                                                "User"
                                            ],
                                            "properties": {
                                                "name": "Snehal",
                                                "email": "snehal.todewale@weboniselab.com",
                                                "additionalProperties": {}
                                            }
                                        },
                                        {
                                            "id": 79,
                                            "labels": [
                                                "User"
                                            ],
                                            "properties": {
                                                "name": "Snehal",
                                                "email": "snehal.todewale@weboniselab.com",
                                                "additionalProperties": {}
                                            }
                                        },
                                        {
                                            "id": 80,
                                            "labels": [
                                                "User"
                                            ],
                                            "properties": {
                                                "name": "Nayan",
                                                "email": "nayan.deshmukh@weboniselab.com",
                                                "additionalProperties": {}
                                            }
                                        },
                                        {
                                            "id": 79,
                                            "labels": [
                                                "User"
                                            ],
                                            "properties": {
                                                "name": "Snehal",
                                                "email": "snehal.todewale@weboniselab.com",
                                                "additionalProperties": {}
                                            }
                                        },
                                        {
                                            "id": 74,
                                            "labels": [
                                                "Kpi"
                                            ],
                                            "properties": {
                                                "name": "No. of iterations per task",
                                                "email": null,
                                                "additionalProperties": {}
                                            }
                                        },
                                        {
                                            "id": 79,
                                            "labels": [
                                                "User"
                                            ],
                                            "properties": {
                                                "name": "Snehal",
                                                "email": "snehal.todewale@weboniselab.com",
                                                "additionalProperties": {}
                                            }
                                        },
                                        {
                                            "id": 79,
                                            "labels": [
                                                "User"
                                            ],
                                            "properties": {
                                                "name": "Snehal",
                                                "email": "snehal.todewale@weboniselab.com",
                                                "additionalProperties": {}
                                            }
                                        },
                                        {
                                            "id": 80,
                                            "labels": [
                                                "User"
                                            ],
                                            "properties": {
                                                "name": "Nayan",
                                                "email": "nayan.deshmukh@weboniselab.com",
                                                "additionalProperties": {}
                                            }
                                        },
                                        {
                                            "id": 79,
                                            "labels": [
                                                "User"
                                            ],
                                            "properties": {
                                                "name": "Snehal",
                                                "email": "snehal.todewale@weboniselab.com",
                                                "additionalProperties": {}
                                            }
                                        },
                                        {
                                            "id": 76,
                                            "labels": [
                                                "Kpi"
                                            ],
                                            "properties": {
                                                "name": "Error rate",
                                                "email": null,
                                                "additionalProperties": {}
                                            }
                                        },
                                        {
                                            "id": 79,
                                            "labels": [
                                                "User"
                                            ],
                                            "properties": {
                                                "name": "Snehal",
                                                "email": "snehal.todewale@weboniselab.com",
                                                "additionalProperties": {}
                                            }
                                        },
                                        {
                                            "id": 79,
                                            "labels": [
                                                "User"
                                            ],
                                            "properties": {
                                                "name": "Snehal",
                                                "email": "snehal.todewale@weboniselab.com",
                                                "additionalProperties": {}
                                            }
                                        },
                                        {
                                            "id": 80,
                                            "labels": [
                                                "User"
                                            ],
                                            "properties": {
                                                "name": "Nayan",
                                                "email": "nayan.deshmukh@weboniselab.com",
                                                "additionalProperties": {}
                                            }
                                        },
                                        {
                                            "id": 79,
                                            "labels": [
                                                "User"
                                            ],
                                            "properties": {
                                                "name": "Snehal",
                                                "email": "snehal.todewale@weboniselab.com",
                                                "additionalProperties": {}
                                            }
                                        },
                                        {
                                            "id": 2,
                                            "labels": [
                                                "Kpi"
                                            ],
                                            "properties": {
                                                "name": "Client satisfation rate",
                                                "email": null,
                                                "additionalProperties": {}
                                            }
                                        },
                                        {
                                            "id": 80,
                                            "labels": [
                                                "User"
                                            ],
                                            "properties": {
                                                "name": "Nayan",
                                                "email": "nayan.deshmukh@weboniselab.com",
                                                "additionalProperties": {}
                                            }
                                        },
                                        {
                                            "id": 79,
                                            "labels": [
                                                "User"
                                            ],
                                            "properties": {
                                                "name": "Snehal",
                                                "email": "snehal.todewale@weboniselab.com",
                                                "additionalProperties": {}
                                            }
                                        },
                                        {
                                            "id": 80,
                                            "labels": [
                                                "User"
                                            ],
                                            "properties": {
                                                "name": "Nayan",
                                                "email": "nayan.deshmukh@weboniselab.com",
                                                "additionalProperties": {}
                                            }
                                        },
                                        {
                                            "id": 79,
                                            "labels": [
                                                "User"
                                            ],
                                            "properties": {
                                                "name": "Snehal",
                                                "email": "snehal.todewale@weboniselab.com",
                                                "additionalProperties": {}
                                            }
                                        },
                                        {
                                            "id": 1,
                                            "labels": [
                                                "Kpi"
                                            ],
                                            "properties": {
                                                "name": "Handle Client",
                                                "email": null,
                                                "additionalProperties": {}
                                            }
                                        },
                                        {
                                            "id": 80,
                                            "labels": [
                                                "User"
                                            ],
                                            "properties": {
                                                "name": "Nayan",
                                                "email": "nayan.deshmukh@weboniselab.com",
                                                "additionalProperties": {}
                                            }
                                        },
                                        {
                                            "id": 79,
                                            "labels": [
                                                "User"
                                            ],
                                            "properties": {
                                                "name": "Snehal",
                                                "email": "snehal.todewale@weboniselab.com",
                                                "additionalProperties": {}
                                            }
                                        },
                                        {
                                            "id": 80,
                                            "labels": [
                                                "User"
                                            ],
                                            "properties": {
                                                "name": "Nayan",
                                                "email": "nayan.deshmukh@weboniselab.com",
                                                "additionalProperties": {}
                                            }
                                        },
                                        {
                                            "id": 79,
                                            "labels": [
                                                "User"
                                            ],
                                            "properties": {
                                                "name": "Snehal",
                                                "email": "snehal.todewale@weboniselab.com",
                                                "additionalProperties": {}
                                            }
                                        },
                                        {
                                            "id": 0,
                                            "labels": [
                                                "Kpi"
                                            ],
                                            "properties": {
                                                "name": "Manage Team",
                                                "email": null,
                                                "additionalProperties": {}
                                            }
                                        },
                                        {
                                            "id": 80,
                                            "labels": [
                                                "User"
                                            ],
                                            "properties": {
                                                "name": "Nayan",
                                                "email": "nayan.deshmukh@weboniselab.com",
                                                "additionalProperties": {}
                                            }
                                        },
                                        {
                                            "id": 79,
                                            "labels": [
                                                "User"
                                            ],
                                            "properties": {
                                                "name": "Snehal",
                                                "email": "snehal.todewale@weboniselab.com",
                                                "additionalProperties": {}
                                            }
                                        },
                                        {
                                            "id": 80,
                                            "labels": [
                                                "User"
                                            ],
                                            "properties": {
                                                "name": "Nayan",
                                                "email": "nayan.deshmukh@weboniselab.com",
                                                "additionalProperties": {}
                                            }
                                        },
                                        {
                                            "id": 79,
                                            "labels": [
                                                "User"
                                            ],
                                            "properties": {
                                                "name": "Snehal",
                                                "email": "snehal.todewale@weboniselab.com",
                                                "additionalProperties": {}
                                            }
                                        },
                                        {
                                            "id": 78,
                                            "labels": [
                                                "Kpi"
                                            ],
                                            "properties": {
                                                "name": "Rate of designer about solution failure",
                                                "email": null,
                                                "additionalProperties": {}
                                            }
                                        },
                                        {
                                            "id": 81,
                                            "labels": [
                                                "User"
                                            ],
                                            "properties": {
                                                "name": "Aayushi",
                                                "email": "aayushi@weboniselab.com",
                                                "additionalProperties": {}
                                            }
                                        },
                                        {
                                            "id": 79,
                                            "labels": [
                                                "User"
                                            ],
                                            "properties": {
                                                "name": "Snehal",
                                                "email": "snehal.todewale@weboniselab.com",
                                                "additionalProperties": {}
                                            }
                                        },
                                        {
                                            "id": 80,
                                            "labels": [
                                                "User"
                                            ],
                                            "properties": {
                                                "name": "Nayan",
                                                "email": "nayan.deshmukh@weboniselab.com",
                                                "additionalProperties": {}
                                            }
                                        },
                                        {
                                            "id": 79,
                                            "labels": [
                                                "User"
                                            ],
                                            "properties": {
                                                "name": "Snehal",
                                                "email": "snehal.todewale@weboniselab.com",
                                                "additionalProperties": {}
                                            }
                                        },
                                        {
                                            "id": 74,
                                            "labels": [
                                                "Kpi"
                                            ],
                                            "properties": {
                                                "name": "No. of iterations per task",
                                                "email": null,
                                                "additionalProperties": {}
                                            }
                                        },
                                        {
                                            "id": 81,
                                            "labels": [
                                                "User"
                                            ],
                                            "properties": {
                                                "name": "Aayushi",
                                                "email": "aayushi@weboniselab.com",
                                                "additionalProperties": {}
                                            }
                                        },
                                        {
                                            "id": 79,
                                            "labels": [
                                                "User"
                                            ],
                                            "properties": {
                                                "name": "Snehal",
                                                "email": "snehal.todewale@weboniselab.com",
                                                "additionalProperties": {}
                                            }
                                        },
                                        {
                                            "id": 80,
                                            "labels": [
                                                "User"
                                            ],
                                            "properties": {
                                                "name": "Nayan",
                                                "email": "nayan.deshmukh@weboniselab.com",
                                                "additionalProperties": {}
                                            }
                                        },
                                        {
                                            "id": 79,
                                            "labels": [
                                                "User"
                                            ],
                                            "properties": {
                                                "name": "Snehal",
                                                "email": "snehal.todewale@weboniselab.com",
                                                "additionalProperties": {}
                                            }
                                        },
                                        {
                                            "id": 77,
                                            "labels": [
                                                "Kpi"
                                            ],
                                            "properties": {
                                                "name": "Progress rate of designer about solution success",
                                                "email": null,
                                                "additionalProperties": {}
                                            }
                                        },
                                        {
                                            "id": 81,
                                            "labels": [
                                                "User"
                                            ],
                                            "properties": {
                                                "name": "Aayushi",
                                                "email": "aayushi@weboniselab.com",
                                                "additionalProperties": {}
                                            }
                                        }
                                    ],
                                    "relationships": [
                                        {
                                            "id": 73,
                                            "type": "KEY_PERFORMANCE_INDEX",
                                            "startNode": "79",
                                            "endNode": "82",
                                            "properties": {
                                                "name": null,
                                                "email": null,
                                                "additionalProperties": {}
                                            }
                                        },
                                        {
                                            "id": 68,
                                            "type": "REPORTS_TO",
                                            "startNode": "81",
                                            "endNode": "79",
                                            "properties": {
                                                "name": null,
                                                "email": null,
                                                "additionalProperties": {}
                                            }
                                        },
                                        {
                                            "id": 72,
                                            "type": "KEY_PERFORMANCE_INDEX",
                                            "startNode": "79",
                                            "endNode": "73",
                                            "properties": {
                                                "name": null,
                                                "email": null,
                                                "additionalProperties": {}
                                            }
                                        },
                                        {
                                            "id": 68,
                                            "type": "REPORTS_TO",
                                            "startNode": "81",
                                            "endNode": "79",
                                            "properties": {
                                                "name": null,
                                                "email": null,
                                                "additionalProperties": {}
                                            }
                                        },
                                        {
                                            "id": 71,
                                            "type": "KEY_PERFORMANCE_INDEX",
                                            "startNode": "79",
                                            "endNode": "74",
                                            "properties": {
                                                "name": null,
                                                "email": null,
                                                "additionalProperties": {}
                                            }
                                        },
                                        {
                                            "id": 68,
                                            "type": "REPORTS_TO",
                                            "startNode": "81",
                                            "endNode": "79",
                                            "properties": {
                                                "name": null,
                                                "email": null,
                                                "additionalProperties": {}
                                            }
                                        },
                                        {
                                            "id": 70,
                                            "type": "KEY_PERFORMANCE_INDEX",
                                            "startNode": "79",
                                            "endNode": "76",
                                            "properties": {
                                                "name": null,
                                                "email": null,
                                                "additionalProperties": {}
                                            }
                                        },
                                        {
                                            "id": 68,
                                            "type": "REPORTS_TO",
                                            "startNode": "81",
                                            "endNode": "79",
                                            "properties": {
                                                "name": null,
                                                "email": null,
                                                "additionalProperties": {}
                                            }
                                        },
                                        {
                                            "id": 5,
                                            "type": "KEY_PERFORMANCE_INDEX",
                                            "startNode": "80",
                                            "endNode": "2",
                                            "properties": {
                                                "name": null,
                                                "email": null,
                                                "additionalProperties": {}
                                            }
                                        },
                                        {
                                            "id": 68,
                                            "type": "REPORTS_TO",
                                            "startNode": "81",
                                            "endNode": "79",
                                            "properties": {
                                                "name": null,
                                                "email": null,
                                                "additionalProperties": {}
                                            }
                                        },
                                        {
                                            "id": 4,
                                            "type": "KEY_PERFORMANCE_INDEX",
                                            "startNode": "80",
                                            "endNode": "1",
                                            "properties": {
                                                "name": null,
                                                "email": null,
                                                "additionalProperties": {}
                                            }
                                        },
                                        {
                                            "id": 68,
                                            "type": "REPORTS_TO",
                                            "startNode": "81",
                                            "endNode": "79",
                                            "properties": {
                                                "name": null,
                                                "email": null,
                                                "additionalProperties": {}
                                            }
                                        },
                                        {
                                            "id": 3,
                                            "type": "KEY_PERFORMANCE_INDEX",
                                            "startNode": "80",
                                            "endNode": "0",
                                            "properties": {
                                                "name": null,
                                                "email": null,
                                                "additionalProperties": {}
                                            }
                                        },
                                        {
                                            "id": 68,
                                            "type": "REPORTS_TO",
                                            "startNode": "81",
                                            "endNode": "79",
                                            "properties": {
                                                "name": null,
                                                "email": null,
                                                "additionalProperties": {}
                                            }
                                        },
                                        {
                                            "id": 2,
                                            "type": "KEY_PERFORMANCE_INDEX",
                                            "startNode": "81",
                                            "endNode": "78",
                                            "properties": {
                                                "name": null,
                                                "email": null,
                                                "additionalProperties": {}
                                            }
                                        },
                                        {
                                            "id": 68,
                                            "type": "REPORTS_TO",
                                            "startNode": "81",
                                            "endNode": "79",
                                            "properties": {
                                                "name": null,
                                                "email": null,
                                                "additionalProperties": {}
                                            }
                                        },
                                        {
                                            "id": 1,
                                            "type": "KEY_PERFORMANCE_INDEX",
                                            "startNode": "81",
                                            "endNode": "74",
                                            "properties": {
                                                "name": null,
                                                "email": null,
                                                "additionalProperties": {}
                                            }
                                        },
                                        {
                                            "id": 68,
                                            "type": "REPORTS_TO",
                                            "startNode": "81",
                                            "endNode": "79",
                                            "properties": {
                                                "name": null,
                                                "email": null,
                                                "additionalProperties": {}
                                            }
                                        },
                                        {
                                            "id": 0,
                                            "type": "KEY_PERFORMANCE_INDEX",
                                            "startNode": "81",
                                            "endNode": "77",
                                            "properties": {
                                                "name": null,
                                                "email": null,
                                                "additionalProperties": {}
                                            }
                                        },
                                        {
                                            "id": 68,
                                            "type": "REPORTS_TO",
                                            "startNode": "81",
                                            "endNode": "79",
                                            "properties": {
                                                "name": null,
                                                "email": null,
                                                "additionalProperties": {}
                                            }
                                        },
                                        {
                                            "id": 73,
                                            "type": "KEY_PERFORMANCE_INDEX",
                                            "startNode": "79",
                                            "endNode": "82",
                                            "properties": {
                                                "name": null,
                                                "email": null,
                                                "additionalProperties": {}
                                            }
                                        },
                                        {
                                            "id": 67,
                                            "type": "REPORTS_TO",
                                            "startNode": "79",
                                            "endNode": "80",
                                            "properties": {
                                                "name": null,
                                                "email": null,
                                                "additionalProperties": {}
                                            }
                                        },
                                        {
                                            "id": 72,
                                            "type": "KEY_PERFORMANCE_INDEX",
                                            "startNode": "79",
                                            "endNode": "73",
                                            "properties": {
                                                "name": null,
                                                "email": null,
                                                "additionalProperties": {}
                                            }
                                        },
                                        {
                                            "id": 67,
                                            "type": "REPORTS_TO",
                                            "startNode": "79",
                                            "endNode": "80",
                                            "properties": {
                                                "name": null,
                                                "email": null,
                                                "additionalProperties": {}
                                            }
                                        },
                                        {
                                            "id": 71,
                                            "type": "KEY_PERFORMANCE_INDEX",
                                            "startNode": "79",
                                            "endNode": "74",
                                            "properties": {
                                                "name": null,
                                                "email": null,
                                                "additionalProperties": {}
                                            }
                                        },
                                        {
                                            "id": 67,
                                            "type": "REPORTS_TO",
                                            "startNode": "79",
                                            "endNode": "80",
                                            "properties": {
                                                "name": null,
                                                "email": null,
                                                "additionalProperties": {}
                                            }
                                        },
                                        {
                                            "id": 70,
                                            "type": "KEY_PERFORMANCE_INDEX",
                                            "startNode": "79",
                                            "endNode": "76",
                                            "properties": {
                                                "name": null,
                                                "email": null,
                                                "additionalProperties": {}
                                            }
                                        },
                                        {
                                            "id": 67,
                                            "type": "REPORTS_TO",
                                            "startNode": "79",
                                            "endNode": "80",
                                            "properties": {
                                                "name": null,
                                                "email": null,
                                                "additionalProperties": {}
                                            }
                                        },
                                        {
                                            "id": 5,
                                            "type": "KEY_PERFORMANCE_INDEX",
                                            "startNode": "80",
                                            "endNode": "2",
                                            "properties": {
                                                "name": null,
                                                "email": null,
                                                "additionalProperties": {}
                                            }
                                        },
                                        {
                                            "id": 67,
                                            "type": "REPORTS_TO",
                                            "startNode": "79",
                                            "endNode": "80",
                                            "properties": {
                                                "name": null,
                                                "email": null,
                                                "additionalProperties": {}
                                            }
                                        },
                                        {
                                            "id": 4,
                                            "type": "KEY_PERFORMANCE_INDEX",
                                            "startNode": "80",
                                            "endNode": "1",
                                            "properties": {
                                                "name": null,
                                                "email": null,
                                                "additionalProperties": {}
                                            }
                                        },
                                        {
                                            "id": 67,
                                            "type": "REPORTS_TO",
                                            "startNode": "79",
                                            "endNode": "80",
                                            "properties": {
                                                "name": null,
                                                "email": null,
                                                "additionalProperties": {}
                                            }
                                        },
                                        {
                                            "id": 3,
                                            "type": "KEY_PERFORMANCE_INDEX",
                                            "startNode": "80",
                                            "endNode": "0",
                                            "properties": {
                                                "name": null,
                                                "email": null,
                                                "additionalProperties": {}
                                            }
                                        },
                                        {
                                            "id": 67,
                                            "type": "REPORTS_TO",
                                            "startNode": "79",
                                            "endNode": "80",
                                            "properties": {
                                                "name": null,
                                                "email": null,
                                                "additionalProperties": {}
                                            }
                                        },
                                        {
                                            "id": 2,
                                            "type": "KEY_PERFORMANCE_INDEX",
                                            "startNode": "81",
                                            "endNode": "78",
                                            "properties": {
                                                "name": null,
                                                "email": null,
                                                "additionalProperties": {}
                                            }
                                        },
                                        {
                                            "id": 67,
                                            "type": "REPORTS_TO",
                                            "startNode": "79",
                                            "endNode": "80",
                                            "properties": {
                                                "name": null,
                                                "email": null,
                                                "additionalProperties": {}
                                            }
                                        },
                                        {
                                            "id": 1,
                                            "type": "KEY_PERFORMANCE_INDEX",
                                            "startNode": "81",
                                            "endNode": "74",
                                            "properties": {
                                                "name": null,
                                                "email": null,
                                                "additionalProperties": {}
                                            }
                                        },
                                        {
                                            "id": 67,
                                            "type": "REPORTS_TO",
                                            "startNode": "79",
                                            "endNode": "80",
                                            "properties": {
                                                "name": null,
                                                "email": null,
                                                "additionalProperties": {}
                                            }
                                        },
                                        {
                                            "id": 0,
                                            "type": "KEY_PERFORMANCE_INDEX",
                                            "startNode": "81",
                                            "endNode": "77",
                                            "properties": {
                                                "name": null,
                                                "email": null,
                                                "additionalProperties": {}
                                            }
                                        },
                                        {
                                            "id": 67,
                                            "type": "REPORTS_TO",
                                            "startNode": "79",
                                            "endNode": "80",
                                            "properties": {
                                                "name": null,
                                                "email": null,
                                                "additionalProperties": {}
                                            }
                                        }
                                    ]
                                }
                            }
                        ]
                    }
                ],
                "errors": null
            }

        }
    },

    // componentWillMount() {
    //     this.createGraph()
    // },

    componentDidMount() {
        this.createGraph()
    },

    createGraph() {
        // var graph = this.state.graph;
        // var width = 800;
        // var height = 800;
        // // force layout setup
        // var force = d3.layout.force()
        //     .charge(-100).linkDistance(100).size([width, height]);

        // // setup svg div
        // var svg = d3.select("#graph").append("svg")
        //     .attr("width", "800px").attr("height", "800px")
        //     .attr("pointer-events", "all");
        // force.nodes(graph.nodes).links(graph.links).start();
        // // render relationships as lines
        // var link = svg.selectAll(".link")
        //     .data(graph.links).enter()
        //     .append("line").attr("class", "link")

        // // render nodes as circles, css-class from label
        // var node = svg.selectAll(".node")
        //     .data(graph.nodes).enter()
        //     .append("circle")
        //     .attr("class", (d) => "node " + d.label)
        //     .attr("r", 10);

        // // html title attribute for title node-attribute
        // node.append("title")
        //     .text((d, i) => d.label)

        // // force feed algo ticks for coordinate computation
        // force.on("tick", () => {
        //     link.attr("x1", (d) => d.source.x)
        //         .attr("y1", (d) => d.source.y)
        //         .attr("x2", (d) => d.target.x)
        //         .attr("y2", (d) => d.target.y);

        //     node.attr("cx", function (d) { return d.x; })
        //         .attr("cy", function (d) { return d.y; });
        // });
        var neo4jd3 = new Neo4jd3('#graph', {
            highlight: [
                {
                    class: 'Project',
                    property: 'name',
                    value: 'neo4jd3'
                }, {
                    class: 'User',
                    property: 'userId',
                    value: 'eisman'
                }
            ],
            icons: {
                // //                        'Address': 'home',
                // 'Api': 'gear',
                // //                        'BirthDate': 'birthday-cake',
                // 'Cookie': 'paw',
                // //                        'CreditCard': 'credit-card',
                // //                        'Device': 'laptop',
                // 'Email': 'at',
                // 'Git': 'git',
                // 'Github': 'github',
                // 'Google': 'google',
                // //                        'icons': 'font-awesome',
                // 'Ip': 'map-marker',
                // 'Issues': 'exclamation-circle',
                // 'Language': 'language',
                // 'Options': 'sliders',
                // 'Password': 'lock',
                // 'Phone': 'phone',
                // 'Project': 'folder-open',
                // 'SecurityChallengeAnswer': 'commenting',
                // 'User': 'user',
                // 'zoomFit': 'arrows-alt',
                // 'zoomIn': 'search-plus',
                // 'zoomOut': 'search-minus'
            },
            images: {

            },
            minCollision: 60,
            neo4jData: this.state.graph,
            nodeRadius: 25,
            onNodeDoubleClick: function (node) {
                switch (node.id) {
                    case '25':
                        // Google
                        window.open(node.properties.url, '_blank');
                        break;
                    default:
                        var maxNodes = 5,
                            data = neo4jd3.randomD3Data(node, maxNodes);
                        neo4jd3.updateWithD3Data(data);
                        break;
                }
            },
            onRelationshipDoubleClick: function (relationship) {
                console.log('double click on relationship: ' + JSON.stringify(relationship));
            },
            zoomFit: true
        });
    },

    render() {
        return (<div>
            <h1>Hello</h1>
            <div id="graph"></div>
            {/*svg id="c" width={500} height={500}></svg>*/}
        </div>
        )
    }
});

export default Graph;