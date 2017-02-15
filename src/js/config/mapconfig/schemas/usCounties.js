const fipscounties = require('./helpers/counties-fips');

const counties = {
    label: 'U.S. Counties',
    name: 'countiesUS',
    values: fipscounties,
    proj: 'albersUsa',
    translate: [310, 180],
    translateCartogram: [270, 180],
    precision: 1,
    scale: 710,
    topojson : Object.freeze(require('./../mapfiles/us-counties/us-counties-sorted.json')),
    feature: 'counties',
    adjustLabels: function(adjusty=0,adjustx=0, label) {
      return [adjusty,adjustx,label];
    },
    matchLogic: function(val) {
        //if (this.values[val]) { return this.values[val]; }
        if (!isNaN(val)) { return +val; }
        else { return val; }
    },
    test: function(column_val, polygon_val) {
    	//console.log(this.matchLogic(polygon_val));
      return (this.matchLogic(+polygon_val.id) === +column_val);
    }
  }

module.exports = counties;
