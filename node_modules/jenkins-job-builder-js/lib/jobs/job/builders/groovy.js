'use strict';
var util$940 = require('../../../misc/util.js');
var Groovy$942 = function (upper$951, obj$952) {
    this.upper = upper$951;
    this.obj = obj$952;
};
Groovy$942.prototype.up = function () {
    return this.upper;
};
Groovy$942.prototype.and = Groovy$942.prototype.up;
module.exports = Groovy$942;
Groovy$942.prototype[util$940.camelize('file')] = function (value$953) {
    return util$940.primitiveAccessor.apply(this, [
        'file',
        value$953
    ]);
};
Groovy$942.prototype[util$940.camelize('command')] = function (value$954) {
    return util$940.primitiveAccessor.apply(this, [
        'command',
        value$954
    ]);
};
Groovy$942.prototype[util$940.camelize('version')] = function (value$955) {
    return util$940.primitiveAccessor.apply(this, [
        'version',
        value$955
    ]);
};
Groovy$942.prototype[util$940.camelize('parameters')] = function (value$956) {
    return util$940.primitiveAccessor.apply(this, [
        'parameters',
        value$956
    ]);
};
Groovy$942.prototype[util$940.camelize('script-parameters')] = function (value$957) {
    return util$940.primitiveAccessor.apply(this, [
        'script-parameters',
        value$957
    ]);
};
Groovy$942.prototype[util$940.camelize('properties')] = function (value$958) {
    return util$940.primitiveAccessor.apply(this, [
        'properties',
        value$958
    ]);
};
Groovy$942.prototype[util$940.camelize('java-opts')] = function (value$959) {
    return util$940.primitiveAccessor.apply(this, [
        'java-opts',
        value$959
    ]);
};
Groovy$942.prototype[util$940.camelize('class-path')] = function (value$960) {
    return util$940.primitiveAccessor.apply(this, [
        'class-path',
        value$960
    ]);
};