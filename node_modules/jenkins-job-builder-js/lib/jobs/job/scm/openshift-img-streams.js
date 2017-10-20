'use strict';
var util$940 = require('../../../misc/util.js');
var OpenShiftImgStreams$942 = function (upper$949, obj$950) {
    this.upper = upper$949;
    this.obj = obj$950;
};
OpenShiftImgStreams$942.prototype.up = function () {
    return this.upper;
};
OpenShiftImgStreams$942.prototype.and = OpenShiftImgStreams$942.prototype.up;
module.exports = OpenShiftImgStreams$942;
OpenShiftImgStreams$942.prototype[util$940.camelize('image-stream-name')] = function (value$951) {
    return util$940.primitiveAccessor.apply(this, [
        'image-stream-name',
        value$951
    ]);
};
OpenShiftImgStreams$942.prototype[util$940.camelize('tag')] = function (value$952) {
    return util$940.primitiveAccessor.apply(this, [
        'tag',
        value$952
    ]);
};
OpenShiftImgStreams$942.prototype[util$940.camelize('api-url')] = function (value$953) {
    return util$940.primitiveAccessor.apply(this, [
        'api-url',
        value$953
    ]);
};
OpenShiftImgStreams$942.prototype[util$940.camelize('namespace')] = function (value$954) {
    return util$940.primitiveAccessor.apply(this, [
        'namespace',
        value$954
    ]);
};
OpenShiftImgStreams$942.prototype[util$940.camelize('auth-token')] = function (value$955) {
    return util$940.primitiveAccessor.apply(this, [
        'auth-token',
        value$955
    ]);
};
OpenShiftImgStreams$942.prototype[util$940.camelize('verbose')] = function (value$956) {
    return util$940.primitiveAccessor.apply(this, [
        'verbose',
        value$956
    ]);
};