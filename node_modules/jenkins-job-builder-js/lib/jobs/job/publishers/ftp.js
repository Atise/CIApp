'use strict';
var util$940 = require('../../../misc/util.js');
var Ftp$942 = function (upper$952, obj$953) {
    this.upper = upper$952;
    this.obj = obj$953;
};
Ftp$942.prototype.up = function () {
    return this.upper;
};
Ftp$942.prototype.and = Ftp$942.prototype.up;
module.exports = Ftp$942;
Ftp$942.prototype[util$940.camelize('site')] = function (value$954) {
    return util$940.primitiveAccessor.apply(this, [
        'site',
        value$954
    ]);
};
Ftp$942.prototype[util$940.camelize('target')] = function (value$955) {
    return util$940.primitiveAccessor.apply(this, [
        'target',
        value$955
    ]);
};
Ftp$942.prototype[util$940.camelize('target-is-date-format')] = function (value$956) {
    return util$940.primitiveAccessor.apply(this, [
        'target-is-date-format',
        value$956
    ]);
};
Ftp$942.prototype[util$940.camelize('clean-remote')] = function (value$957) {
    return util$940.primitiveAccessor.apply(this, [
        'clean-remote',
        value$957
    ]);
};
Ftp$942.prototype[util$940.camelize('source')] = function (value$958) {
    return util$940.primitiveAccessor.apply(this, [
        'source',
        value$958
    ]);
};
Ftp$942.prototype[util$940.camelize('excludes')] = function (value$959) {
    return util$940.primitiveAccessor.apply(this, [
        'excludes',
        value$959
    ]);
};
Ftp$942.prototype[util$940.camelize('remove-prefix')] = function (value$960) {
    return util$940.primitiveAccessor.apply(this, [
        'remove-prefix',
        value$960
    ]);
};
Ftp$942.prototype[util$940.camelize('fail-on-error')] = function (value$961) {
    return util$940.primitiveAccessor.apply(this, [
        'fail-on-error',
        value$961
    ]);
};
Ftp$942.prototype[util$940.camelize('flatten')] = function (value$962) {
    return util$940.primitiveAccessor.apply(this, [
        'flatten',
        value$962
    ]);
};