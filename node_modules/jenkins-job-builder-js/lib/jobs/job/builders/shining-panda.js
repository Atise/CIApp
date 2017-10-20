'use strict';
var util$940 = require('../../../misc/util.js');
var ShiningPanda$942 = function (upper$953, obj$954) {
    this.upper = upper$953;
    this.obj = obj$954;
};
ShiningPanda$942.prototype.up = function () {
    return this.upper;
};
ShiningPanda$942.prototype.and = ShiningPanda$942.prototype.up;
module.exports = ShiningPanda$942;
ShiningPanda$942.prototype[util$940.camelize('build-environment')] = function (value$955) {
    return util$940.primitiveAccessor.apply(this, [
        'build-environment',
        value$955
    ]);
};
ShiningPanda$942.prototype[util$940.camelize('python-version')] = function (value$956) {
    return util$940.primitiveAccessor.apply(this, [
        'python-version',
        value$956
    ]);
};
ShiningPanda$942.prototype[util$940.camelize('home')] = function (value$957) {
    return util$940.primitiveAccessor.apply(this, [
        'home',
        value$957
    ]);
};
ShiningPanda$942.prototype[util$940.camelize('name')] = function (value$958) {
    return util$940.primitiveAccessor.apply(this, [
        'name',
        value$958
    ]);
};
ShiningPanda$942.prototype[util$940.camelize('clear')] = function (value$959) {
    return util$940.primitiveAccessor.apply(this, [
        'clear',
        value$959
    ]);
};
ShiningPanda$942.prototype[util$940.camelize('use-distribute')] = function (value$960) {
    return util$940.primitiveAccessor.apply(this, [
        'use-distribute',
        value$960
    ]);
};
ShiningPanda$942.prototype[util$940.camelize('system-site-packages')] = function (value$961) {
    return util$940.primitiveAccessor.apply(this, [
        'system-site-packages',
        value$961
    ]);
};
ShiningPanda$942.prototype[util$940.camelize('nature')] = function (value$962) {
    return util$940.primitiveAccessor.apply(this, [
        'nature',
        value$962
    ]);
};
ShiningPanda$942.prototype[util$940.camelize('command')] = function (value$963) {
    return util$940.primitiveAccessor.apply(this, [
        'command',
        value$963
    ]);
};
ShiningPanda$942.prototype[util$940.camelize('ignore-exit-code')] = function (value$964) {
    return util$940.primitiveAccessor.apply(this, [
        'ignore-exit-code',
        value$964
    ]);
};