'use strict';
var util$940 = require('../../misc/util.js');
var HipChat$942 = function (upper$952, obj$953) {
    this.upper = upper$952;
    this.obj = obj$953;
};
HipChat$942.prototype.up = function () {
    return this.upper;
};
HipChat$942.prototype.and = HipChat$942.prototype.up;
module.exports = HipChat$942;
HipChat$942.prototype[util$940.camelize('enabled')] = function (value$954) {
    return util$940.primitiveAccessor.apply(this, [
        'enabled',
        value$954
    ]);
};
HipChat$942.prototype[util$940.camelize('rooms')] = function (value$955) {
    return util$940.primitiveArrayAccessor.apply(this, [
        'rooms',
        value$955
    ]);
};
HipChat$942.prototype[util$940.camelize('notify-start')] = function (value$956) {
    return util$940.primitiveAccessor.apply(this, [
        'notify-start',
        value$956
    ]);
};
HipChat$942.prototype[util$940.camelize('notify-success')] = function (value$957) {
    return util$940.primitiveAccessor.apply(this, [
        'notify-success',
        value$957
    ]);
};
HipChat$942.prototype[util$940.camelize('notify-aborted')] = function (value$958) {
    return util$940.primitiveAccessor.apply(this, [
        'notify-aborted',
        value$958
    ]);
};
HipChat$942.prototype[util$940.camelize('notify-not-built')] = function (value$959) {
    return util$940.primitiveAccessor.apply(this, [
        'notify-not-built',
        value$959
    ]);
};
HipChat$942.prototype[util$940.camelize('notify-unstable')] = function (value$960) {
    return util$940.primitiveAccessor.apply(this, [
        'notify-unstable',
        value$960
    ]);
};
HipChat$942.prototype[util$940.camelize('notify-failure')] = function (value$961) {
    return util$940.primitiveAccessor.apply(this, [
        'notify-failure',
        value$961
    ]);
};
HipChat$942.prototype[util$940.camelize('notify-back-to-normal')] = function (value$962) {
    return util$940.primitiveAccessor.apply(this, [
        'notify-back-to-normal',
        value$962
    ]);
};