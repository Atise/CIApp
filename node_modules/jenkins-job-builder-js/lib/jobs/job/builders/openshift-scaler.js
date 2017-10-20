'use strict';
var util$940 = require('../../../misc/util.js');
var OpenShiftScaler$942 = function (upper$949, obj$950) {
    this.upper = upper$949;
    this.obj = obj$950;
};
OpenShiftScaler$942.prototype.up = function () {
    return this.upper;
};
OpenShiftScaler$942.prototype.and = OpenShiftScaler$942.prototype.up;
module.exports = OpenShiftScaler$942;
OpenShiftScaler$942.prototype[util$940.camelize('api-url')] = function (value$951) {
    return util$940.primitiveAccessor.apply(this, [
        'api-url',
        value$951
    ]);
};
OpenShiftScaler$942.prototype[util$940.camelize('dep-cfg')] = function (value$952) {
    return util$940.primitiveAccessor.apply(this, [
        'dep-cfg',
        value$952
    ]);
};
OpenShiftScaler$942.prototype[util$940.camelize('namespace')] = function (value$953) {
    return util$940.primitiveAccessor.apply(this, [
        'namespace',
        value$953
    ]);
};
OpenShiftScaler$942.prototype[util$940.camelize('replica-count')] = function (value$954) {
    return util$940.primitiveAccessor.apply(this, [
        'replica-count',
        value$954
    ]);
};
OpenShiftScaler$942.prototype[util$940.camelize('auth-token')] = function (value$955) {
    return util$940.primitiveAccessor.apply(this, [
        'auth-token',
        value$955
    ]);
};
OpenShiftScaler$942.prototype[util$940.camelize('verbose')] = function (value$956) {
    return util$940.primitiveAccessor.apply(this, [
        'verbose',
        value$956
    ]);
};