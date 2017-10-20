'use strict';
var util$940 = require('../../../misc/util.js');
var Robot$942 = function (upper$953, obj$954) {
    this.upper = upper$953;
    this.obj = obj$954;
};
Robot$942.prototype.up = function () {
    return this.upper;
};
Robot$942.prototype.and = Robot$942.prototype.up;
module.exports = Robot$942;
Robot$942.prototype[util$940.camelize('output-path')] = function (value$955) {
    return util$940.primitiveAccessor.apply(this, [
        'output-path',
        value$955
    ]);
};
Robot$942.prototype[util$940.camelize('log-file-link')] = function (value$956) {
    return util$940.primitiveAccessor.apply(this, [
        'log-file-link',
        value$956
    ]);
};
Robot$942.prototype[util$940.camelize('report-html')] = function (value$957) {
    return util$940.primitiveAccessor.apply(this, [
        'report-html',
        value$957
    ]);
};
Robot$942.prototype[util$940.camelize('log-html')] = function (value$958) {
    return util$940.primitiveAccessor.apply(this, [
        'log-html',
        value$958
    ]);
};
Robot$942.prototype[util$940.camelize('output-xml')] = function (value$959) {
    return util$940.primitiveAccessor.apply(this, [
        'output-xml',
        value$959
    ]);
};
Robot$942.prototype[util$940.camelize('pass-threshold')] = function (value$960) {
    return util$940.primitiveAccessor.apply(this, [
        'pass-threshold',
        value$960
    ]);
};
Robot$942.prototype[util$940.camelize('unstable-threshold')] = function (value$961) {
    return util$940.primitiveAccessor.apply(this, [
        'unstable-threshold',
        value$961
    ]);
};
Robot$942.prototype[util$940.camelize('only-critical')] = function (value$962) {
    return util$940.primitiveAccessor.apply(this, [
        'only-critical',
        value$962
    ]);
};
Robot$942.prototype[util$940.camelize('other-files')] = function (value$963) {
    return util$940.primitiveArrayAccessor.apply(this, [
        'other-files',
        value$963
    ]);
};
Robot$942.prototype[util$940.camelize('archive-output-xml')] = function (value$964) {
    return util$940.primitiveAccessor.apply(this, [
        'archive-output-xml',
        value$964
    ]);
};