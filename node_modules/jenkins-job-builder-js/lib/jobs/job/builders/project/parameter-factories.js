'use strict';
var util$940 = require('../../../../misc/util.js');
var ParameterFactories$942 = function (upper$954, obj$955) {
    this.upper = upper$954;
    this.obj = obj$955;
};
ParameterFactories$942.prototype.up = function () {
    return this.upper;
};
ParameterFactories$942.prototype.and = ParameterFactories$942.prototype.up;
module.exports = ParameterFactories$942;
ParameterFactories$942.prototype[util$940.camelize('factory')] = function (value$956) {
    return util$940.primitiveAccessor.apply(this, [
        'factory',
        value$956
    ]);
};
ParameterFactories$942.prototype[util$940.camelize('file-pattern')] = function (value$957) {
    return util$940.primitiveAccessor.apply(this, [
        'file-pattern',
        value$957
    ]);
};
ParameterFactories$942.prototype[util$940.camelize('no-files-found-action')] = function (value$958) {
    return util$940.primitiveAccessor.apply(this, [
        'no-files-found-action',
        value$958
    ]);
};
ParameterFactories$942.prototype[util$940.camelize('from')] = function (value$959) {
    return util$940.primitiveAccessor.apply(this, [
        'from',
        value$959
    ]);
};
ParameterFactories$942.prototype[util$940.camelize('to')] = function (value$960) {
    return util$940.primitiveAccessor.apply(this, [
        'to',
        value$960
    ]);
};
ParameterFactories$942.prototype[util$940.camelize('step')] = function (value$961) {
    return util$940.primitiveAccessor.apply(this, [
        'step',
        value$961
    ]);
};
ParameterFactories$942.prototype[util$940.camelize('parameters')] = function (value$962) {
    return util$940.primitiveAccessor.apply(this, [
        'parameters',
        value$962
    ]);
};
ParameterFactories$942.prototype[util$940.camelize('validation-fail')] = function (value$963) {
    return util$940.primitiveAccessor.apply(this, [
        'validation-fail',
        value$963
    ]);
};
ParameterFactories$942.prototype[util$940.camelize('name')] = function (value$964) {
    return util$940.primitiveAccessor.apply(this, [
        'name',
        value$964
    ]);
};
ParameterFactories$942.prototype[util$940.camelize('node-label')] = function (value$965) {
    return util$940.primitiveAccessor.apply(this, [
        'node-label',
        value$965
    ]);
};
ParameterFactories$942.prototype[util$940.camelize('ignore-offline-nodes')] = function (value$966) {
    return util$940.primitiveAccessor.apply(this, [
        'ignore-offline-nodes',
        value$966
    ]);
};