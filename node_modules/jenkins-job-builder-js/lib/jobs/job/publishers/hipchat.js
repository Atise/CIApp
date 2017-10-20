'use strict';
var util$940 = require('../../../misc/util.js');
var Hipchat$942 = function (upper$954, obj$955) {
    this.upper = upper$954;
    this.obj = obj$955;
};
Hipchat$942.prototype.up = function () {
    return this.upper;
};
Hipchat$942.prototype.and = Hipchat$942.prototype.up;
module.exports = Hipchat$942;
Hipchat$942.prototype[util$940.camelize('token')] = function (value$956) {
    return util$940.primitiveAccessor.apply(this, [
        'token',
        value$956
    ]);
};
Hipchat$942.prototype[util$940.camelize('rooms')] = function (value$957) {
    return util$940.primitiveArrayAccessor.apply(this, [
        'rooms',
        value$957
    ]);
};
Hipchat$942.prototype[util$940.camelize('notify-start')] = function (value$958) {
    return util$940.primitiveAccessor.apply(this, [
        'notify-start',
        value$958
    ]);
};
Hipchat$942.prototype[util$940.camelize('notify-success')] = function (value$959) {
    return util$940.primitiveAccessor.apply(this, [
        'notify-success',
        value$959
    ]);
};
Hipchat$942.prototype[util$940.camelize('notify-aborted')] = function (value$960) {
    return util$940.primitiveAccessor.apply(this, [
        'notify-aborted',
        value$960
    ]);
};
Hipchat$942.prototype[util$940.camelize('notify-not-built')] = function (value$961) {
    return util$940.primitiveAccessor.apply(this, [
        'notify-not-built',
        value$961
    ]);
};
Hipchat$942.prototype[util$940.camelize('notify-unstable')] = function (value$962) {
    return util$940.primitiveAccessor.apply(this, [
        'notify-unstable',
        value$962
    ]);
};
Hipchat$942.prototype[util$940.camelize('notify-failure')] = function (value$963) {
    return util$940.primitiveAccessor.apply(this, [
        'notify-failure',
        value$963
    ]);
};
Hipchat$942.prototype[util$940.camelize('notify-back-to-normal')] = function (value$964) {
    return util$940.primitiveAccessor.apply(this, [
        'notify-back-to-normal',
        value$964
    ]);
};
Hipchat$942.prototype[util$940.camelize('start-message')] = function (value$965) {
    return util$940.primitiveAccessor.apply(this, [
        'start-message',
        value$965
    ]);
};
Hipchat$942.prototype[util$940.camelize('complete-message')] = function (value$966) {
    return util$940.primitiveAccessor.apply(this, [
        'complete-message',
        value$966
    ]);
};