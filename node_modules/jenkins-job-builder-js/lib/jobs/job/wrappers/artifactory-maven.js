'use strict';
var util$940 = require('../../../misc/util.js');
var ArtifactoryMaven$942 = function (upper$948, obj$949) {
    this.upper = upper$948;
    this.obj = obj$949;
};
ArtifactoryMaven$942.prototype.up = function () {
    return this.upper;
};
ArtifactoryMaven$942.prototype.and = ArtifactoryMaven$942.prototype.up;
module.exports = ArtifactoryMaven$942;
ArtifactoryMaven$942.prototype[util$940.camelize('url')] = function (value$950) {
    return util$940.primitiveAccessor.apply(this, [
        'url',
        value$950
    ]);
};
ArtifactoryMaven$942.prototype[util$940.camelize('name')] = function (value$951) {
    return util$940.primitiveAccessor.apply(this, [
        'name',
        value$951
    ]);
};
ArtifactoryMaven$942.prototype[util$940.camelize('repo-key')] = function (value$952) {
    return util$940.primitiveAccessor.apply(this, [
        'repo-key',
        value$952
    ]);
};
ArtifactoryMaven$942.prototype[util$940.camelize('release-repo-key')] = function (value$953) {
    return util$940.primitiveAccessor.apply(this, [
        'release-repo-key',
        value$953
    ]);
};
ArtifactoryMaven$942.prototype[util$940.camelize('snapshot-repo-key')] = function (value$954) {
    return util$940.primitiveAccessor.apply(this, [
        'snapshot-repo-key',
        value$954
    ]);
};