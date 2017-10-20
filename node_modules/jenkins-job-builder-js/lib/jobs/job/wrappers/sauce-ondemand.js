'use strict';
var util$940 = require('../../../misc/util.js');
var SauceOndemand$942 = function (upper$954, obj$955) {
    this.upper = upper$954;
    this.obj = obj$955;
};
SauceOndemand$942.prototype.up = function () {
    return this.upper;
};
SauceOndemand$942.prototype.and = SauceOndemand$942.prototype.up;
module.exports = SauceOndemand$942;
SauceOndemand$942.prototype[util$940.camelize('enable-sauce-connect')] = function (value$956) {
    return util$940.primitiveAccessor.apply(this, [
        'enable-sauce-connect',
        value$956
    ]);
};
SauceOndemand$942.prototype[util$940.camelize('sauce-host')] = function (value$957) {
    return util$940.primitiveAccessor.apply(this, [
        'sauce-host',
        value$957
    ]);
};
SauceOndemand$942.prototype[util$940.camelize('sauce-port')] = function (value$958) {
    return util$940.primitiveAccessor.apply(this, [
        'sauce-port',
        value$958
    ]);
};
SauceOndemand$942.prototype[util$940.camelize('override-username')] = function (value$959) {
    return util$940.primitiveAccessor.apply(this, [
        'override-username',
        value$959
    ]);
};
SauceOndemand$942.prototype[util$940.camelize('override-api-access-key')] = function (value$960) {
    return util$940.primitiveAccessor.apply(this, [
        'override-api-access-key',
        value$960
    ]);
};
SauceOndemand$942.prototype[util$940.camelize('starting-url')] = function (value$961) {
    return util$940.primitiveAccessor.apply(this, [
        'starting-url',
        value$961
    ]);
};
SauceOndemand$942.prototype[util$940.camelize('type')] = function (value$962) {
    return util$940.primitiveAccessor.apply(this, [
        'type',
        value$962
    ]);
};
SauceOndemand$942.prototype[util$940.camelize('platforms')] = function (value$963) {
    return util$940.primitiveArrayAccessor.apply(this, [
        'platforms',
        value$963
    ]);
};
SauceOndemand$942.prototype[util$940.camelize('launch-sauce-connect-on-slave')] = function (value$964) {
    return util$940.primitiveAccessor.apply(this, [
        'launch-sauce-connect-on-slave',
        value$964
    ]);
};
SauceOndemand$942.prototype[util$940.camelize('https-protocol')] = function (value$965) {
    return util$940.primitiveAccessor.apply(this, [
        'https-protocol',
        value$965
    ]);
};
SauceOndemand$942.prototype[util$940.camelize('sauce-connect-options')] = function (value$966) {
    return util$940.primitiveAccessor.apply(this, [
        'sauce-connect-options',
        value$966
    ]);
};