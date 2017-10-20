'use strict';
var util$940 = require('../../../misc/util.js');
var SonatypeClm$942 = function (upper$949, obj$950) {
    this.upper = upper$949;
    this.obj = obj$950;
};
SonatypeClm$942.prototype.up = function () {
    return this.upper;
};
SonatypeClm$942.prototype.and = SonatypeClm$942.prototype.up;
module.exports = SonatypeClm$942;
SonatypeClm$942.prototype[util$940.camelize('application-name')] = function (value$951) {
    return util$940.primitiveAccessor.apply(this, [
        'application-name',
        value$951
    ]);
};
SonatypeClm$942.prototype[util$940.camelize('fail-on-clm-server-failure')] = function (value$952) {
    return util$940.primitiveAccessor.apply(this, [
        'fail-on-clm-server-failure',
        value$952
    ]);
};
SonatypeClm$942.prototype[util$940.camelize('stage')] = function (value$953) {
    return util$940.primitiveAccessor.apply(this, [
        'stage',
        value$953
    ]);
};
SonatypeClm$942.prototype[util$940.camelize('scan-targets')] = function (value$954) {
    return util$940.primitiveAccessor.apply(this, [
        'scan-targets',
        value$954
    ]);
};
SonatypeClm$942.prototype[util$940.camelize('module-excludes')] = function (value$955) {
    return util$940.primitiveAccessor.apply(this, [
        'module-excludes',
        value$955
    ]);
};
SonatypeClm$942.prototype[util$940.camelize('advanced-options')] = function (value$956) {
    return util$940.primitiveAccessor.apply(this, [
        'advanced-options',
        value$956
    ]);
};