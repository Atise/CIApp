'use strict';
var util$940 = require('../../../misc/util.js');
var OpenShiftDepVerify$942 = function (upper$949, obj$950) {
    this.upper = upper$949;
    this.obj = obj$950;
};
OpenShiftDepVerify$942.prototype.up = function () {
    return this.upper;
};
OpenShiftDepVerify$942.prototype.and = OpenShiftDepVerify$942.prototype.up;
module.exports = OpenShiftDepVerify$942;
OpenShiftDepVerify$942.prototype[util$940.camelize('api-url')] = function (value$951) {
    return util$940.primitiveAccessor.apply(this, [
        'api-url',
        value$951
    ]);
};
OpenShiftDepVerify$942.prototype[util$940.camelize('dep-cfg')] = function (value$952) {
    return util$940.primitiveAccessor.apply(this, [
        'dep-cfg',
        value$952
    ]);
};
OpenShiftDepVerify$942.prototype[util$940.camelize('namespace')] = function (value$953) {
    return util$940.primitiveAccessor.apply(this, [
        'namespace',
        value$953
    ]);
};
OpenShiftDepVerify$942.prototype[util$940.camelize('replica-count')] = function (value$954) {
    return util$940.primitiveAccessor.apply(this, [
        'replica-count',
        value$954
    ]);
};
OpenShiftDepVerify$942.prototype[util$940.camelize('auth-token')] = function (value$955) {
    return util$940.primitiveAccessor.apply(this, [
        'auth-token',
        value$955
    ]);
};
OpenShiftDepVerify$942.prototype[util$940.camelize('verbose')] = function (value$956) {
    return util$940.primitiveAccessor.apply(this, [
        'verbose',
        value$956
    ]);
};