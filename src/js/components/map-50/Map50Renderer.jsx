import React from 'react';
import d3 from 'd3';
import {filter} from 'lodash';
import {centroid} from 'turf';

// Flux actions
const MapViewActions = require("../../actions/ChartViewActions");

const PolygonCollection = React.createClass({

  propTypes: {
    geoPath: React.PropTypes.func,
    polygonClass: React.PropTypes.string,
    onClick: React.PropTypes.func,
    chartProps: React.PropTypes.object.isRequired,
    stylings: React.PropTypes.object.isRequired
  },
  render: function() {

    const mapSchema = this.props.schema;

    const geoPath = this.props.geoPath;
    const projection = this.props.proj;

    const currSettings = this.props.chartProps.scale;

    const alldata = this.props.chartProps.data;
    const columnNames = this.props.chartProps.columns;

    const showLabels = this.props.stylings.showStateLabels;
    const adjustLabels = mapSchema.adjustLabels;
    const translation = `translate(0,${this.props.translate.maptop})`;

    if (this.props.onClick) onClick = this.props.onClick;

    const polygonCollection = this.props.data.map((polygonData, i) => {

      let polygonType = (polygonData.type) ? polygonData.type+'_' : '';
      let thisvalue;
      
      alldata.forEach(function(d, j) {
        if (thisvalue === undefined || !thisvalue.length) {
          thisvalue = Object.assign(filter(d.values, function(o) { return mapSchema.test(o[columnNames[0]], polygonData.id); }), {index:d.index});
        }
      });

      const styles = {};
      styles.stroke = this.props.stylings.stroke; 
      styles.fill = (thisvalue.length) ? currSettings[thisvalue.index].d3scale(thisvalue[0][columnNames[2]]) : '#777';

      if (showLabels) {

        const centers = projection(centroid(polygonData).geometry.coordinates);
        let attributes = {x:null, y:null};

        if (centers) {

          const adjustStateLabels = adjustLabels(null,null,thisvalue[0][columnNames[0]]);

          attributes = { x:centers[0] + adjustStateLabels[1],
                         y:centers[1] + adjustStateLabels[0] + 6,
                         text:adjustStateLabels[2] }
        } 
        
        return (
          <g key= {`polygon_with_${i}`}>
            <path
              id= {`polygon_${polygonType}${i}`}
              d= {geoPath(polygonData.geometry)}
              className={this.props.polygonClass}
              style={styles}
            />
            <text 
              x={attributes.x}
              y={attributes.y}
              className={'state-labels-show'}
            >{attributes.text}</text>
          </g>
        )
      }
      else {
         return (
          <path
            id= {`polygon_${polygonType}${i}`}
            key= {`polygon_${i}`}
            d= {geoPath(polygonData.geometry)}
            className={this.props.polygonClass}
            style={styles}
          />
        )
      }
    });

    return (
      <g transform={translation}>{polygonCollection}</g>
    );
  }
});

module.exports = PolygonCollection
