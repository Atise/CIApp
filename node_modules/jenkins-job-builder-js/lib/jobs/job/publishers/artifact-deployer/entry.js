'use strict';
var util$940 = require('../../../../misc/util.js');
var Entry$942 = function (upper$952, obj$953) {
    this.upper = upper$952;
    this.obj = obj$953;
};
Entry$942.prototype.up = function () {
    return this.upper;
};
Entry$942.prototype.and = Entry$942.prototype.up;
module.exports = Entry$942;
Entry$942.prototype[util$940.camelize('files')] = function (value$954) {
    return util$940.primitiveAccessor.apply(this, [
        'files',
        value$954
    ]);
};
Entry$942.prototype[util$940.camelize('basedir')] = function (value$955) {
    return util$940.primitiveAccessor.apply(this, [
        'basedir',
        value$955
    ]);
};
Entry$942.prototype[util$940.camelize('excludes')] = function (value$956) {
    return util$940.primitiveAccessor.apply(this, [
        'excludes',
        value$956
    ]);
};
Entry$942.prototype[util$940.camelize('remote')] = function (value$957) {
    return util$940.primitiveAccessor.apply(this, [
        'remote',
        value$957
    ]);
};
Entry$942.prototype[util$940.camelize('flatten')] = function (value$958) {
    return util$940.primitiveAccessor.apply(this, [
        'flatten',
        value$958
    ]);
};
Entry$942.prototype[util$940.camelize('delete-remote')] = function (value$959) {
    return util$940.primitiveAccessor.apply(this, [
        'delete-remote',
        value$959
    ]);
};
Entry$942.prototype[util$940.camelize('delete-remote-artifacts')] = function (value$960) {
    return util$940.primitiveAccessor.apply(this, [
        'delete-remote-artifacts',
        value$960
    ]);
};
Entry$942.prototype[util$940.camelize('fail-no-files')] = function (value$961) {
    return util$940.primitiveAccessor.apply(this, [
        'fail-no-files',
        value$961
    ]);
};
Entry$942.prototype[util$940.camelize('groovy-script')] = function (value$962) {
    return util$940.primitiveAccessor.apply(this, [
        'groovy-script',
        value$962
    ]);
};