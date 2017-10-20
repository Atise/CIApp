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
Entry$942.prototype[util$940.camelize('destination-bucket')] = function (value$954) {
    return util$940.primitiveAccessor.apply(this, [
        'destination-bucket',
        value$954
    ]);
};
Entry$942.prototype[util$940.camelize('source-files')] = function (value$955) {
    return util$940.primitiveAccessor.apply(this, [
        'source-files',
        value$955
    ]);
};
Entry$942.prototype[util$940.camelize('storage-class')] = function (value$956) {
    return util$940.primitiveAccessor.apply(this, [
        'storage-class',
        value$956
    ]);
};
Entry$942.prototype[util$940.camelize('bucket-region')] = function (value$957) {
    return util$940.primitiveAccessor.apply(this, [
        'bucket-region',
        value$957
    ]);
};
Entry$942.prototype[util$940.camelize('upload-on-failure')] = function (value$958) {
    return util$940.primitiveAccessor.apply(this, [
        'upload-on-failure',
        value$958
    ]);
};
Entry$942.prototype[util$940.camelize('upload-from-slave')] = function (value$959) {
    return util$940.primitiveAccessor.apply(this, [
        'upload-from-slave',
        value$959
    ]);
};
Entry$942.prototype[util$940.camelize('managed-artifacts')] = function (value$960) {
    return util$940.primitiveAccessor.apply(this, [
        'managed-artifacts',
        value$960
    ]);
};
Entry$942.prototype[util$940.camelize('flatten')] = function (value$961) {
    return util$940.primitiveAccessor.apply(this, [
        'flatten',
        value$961
    ]);
};
Entry$942.prototype[util$940.camelize('s3-encryption')] = function (value$962) {
    return util$940.primitiveAccessor.apply(this, [
        's3-encryption',
        value$962
    ]);
};