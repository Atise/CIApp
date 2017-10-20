'use strict';
var util$940 = require('../../../../misc/util.js');
var Artifact$942 = function (upper$949, obj$950) {
    this.upper = upper$949;
    this.obj = obj$950;
};
Artifact$942.prototype.up = function () {
    return this.upper;
};
Artifact$942.prototype.and = Artifact$942.prototype.up;
module.exports = Artifact$942;
Artifact$942.prototype[util$940.camelize('group-id')] = function (value$951) {
    return util$940.primitiveAccessor.apply(this, [
        'group-id',
        value$951
    ]);
};
Artifact$942.prototype[util$940.camelize('artifact-id')] = function (value$952) {
    return util$940.primitiveAccessor.apply(this, [
        'artifact-id',
        value$952
    ]);
};
Artifact$942.prototype[util$940.camelize('version')] = function (value$953) {
    return util$940.primitiveAccessor.apply(this, [
        'version',
        value$953
    ]);
};
Artifact$942.prototype[util$940.camelize('classifier')] = function (value$954) {
    return util$940.primitiveAccessor.apply(this, [
        'classifier',
        value$954
    ]);
};
Artifact$942.prototype[util$940.camelize('extension')] = function (value$955) {
    return util$940.primitiveAccessor.apply(this, [
        'extension',
        value$955
    ]);
};
Artifact$942.prototype[util$940.camelize('target-file-name')] = function (value$956) {
    return util$940.primitiveAccessor.apply(this, [
        'target-file-name',
        value$956
    ]);
};