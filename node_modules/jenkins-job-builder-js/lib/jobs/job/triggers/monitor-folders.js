'use strict';
var util$940 = require('../../../misc/util.js');
var MonitorFolders$942 = function (upper$950, obj$951) {
    this.upper = upper$950;
    this.obj = obj$951;
};
MonitorFolders$942.prototype.up = function () {
    return this.upper;
};
MonitorFolders$942.prototype.and = MonitorFolders$942.prototype.up;
module.exports = MonitorFolders$942;
MonitorFolders$942.prototype[util$940.camelize('path')] = function (value$952) {
    return util$940.primitiveAccessor.apply(this, [
        'path',
        value$952
    ]);
};
MonitorFolders$942.prototype[util$940.camelize('includes')] = function (value$953) {
    return util$940.primitiveArrayAccessor.apply(this, [
        'includes',
        value$953
    ]);
};
MonitorFolders$942.prototype[util$940.camelize('excludes')] = function (value$954) {
    return util$940.primitiveAccessor.apply(this, [
        'excludes',
        value$954
    ]);
};
MonitorFolders$942.prototype[util$940.camelize('check-modification-date')] = function (value$955) {
    return util$940.primitiveAccessor.apply(this, [
        'check-modification-date',
        value$955
    ]);
};
MonitorFolders$942.prototype[util$940.camelize('check-content')] = function (value$956) {
    return util$940.primitiveAccessor.apply(this, [
        'check-content',
        value$956
    ]);
};
MonitorFolders$942.prototype[util$940.camelize('check-fewer')] = function (value$957) {
    return util$940.primitiveAccessor.apply(this, [
        'check-fewer',
        value$957
    ]);
};
MonitorFolders$942.prototype[util$940.camelize('cron')] = function (value$958) {
    return util$940.primitiveAccessor.apply(this, [
        'cron',
        value$958
    ]);
};