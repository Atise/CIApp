'use strict';
var util$940 = require('../../../misc/util.js');
var Timeout$942 = function (upper$952, obj$953) {
    this.upper = upper$952;
    this.obj = obj$953;
};
Timeout$942.prototype.up = function () {
    return this.upper;
};
Timeout$942.prototype.and = Timeout$942.prototype.up;
module.exports = Timeout$942;
Timeout$942.prototype[util$940.camelize('fail')] = function (value$954) {
    return util$940.primitiveAccessor.apply(this, [
        'fail',
        value$954
    ]);
};
Timeout$942.prototype[util$940.camelize('abort')] = function (value$955) {
    return util$940.primitiveAccessor.apply(this, [
        'abort',
        value$955
    ]);
};
Timeout$942.prototype[util$940.camelize('write-description')] = function (value$956) {
    return util$940.primitiveAccessor.apply(this, [
        'write-description',
        value$956
    ]);
};
Timeout$942.prototype[util$940.camelize('timeout')] = function (value$957) {
    return util$940.primitiveAccessor.apply(this, [
        'timeout',
        value$957
    ]);
};
Timeout$942.prototype[util$940.camelize('timeout-var')] = function (value$958) {
    return util$940.primitiveAccessor.apply(this, [
        'timeout-var',
        value$958
    ]);
};
Timeout$942.prototype[util$940.camelize('type')] = function (value$959) {
    return util$940.primitiveAccessor.apply(this, [
        'type',
        value$959
    ]);
};
Timeout$942.prototype[util$940.camelize('elastic-percentage')] = function (value$960) {
    return util$940.primitiveAccessor.apply(this, [
        'elastic-percentage',
        value$960
    ]);
};
Timeout$942.prototype[util$940.camelize('elastic-number-builds')] = function (value$961) {
    return util$940.primitiveAccessor.apply(this, [
        'elastic-number-builds',
        value$961
    ]);
};
Timeout$942.prototype[util$940.camelize('elastic-default-timeout')] = function (value$962) {
    return util$940.primitiveAccessor.apply(this, [
        'elastic-default-timeout',
        value$962
    ]);
};