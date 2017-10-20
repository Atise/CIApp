'use strict';
var util$940 = require('../../../../misc/util.js');
var Healthy$941 = require('./metric-target.js');
var Unhealthy$942 = require('./metric-target.js');
var Failing$943 = require('./metric-target.js');
var MetricTargets$945 = function (upper$949, array$950) {
    this.upper = upper$949;
    this.array = array$950;
};
MetricTargets$945.prototype.up = function () {
    return this.upper;
};
MetricTargets$945.prototype.and = MetricTargets$945.prototype.up;
module.exports = MetricTargets$945;
MetricTargets$945.prototype[util$940.camelize('healthy')] = function (value$951) {
    return util$940.keyedObjectElementAccessor.apply(this, [
        'healthy',
        Healthy$941,
        value$951
    ]);
};
MetricTargets$945.prototype[util$940.camelize('unhealthy')] = function (value$952) {
    return util$940.keyedObjectElementAccessor.apply(this, [
        'unhealthy',
        Unhealthy$942,
        value$952
    ]);
};
MetricTargets$945.prototype[util$940.camelize('failing')] = function (value$953) {
    return util$940.keyedObjectElementAccessor.apply(this, [
        'failing',
        Failing$943,
        value$953
    ]);
};