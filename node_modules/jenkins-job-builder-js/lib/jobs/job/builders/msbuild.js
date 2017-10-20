'use strict';
var util$940 = require('../../../misc/util.js');
var Msbuild$942 = function (upper$948, obj$949) {
    this.upper = upper$948;
    this.obj = obj$949;
};
Msbuild$942.prototype.up = function () {
    return this.upper;
};
Msbuild$942.prototype.and = Msbuild$942.prototype.up;
module.exports = Msbuild$942;
Msbuild$942.prototype[util$940.camelize('msbuild-version')] = function (value$950) {
    return util$940.primitiveAccessor.apply(this, [
        'msbuild-version',
        value$950
    ]);
};
Msbuild$942.prototype[util$940.camelize('solution-file')] = function (value$951) {
    return util$940.primitiveAccessor.apply(this, [
        'solution-file',
        value$951
    ]);
};
Msbuild$942.prototype[util$940.camelize('extra-parameters')] = function (value$952) {
    return util$940.primitiveAccessor.apply(this, [
        'extra-parameters',
        value$952
    ]);
};
Msbuild$942.prototype[util$940.camelize('pass-build-variables')] = function (value$953) {
    return util$940.primitiveAccessor.apply(this, [
        'pass-build-variables',
        value$953
    ]);
};
Msbuild$942.prototype[util$940.camelize('continue-on-build-failure')] = function (value$954) {
    return util$940.primitiveAccessor.apply(this, [
        'continue-on-build-failure',
        value$954
    ]);
};