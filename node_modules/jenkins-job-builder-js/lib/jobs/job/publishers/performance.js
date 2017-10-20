'use strict';
var util$940 = require('../../../misc/util.js');
var Report$941 = require('./performance/report.js');
var Performance$943 = function (upper$947, obj$948) {
    this.upper = upper$947;
    this.obj = obj$948;
};
Performance$943.prototype.up = function () {
    return this.upper;
};
Performance$943.prototype.and = Performance$943.prototype.up;
module.exports = Performance$943;
Performance$943.prototype[util$940.camelize('failed-threshold')] = function (value$949) {
    return util$940.primitiveAccessor.apply(this, [
        'failed-threshold',
        value$949
    ]);
};
Performance$943.prototype[util$940.camelize('unstable-threshold')] = function (value$950) {
    return util$940.primitiveAccessor.apply(this, [
        'unstable-threshold',
        value$950
    ]);
};
Performance$943.prototype[util$940.camelize('report')] = function (value$951) {
    return util$940.objectArrayAccessor.apply(this, [
        'report',
        Report$941,
        value$951
    ]);
};