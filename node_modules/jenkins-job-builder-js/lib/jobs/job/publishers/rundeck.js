'use strict';
var util$940 = require('../../../misc/util.js');
var Rundeck$942 = function (upper$949, obj$950) {
    this.upper = upper$949;
    this.obj = obj$950;
};
Rundeck$942.prototype.up = function () {
    return this.upper;
};
Rundeck$942.prototype.and = Rundeck$942.prototype.up;
module.exports = Rundeck$942;
Rundeck$942.prototype[util$940.camelize('job-id')] = function (value$951) {
    return util$940.primitiveAccessor.apply(this, [
        'job-id',
        value$951
    ]);
};
Rundeck$942.prototype[util$940.camelize('options')] = function (value$952) {
    return util$940.primitiveAccessor.apply(this, [
        'options',
        value$952
    ]);
};
Rundeck$942.prototype[util$940.camelize('node-filters')] = function (value$953) {
    return util$940.primitiveAccessor.apply(this, [
        'node-filters',
        value$953
    ]);
};
Rundeck$942.prototype[util$940.camelize('tag')] = function (value$954) {
    return util$940.primitiveAccessor.apply(this, [
        'tag',
        value$954
    ]);
};
Rundeck$942.prototype[util$940.camelize('wait-for-rundeck')] = function (value$955) {
    return util$940.primitiveAccessor.apply(this, [
        'wait-for-rundeck',
        value$955
    ]);
};
Rundeck$942.prototype[util$940.camelize('fail-the-build')] = function (value$956) {
    return util$940.primitiveAccessor.apply(this, [
        'fail-the-build',
        value$956
    ]);
};