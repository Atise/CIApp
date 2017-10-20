'use strict';
var util$940 = require('../../../misc/util.js');
var Inject$942 = function (upper$953, obj$954) {
    this.upper = upper$953;
    this.obj = obj$954;
};
Inject$942.prototype.up = function () {
    return this.upper;
};
Inject$942.prototype.and = Inject$942.prototype.up;
module.exports = Inject$942;
Inject$942.prototype[util$940.camelize('properties-file')] = function (value$955) {
    return util$940.primitiveAccessor.apply(this, [
        'properties-file',
        value$955
    ]);
};
Inject$942.prototype[util$940.camelize('properties-content')] = function (value$956) {
    return util$940.primitiveAccessor.apply(this, [
        'properties-content',
        value$956
    ]);
};
Inject$942.prototype[util$940.camelize('script-file')] = function (value$957) {
    return util$940.primitiveAccessor.apply(this, [
        'script-file',
        value$957
    ]);
};
Inject$942.prototype[util$940.camelize('script-content')] = function (value$958) {
    return util$940.primitiveAccessor.apply(this, [
        'script-content',
        value$958
    ]);
};
Inject$942.prototype[util$940.camelize('groovy-content')] = function (value$959) {
    return util$940.primitiveAccessor.apply(this, [
        'groovy-content',
        value$959
    ]);
};
Inject$942.prototype[util$940.camelize('load-from-master')] = function (value$960) {
    return util$940.primitiveAccessor.apply(this, [
        'load-from-master',
        value$960
    ]);
};
Inject$942.prototype[util$940.camelize('enabled')] = function (value$961) {
    return util$940.primitiveAccessor.apply(this, [
        'enabled',
        value$961
    ]);
};
Inject$942.prototype[util$940.camelize('keep-system-variables')] = function (value$962) {
    return util$940.primitiveAccessor.apply(this, [
        'keep-system-variables',
        value$962
    ]);
};
Inject$942.prototype[util$940.camelize('keep-build-variables')] = function (value$963) {
    return util$940.primitiveAccessor.apply(this, [
        'keep-build-variables',
        value$963
    ]);
};
Inject$942.prototype[util$940.camelize('override-build-parameters')] = function (value$964) {
    return util$940.primitiveAccessor.apply(this, [
        'override-build-parameters',
        value$964
    ]);
};