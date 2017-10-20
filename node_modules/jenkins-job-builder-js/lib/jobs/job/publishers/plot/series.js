'use strict';
var util$940 = require('../../../../misc/util.js');
var Series$942 = function (upper$952, obj$953) {
    this.upper = upper$952;
    this.obj = obj$953;
};
Series$942.prototype.up = function () {
    return this.upper;
};
Series$942.prototype.and = Series$942.prototype.up;
module.exports = Series$942;
Series$942.prototype[util$940.camelize('file')] = function (value$954) {
    return util$940.primitiveAccessor.apply(this, [
        'file',
        value$954
    ]);
};
Series$942.prototype[util$940.camelize('inclusion-flag')] = function (value$955) {
    return util$940.primitiveAccessor.apply(this, [
        'inclusion-flag',
        value$955
    ]);
};
Series$942.prototype[util$940.camelize('exclude')] = function (value$956) {
    return util$940.primitiveAccessor.apply(this, [
        'exclude',
        value$956
    ]);
};
Series$942.prototype[util$940.camelize('url')] = function (value$957) {
    return util$940.primitiveAccessor.apply(this, [
        'url',
        value$957
    ]);
};
Series$942.prototype[util$940.camelize('display-table')] = function (value$958) {
    return util$940.primitiveAccessor.apply(this, [
        'display-table',
        value$958
    ]);
};
Series$942.prototype[util$940.camelize('label')] = function (value$959) {
    return util$940.primitiveAccessor.apply(this, [
        'label',
        value$959
    ]);
};
Series$942.prototype[util$940.camelize('format')] = function (value$960) {
    return util$940.primitiveAccessor.apply(this, [
        'format',
        value$960
    ]);
};
Series$942.prototype[util$940.camelize('xpath-type')] = function (value$961) {
    return util$940.primitiveAccessor.apply(this, [
        'xpath-type',
        value$961
    ]);
};
Series$942.prototype[util$940.camelize('xpath')] = function (value$962) {
    return util$940.primitiveAccessor.apply(this, [
        'xpath',
        value$962
    ]);
};