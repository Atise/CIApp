'use strict';
var util$940 = require('../../../misc/util.js');
var Targets$941 = require('./cobertura/targets.js');
var Cobertura$943 = function (upper$954, obj$955) {
    this.upper = upper$954;
    this.obj = obj$955;
};
Cobertura$943.prototype.up = function () {
    return this.upper;
};
Cobertura$943.prototype.and = Cobertura$943.prototype.up;
module.exports = Cobertura$943;
Cobertura$943.prototype[util$940.camelize('report-file')] = function (value$956) {
    return util$940.primitiveAccessor.apply(this, [
        'report-file',
        value$956
    ]);
};
Cobertura$943.prototype[util$940.camelize('only-stable')] = function (value$957) {
    return util$940.primitiveAccessor.apply(this, [
        'only-stable',
        value$957
    ]);
};
Cobertura$943.prototype[util$940.camelize('fail-no-reports')] = function (value$958) {
    return util$940.primitiveAccessor.apply(this, [
        'fail-no-reports',
        value$958
    ]);
};
Cobertura$943.prototype[util$940.camelize('fail-unhealthy')] = function (value$959) {
    return util$940.primitiveAccessor.apply(this, [
        'fail-unhealthy',
        value$959
    ]);
};
Cobertura$943.prototype[util$940.camelize('fail-unstable')] = function (value$960) {
    return util$940.primitiveAccessor.apply(this, [
        'fail-unstable',
        value$960
    ]);
};
Cobertura$943.prototype[util$940.camelize('health-auto-update')] = function (value$961) {
    return util$940.primitiveAccessor.apply(this, [
        'health-auto-update',
        value$961
    ]);
};
Cobertura$943.prototype[util$940.camelize('stability-auto-update')] = function (value$962) {
    return util$940.primitiveAccessor.apply(this, [
        'stability-auto-update',
        value$962
    ]);
};
Cobertura$943.prototype[util$940.camelize('zoom-coverage-chart')] = function (value$963) {
    return util$940.primitiveAccessor.apply(this, [
        'zoom-coverage-chart',
        value$963
    ]);
};
Cobertura$943.prototype[util$940.camelize('source-encoding')] = function (value$964) {
    return util$940.primitiveAccessor.apply(this, [
        'source-encoding',
        value$964
    ]);
};
Cobertura$943.prototype[util$940.camelize('targets')] = function (value$965) {
    return util$940.customArrayAccessor.apply(this, [
        'targets',
        Targets$941,
        value$965
    ]);
};