
import React, {PropTypes} from 'react';
import {ButtonGroup, Dropdown} from 'chartbuilder-ui';
const mapSchemas = require('./../../config/mapconfig/map-schema');

const dataTypeOptions = [
	{ title: "Dates", content: "Dates", value: "date" },
	{ title: "Names", content: "Names", value: "ordinal" },
	{ title: "Numbers", content: "Numbers", value: "numeric" }
];

const DataSeriesTypeSettings = React.createClass({
	propTypes: {
		onUpdate: PropTypes.func,
		chartProps: PropTypes.object
	},
	_handleSeriesTypeUpdate: function(ix,k,v) {
		const chartProps = this.props.chartProps;
		chartProps.input.type = v;
		this.props.onUpdate(chartProps.input);
	},
	_availableMaps: function() {
		const allMaps = [];

		mapSchemas.forEach(function(d) {
			allMaps.push({content: d.label, value: d.name});
		});
		return allMaps;
	},
	_availableMapName: function(map) {
		let mapName = '';

		mapSchemas.forEach(function(d) {
			if (d.name === map) {
				mapName = d.label;
			}
		});
		return mapName;
	},
	render: function() {
		const chartProps = this.props.chartProps;

		if (chartProps.visualType === 'chart') {
			return (
				<div className="section datatypesection">
						<h3>Your first column is</h3>
						<ButtonGroup
							className="button-group-wrapper"
							onClick={this._handleSeriesTypeUpdate.bind(null, this.props.chartProps, "dataType")}
							buttons={dataTypeOptions}
							value={
								chartProps.input.type ? chartProps.input.type : (
								chartProps.scale.hasDate ? "date" : (
								chartProps.scale.isNumeric ? "numeric" :
									"ordinal"
								))
							}
						/>
					</div>
				);
		} else if (chartProps.visualType === 'map') {
			return(
				<div className="section datatypesection">
					<h3>Choose a different map</h3>
					<Dropdown
						className="maps-dropdown"
						onChange={this._handleSeriesTypeUpdate.bind(null, this.props.chartProps, "dataType")}
						options={this._availableMaps()}
						value={this.props.chartProps.input.type}
					/>
					<a href="tk" className="download-dataset">Download a default {this._availableMapName(this.props.chartProps.input.type)} dataset (.csv)</a>
				</div>
			);
		}
	}
});

module.exports = DataSeriesTypeSettings;
