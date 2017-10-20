'use strict';
var util$940 = require('../../../misc/util.js');
var OpenShiftImgTagger$942 = function (upper$949, obj$950) {
    this.upper = upper$949;
    this.obj = obj$950;
};
OpenShiftImgTagger$942.prototype.up = function () {
    return this.upper;
};
OpenShiftImgTagger$942.prototype.and = OpenShiftImgTagger$942.prototype.up;
module.exports = OpenShiftImgTagger$942;
OpenShiftImgTagger$942.prototype[util$940.camelize('api-url')] = function (value$951) {
    return util$940.primitiveAccessor.apply(this, [
        'api-url',
        value$951
    ]);
};
OpenShiftImgTagger$942.prototype[util$940.camelize('test-tag')] = function (value$952) {
    return util$940.primitiveAccessor.apply(this, [
        'test-tag',
        value$952
    ]);
};
OpenShiftImgTagger$942.prototype[util$940.camelize('prod-tag')] = function (value$953) {
    return util$940.primitiveAccessor.apply(this, [
        'prod-tag',
        value$953
    ]);
};
OpenShiftImgTagger$942.prototype[util$940.camelize('namespace')] = function (value$954) {
    return util$940.primitiveAccessor.apply(this, [
        'namespace',
        value$954
    ]);
};
OpenShiftImgTagger$942.prototype[util$940.camelize('auth-token')] = function (value$955) {
    return util$940.primitiveAccessor.apply(this, [
        'auth-token',
        value$955
    ]);
};
OpenShiftImgTagger$942.prototype[util$940.camelize('verbose')] = function (value$956) {
    return util$940.primitiveAccessor.apply(this, [
        'verbose',
        value$956
    ]);
};