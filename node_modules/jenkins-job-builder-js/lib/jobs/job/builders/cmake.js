'use strict';
var util$940 = require('../../../misc/util.js');
var Cmake$942 = function (upper$955, obj$956) {
    this.upper = upper$955;
    this.obj = obj$956;
};
Cmake$942.prototype.up = function () {
    return this.upper;
};
Cmake$942.prototype.and = Cmake$942.prototype.up;
module.exports = Cmake$942;
Cmake$942.prototype[util$940.camelize('source-dir')] = function (value$957) {
    return util$940.primitiveAccessor.apply(this, [
        'source-dir',
        value$957
    ]);
};
Cmake$942.prototype[util$940.camelize('build-dir')] = function (value$958) {
    return util$940.primitiveAccessor.apply(this, [
        'build-dir',
        value$958
    ]);
};
Cmake$942.prototype[util$940.camelize('install-dir')] = function (value$959) {
    return util$940.primitiveAccessor.apply(this, [
        'install-dir',
        value$959
    ]);
};
Cmake$942.prototype[util$940.camelize('build-type')] = function (value$960) {
    return util$940.primitiveAccessor.apply(this, [
        'build-type',
        value$960
    ]);
};
Cmake$942.prototype[util$940.camelize('generator')] = function (value$961) {
    return util$940.primitiveAccessor.apply(this, [
        'generator',
        value$961
    ]);
};
Cmake$942.prototype[util$940.camelize('make-command')] = function (value$962) {
    return util$940.primitiveAccessor.apply(this, [
        'make-command',
        value$962
    ]);
};
Cmake$942.prototype[util$940.camelize('install-command')] = function (value$963) {
    return util$940.primitiveAccessor.apply(this, [
        'install-command',
        value$963
    ]);
};
Cmake$942.prototype[util$940.camelize('preload-script')] = function (value$964) {
    return util$940.primitiveAccessor.apply(this, [
        'preload-script',
        value$964
    ]);
};
Cmake$942.prototype[util$940.camelize('other-arguments')] = function (value$965) {
    return util$940.primitiveAccessor.apply(this, [
        'other-arguments',
        value$965
    ]);
};
Cmake$942.prototype[util$940.camelize('custom-cmake-path')] = function (value$966) {
    return util$940.primitiveAccessor.apply(this, [
        'custom-cmake-path',
        value$966
    ]);
};
Cmake$942.prototype[util$940.camelize('clean-build-dir')] = function (value$967) {
    return util$940.primitiveAccessor.apply(this, [
        'clean-build-dir',
        value$967
    ]);
};
Cmake$942.prototype[util$940.camelize('clean-install-dir')] = function (value$968) {
    return util$940.primitiveAccessor.apply(this, [
        'clean-install-dir',
        value$968
    ]);
};