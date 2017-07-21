import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

var Graph = React.createClass({
	getInitialState() {
		return {
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
												"Manager",
												"User"
											],
											"properties": {
												"name": "Kyle",
												"email": "abc@g.com",
												"additionalProperties": {}
											}
										},
										{
											"id": 80,
											"labels": [
												"User"
											],
											"properties": {
												"name": "Shweta",
												"email": "Shweta@weboniselab.com",
												"additionalProperties": {}
											}
										},
										{
											"id": 81,
											"labels": [
												"Reportee",
												"User"
											],
											"properties": {
												"name": "Pratibha",
												"email": "pratibha@weboniselab.com",
												"additionalProperties": {}
											}
										},
										{
											"id": 82,
											"labels": [
												"Reportee",
												"User"
											],
											"properties": {
												"name": "Snehal",
												"email": "snehal@weboniselab.com",
												"additionalProperties": {}
											}
										},
										{
											"id": 83,
											"labels": [
												"Kpi"
											],
											"properties": {
												"name": "Revenue",
												"email": null,
												"additionalProperties": {}
											}
										},
										{
											"id": 84,
											"labels": [
												"Kpi"
											],
											"properties": {
												"name": "Spending",
												"email": null,
												"additionalProperties": {}
											}
										},
										{
											"id": 85,
											"labels": [
												"Kpi"
											],
											"properties": {
												"name": "Delivery",
												"email": null,
												"additionalProperties": {}
											}
										},		
										{
											"id": 86,
											"labels": [
												"Kpi"
											],
											"properties": {
												"name": "Product",
												"email": null,
												"additionalProperties": {}
											}
										},
										{
											"id": 87,
											"labels": [
												"Kpi"
											],
											"properties": {
												"name": "Specs",
												"email": null,
												"additionalProperties": {}
											}
										},
										{
											"id": 88,
											"labels": [
												"Kpi"
											],
											"properties": {
												"name": "UI",
												"email": null,
												"additionalProperties": {}
											}
										},
										{
											"id": 89,
											"labels": [
												"Kpi"
											],
											"properties": {
												"name": "UX",
												"email": null,
												"additionalProperties": {}
											}
										},
										{
											"id": 90,
											"labels": [
												"Kpi"
											],
											"properties": {
												"name": "UX",
												"email": null,
												"additionalProperties": {}
											}
										},																		
									],
									"relationships": [
										{
											"id": 1,
											"type": "REPORT_TO",
											"startNode": "80",
											"endNode": "79",
											"properties": {
												"name": null,
												"email": null,
												"additionalProperties": {}
											}
										},
										{
											"id": 2,
											"type": "REPORT_TO",
											"startNode": "81",
											"endNode": "80",
											"properties": {
												"name": null,
												"email": null,
												"additionalProperties": {}
											}
										},{
											"id": 3,
											"type": "REPORTS_TO",
											"startNode": "82",
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
											"startNode": "79",
											"endNode": "83",
											"properties": {
												"name": null,
												"email": null,
												"additionalProperties": {}
											}
										},
										{
											"id": 5,
											"type": "KEY_PERFORMANCE_INDEX",
											"startNode": "79",
											"endNode": "84",
											"properties": {
												"name": null,
												"email": null,
												"additionalProperties": {}
											}
										},
										{
											"id": 6,
											"type": "KEY_PERFORMANCE_INDEX",
											"startNode": "80",
											"endNode": "85",
											"properties": {
												"name": null,
												"email": null,
												"additionalProperties": {}
											}
										},
										{
											"id": 6,
											"type": "KEY_PERFORMANCE_INDEX",
											"startNode": "80",
											"endNode": "90",
											"properties": {
												"name": null,
												"email": null,
												"additionalProperties": {}
											}
										},
										{
											"id": 7,
											"type": "KEY_PERFORMANCE_INDEX",
											"startNode": "81",
											"endNode": "86",
											"properties": {
												"name": null,
												"email": null,
												"additionalProperties": {}
											}
										},
										{
											"id": 8,
											"type": "KEY_PERFORMANCE_INDEX",
											"startNode": "81",
											"endNode": "87",
											"properties": {
												"name": null,
												"email": null,
												"additionalProperties": {}
											}
										},
										{
											"id": 9,
											"type": "KEY_PERFORMANCE_INDEX",
											"startNode": "82",
											"endNode": "88",
											"properties": {
												"name": null,
												"email": null,
												"additionalProperties": {}
											}
										},
										{
											"id": 10,
											"type": "KEY_PERFORMANCE_INDEX",
											"startNode": "82",
											"endNode": "89",
											"properties": {
												"name": null,
												"email": null,
												"additionalProperties": {}
											}
										},
										// {
										// 	"id": 11,
										// 	"type": "KEY_PERFORMANCE_INDEX",
										// 	"startNode": "80",
										// 	"endNode": "86",
										// 	"properties": {
										// 		"name": null,
										// 		"email": null,
										// 		"additionalProperties": {}
										// 	}
										// },
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
	componentDidMount() {
		this.createGraph()
	},

	createGraph() {
		var neo4jd3 = new Neo4jd3('#graph', {
			highlight: [

			],
			icons: {
			},
			images: {

			},
			minCollision: 100,
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
			zoomFit: false
		});
	},

	render() {
		return (<div>
			<h1>Graph Relationships</h1>
			<div id="graph"></div>
		</div>
		)
	}
});

export default Graph;