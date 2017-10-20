'use strict';
var util$940 = require('../../../misc/util.js');
var CloudFormation$942 = function (upper$952, obj$953) {
    this.upper = upper$952;
    this.obj = obj$953;
};
CloudFormation$942.prototype.up = function () {
    return this.upper;
};
CloudFormation$942.prototype.and = CloudFormation$942.prototype.up;
module.exports = CloudFormation$942;
CloudFormation$942.prototype[util$940.camelize('name')] = function (value$954) {
    return util$940.primitiveAccessor.apply(this, [
        'name',
        value$954
    ]);
};
CloudFormation$942.prototype[util$940.camelize('description')] = function (value$955) {
    return util$940.primitiveAccessor.apply(this, [
        'description',
        value$955
    ]);
};
CloudFormation$942.prototype[util$940.camelize('recipe')] = function (value$956) {
    return util$940.primitiveAccessor.apply(this, [
        'recipe',
        value$956
    ]);
};
CloudFormation$942.prototype[util$940.camelize('parameters')] = function (value$957) {
    return util$940.primitiveArrayAccessor.apply(this, [
        'parameters',
        value$957
    ]);
};
CloudFormation$942.prototype[util$940.camelize('timeout')] = function (value$958) {
    return util$940.primitiveAccessor.apply(this, [
        'timeout',
        value$958
    ]);
};
CloudFormation$942.prototype[util$940.camelize('access-key')] = function (value$959) {
    return util$940.primitiveAccessor.apply(this, [
        'access-key',
        value$959
    ]);
};
CloudFormation$942.prototype[util$940.camelize('secret-key')] = function (value$960) {
    return util$940.primitiveAccessor.apply(this, [
        'secret-key',
        value$960
    ]);
};
CloudFormation$942.prototype[util$940.camelize('sleep')] = function (value$961) {
    return util$940.primitiveAccessor.apply(this, [
        'sleep',
        value$961
    ]);
};
CloudFormation$942.prototype[util$940.camelize('region')] = function (value$962) {
    return util$940.primitiveAccessor.apply(this, [
        'region',
        value$962
    ]);
};