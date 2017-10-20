'use strict';
var util$940 = require('../../../misc/util.js');
var OpenShiftDeployer$942 = function (upper$948, obj$949) {
    this.upper = upper$948;
    this.obj = obj$949;
};
OpenShiftDeployer$942.prototype.up = function () {
    return this.upper;
};
OpenShiftDeployer$942.prototype.and = OpenShiftDeployer$942.prototype.up;
module.exports = OpenShiftDeployer$942;
OpenShiftDeployer$942.prototype[util$940.camelize('api-url')] = function (value$950) {
    return util$940.primitiveAccessor.apply(this, [
        'api-url',
        value$950
    ]);
};
OpenShiftDeployer$942.prototype[util$940.camelize('dep-cfg')] = function (value$951) {
    return util$940.primitiveAccessor.apply(this, [
        'dep-cfg',
        value$951
    ]);
};
OpenShiftDeployer$942.prototype[util$940.camelize('namespace')] = function (value$952) {
    return util$940.primitiveAccessor.apply(this, [
        'namespace',
        value$952
    ]);
};
OpenShiftDeployer$942.prototype[util$940.camelize('auth-token')] = function (value$953) {
    return util$940.primitiveAccessor.apply(this, [
        'auth-token',
        value$953
    ]);
};
OpenShiftDeployer$942.prototype[util$940.camelize('verbose')] = function (value$954) {
    return util$940.primitiveAccessor.apply(this, [
        'verbose',
        value$954
    ]);
};