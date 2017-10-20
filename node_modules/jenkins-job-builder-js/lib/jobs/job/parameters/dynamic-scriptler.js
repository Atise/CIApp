'use strict';
var util$940 = require('../../../misc/util.js');
var Parameter$941 = require('./dynamic-scriptler/parameter.js');
var DynamicScriptler$943 = function (upper$950, obj$951) {
    this.upper = upper$950;
    this.obj = obj$951;
};
DynamicScriptler$943.prototype.up = function () {
    return this.upper;
};
DynamicScriptler$943.prototype.and = DynamicScriptler$943.prototype.up;
module.exports = DynamicScriptler$943;
DynamicScriptler$943.prototype[util$940.camelize('name')] = function (value$952) {
    return util$940.primitiveAccessor.apply(this, [
        'name',
        value$952
    ]);
};
DynamicScriptler$943.prototype[util$940.camelize('description')] = function (value$953) {
    return util$940.primitiveAccessor.apply(this, [
        'description',
        value$953
    ]);
};
DynamicScriptler$943.prototype[util$940.camelize('script-id')] = function (value$954) {
    return util$940.primitiveAccessor.apply(this, [
        'script-id',
        value$954
    ]);
};
DynamicScriptler$943.prototype[util$940.camelize('parameters')] = function (value$955) {
    return util$940.objectArrayAccessor.apply(this, [
        'parameters',
        Parameter$941,
        value$955
    ]);
};
DynamicScriptler$943.prototype[util$940.camelize('remote')] = function (value$956) {
    return util$940.primitiveAccessor.apply(this, [
        'remote',
        value$956
    ]);
};
DynamicScriptler$943.prototype[util$940.camelize('read-only')] = function (value$957) {
    return util$940.primitiveAccessor.apply(this, [
        'read-only',
        value$957
    ]);
};