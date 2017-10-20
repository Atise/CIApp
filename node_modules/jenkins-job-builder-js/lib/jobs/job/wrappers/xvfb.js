'use strict';
var util$940 = require('../../../misc/util.js');
var Xvfb$942 = function (upper$954, obj$955) {
    this.upper = upper$954;
    this.obj = obj$955;
};
Xvfb$942.prototype.up = function () {
    return this.upper;
};
Xvfb$942.prototype.and = Xvfb$942.prototype.up;
module.exports = Xvfb$942;
Xvfb$942.prototype[util$940.camelize('installation-name')] = function (value$956) {
    return util$940.primitiveAccessor.apply(this, [
        'installation-name',
        value$956
    ]);
};
Xvfb$942.prototype[util$940.camelize('auto-display-name')] = function (value$957) {
    return util$940.primitiveAccessor.apply(this, [
        'auto-display-name',
        value$957
    ]);
};
Xvfb$942.prototype[util$940.camelize('display-name')] = function (value$958) {
    return util$940.primitiveAccessor.apply(this, [
        'display-name',
        value$958
    ]);
};
Xvfb$942.prototype[util$940.camelize('assigned-labels')] = function (value$959) {
    return util$940.primitiveAccessor.apply(this, [
        'assigned-labels',
        value$959
    ]);
};
Xvfb$942.prototype[util$940.camelize('parallel-build')] = function (value$960) {
    return util$940.primitiveAccessor.apply(this, [
        'parallel-build',
        value$960
    ]);
};
Xvfb$942.prototype[util$940.camelize('timeout')] = function (value$961) {
    return util$940.primitiveAccessor.apply(this, [
        'timeout',
        value$961
    ]);
};
Xvfb$942.prototype[util$940.camelize('screen')] = function (value$962) {
    return util$940.primitiveAccessor.apply(this, [
        'screen',
        value$962
    ]);
};
Xvfb$942.prototype[util$940.camelize('display-name-offset')] = function (value$963) {
    return util$940.primitiveAccessor.apply(this, [
        'display-name-offset',
        value$963
    ]);
};
Xvfb$942.prototype[util$940.camelize('additional-options')] = function (value$964) {
    return util$940.primitiveAccessor.apply(this, [
        'additional-options',
        value$964
    ]);
};
Xvfb$942.prototype[util$940.camelize('debug')] = function (value$965) {
    return util$940.primitiveAccessor.apply(this, [
        'debug',
        value$965
    ]);
};
Xvfb$942.prototype[util$940.camelize('shutdown-with-build')] = function (value$966) {
    return util$940.primitiveAccessor.apply(this, [
        'shutdown-with-build',
        value$966
    ]);
};