'use strict';
var util$940 = require('../../../misc/util.js');
var OpenShiftBuilder$942 = function (upper$951, obj$952) {
    this.upper = upper$951;
    this.obj = obj$952;
};
OpenShiftBuilder$942.prototype.up = function () {
    return this.upper;
};
OpenShiftBuilder$942.prototype.and = OpenShiftBuilder$942.prototype.up;
module.exports = OpenShiftBuilder$942;
OpenShiftBuilder$942.prototype[util$940.camelize('api-url')] = function (value$953) {
    return util$940.primitiveAccessor.apply(this, [
        'api-url',
        value$953
    ]);
};
OpenShiftBuilder$942.prototype[util$940.camelize('bld-cfg')] = function (value$954) {
    return util$940.primitiveAccessor.apply(this, [
        'bld-cfg',
        value$954
    ]);
};
OpenShiftBuilder$942.prototype[util$940.camelize('namespace')] = function (value$955) {
    return util$940.primitiveAccessor.apply(this, [
        'namespace',
        value$955
    ]);
};
OpenShiftBuilder$942.prototype[util$940.camelize('auth-token')] = function (value$956) {
    return util$940.primitiveAccessor.apply(this, [
        'auth-token',
        value$956
    ]);
};
OpenShiftBuilder$942.prototype[util$940.camelize('commit-ID')] = function (value$957) {
    return util$940.primitiveAccessor.apply(this, [
        'commit-ID',
        value$957
    ]);
};
OpenShiftBuilder$942.prototype[util$940.camelize('verbose')] = function (value$958) {
    return util$940.primitiveAccessor.apply(this, [
        'verbose',
        value$958
    ]);
};
OpenShiftBuilder$942.prototype[util$940.camelize('build-name')] = function (value$959) {
    return util$940.primitiveAccessor.apply(this, [
        'build-name',
        value$959
    ]);
};
OpenShiftBuilder$942.prototype[util$940.camelize('show-build-logs')] = function (value$960) {
    return util$940.primitiveAccessor.apply(this, [
        'show-build-logs',
        value$960
    ]);
};