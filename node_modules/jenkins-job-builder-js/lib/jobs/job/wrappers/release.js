'use strict';
var util$940 = require('../../../misc/util.js');
var Parameters$941 = require('../parameters.js');
var Builders$942 = require('../builders.js');
var Release$944 = function (upper$953, obj$954) {
    this.upper = upper$953;
    this.obj = obj$954;
};
Release$944.prototype.up = function () {
    return this.upper;
};
Release$944.prototype.and = Release$944.prototype.up;
module.exports = Release$944;
Release$944.prototype[util$940.camelize('keep-forever')] = function (value$955) {
    return util$940.primitiveAccessor.apply(this, [
        'keep-forever',
        value$955
    ]);
};
Release$944.prototype[util$940.camelize('override-build-parameters')] = function (value$956) {
    return util$940.primitiveAccessor.apply(this, [
        'override-build-parameters',
        value$956
    ]);
};
Release$944.prototype[util$940.camelize('version-template')] = function (value$957) {
    return util$940.primitiveAccessor.apply(this, [
        'version-template',
        value$957
    ]);
};
Release$944.prototype[util$940.camelize('parameters')] = function (value$958) {
    return util$940.customArrayAccessor.apply(this, [
        'parameters',
        Parameters$941,
        value$958
    ]);
};
Release$944.prototype[util$940.camelize('pre-build')] = function (value$959) {
    return util$940.customArrayAccessor.apply(this, [
        'pre-build',
        Builders$942,
        value$959
    ]);
};
Release$944.prototype[util$940.camelize('post-build')] = function (value$960) {
    return util$940.customArrayAccessor.apply(this, [
        'post-build',
        Builders$942,
        value$960
    ]);
};
Release$944.prototype[util$940.camelize('post-success')] = function (value$961) {
    return util$940.customArrayAccessor.apply(this, [
        'post-success',
        Builders$942,
        value$961
    ]);
};
Release$944.prototype[util$940.camelize('post-failed')] = function (value$962) {
    return util$940.customArrayAccessor.apply(this, [
        'post-failed',
        Builders$942,
        value$962
    ]);
};