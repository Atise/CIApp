'use strict';
var util$940 = require('../../../misc/util.js');
var Html$941 = require('./cloverphp/html.js');
var MetricTargets$942 = require('./cloverphp/metric-targets.js');
var Cloverphp$944 = function (upper$948, obj$949) {
    this.upper = upper$948;
    this.obj = obj$949;
};
Cloverphp$944.prototype.up = function () {
    return this.upper;
};
Cloverphp$944.prototype.and = Cloverphp$944.prototype.up;
module.exports = Cloverphp$944;
Cloverphp$944.prototype[util$940.camelize('xml-location')] = function (value$950) {
    return util$940.primitiveAccessor.apply(this, [
        'xml-location',
        value$950
    ]);
};
Cloverphp$944.prototype[util$940.camelize('html')] = function (value$951) {
    return util$940.objectAccessor.apply(this, [
        'html',
        Html$941,
        value$951
    ]);
};
Cloverphp$944.prototype[util$940.camelize('metric-targets')] = function (value$952) {
    return util$940.customArrayAccessor.apply(this, [
        'metric-targets',
        MetricTargets$942,
        value$952
    ]);
};