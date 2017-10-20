'use strict';
var util$940 = require('../../../misc/util.js');
var ArtifactoryGeneric$942 = function (upper$956, obj$957) {
    this.upper = upper$956;
    this.obj = obj$957;
};
ArtifactoryGeneric$942.prototype.up = function () {
    return this.upper;
};
ArtifactoryGeneric$942.prototype.and = ArtifactoryGeneric$942.prototype.up;
module.exports = ArtifactoryGeneric$942;
ArtifactoryGeneric$942.prototype[util$940.camelize('url')] = function (value$958) {
    return util$940.primitiveAccessor.apply(this, [
        'url',
        value$958
    ]);
};
ArtifactoryGeneric$942.prototype[util$940.camelize('name')] = function (value$959) {
    return util$940.primitiveAccessor.apply(this, [
        'name',
        value$959
    ]);
};
ArtifactoryGeneric$942.prototype[util$940.camelize('repo-key')] = function (value$960) {
    return util$940.primitiveAccessor.apply(this, [
        'repo-key',
        value$960
    ]);
};
ArtifactoryGeneric$942.prototype[util$940.camelize('snapshot-repo-key')] = function (value$961) {
    return util$940.primitiveAccessor.apply(this, [
        'snapshot-repo-key',
        value$961
    ]);
};
ArtifactoryGeneric$942.prototype[util$940.camelize('deploy-pattern')] = function (value$962) {
    return util$940.primitiveArrayAccessor.apply(this, [
        'deploy-pattern',
        value$962
    ]);
};
ArtifactoryGeneric$942.prototype[util$940.camelize('resolve-pattern')] = function (value$963) {
    return util$940.primitiveArrayAccessor.apply(this, [
        'resolve-pattern',
        value$963
    ]);
};
ArtifactoryGeneric$942.prototype[util$940.camelize('matrix-params')] = function (value$964) {
    return util$940.primitiveArrayAccessor.apply(this, [
        'matrix-params',
        value$964
    ]);
};
ArtifactoryGeneric$942.prototype[util$940.camelize('deploy-build-info')] = function (value$965) {
    return util$940.primitiveAccessor.apply(this, [
        'deploy-build-info',
        value$965
    ]);
};
ArtifactoryGeneric$942.prototype[util$940.camelize('env-vars-include')] = function (value$966) {
    return util$940.primitiveAccessor.apply(this, [
        'env-vars-include',
        value$966
    ]);
};
ArtifactoryGeneric$942.prototype[util$940.camelize('env-vars-include-patterns')] = function (value$967) {
    return util$940.primitiveArrayAccessor.apply(this, [
        'env-vars-include-patterns',
        value$967
    ]);
};
ArtifactoryGeneric$942.prototype[util$940.camelize('env-vars-exclude-patterns')] = function (value$968) {
    return util$940.primitiveArrayAccessor.apply(this, [
        'env-vars-exclude-patterns',
        value$968
    ]);
};
ArtifactoryGeneric$942.prototype[util$940.camelize('discard-old-builds')] = function (value$969) {
    return util$940.primitiveAccessor.apply(this, [
        'discard-old-builds',
        value$969
    ]);
};
ArtifactoryGeneric$942.prototype[util$940.camelize('discard-build-artifacts')] = function (value$970) {
    return util$940.primitiveAccessor.apply(this, [
        'discard-build-artifacts',
        value$970
    ]);
};