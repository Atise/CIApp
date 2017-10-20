'use strict';
var util$940 = require('../../../misc/util.js');
var MavenDeploy$942 = function (upper$948, obj$949) {
    this.upper = upper$948;
    this.obj = obj$949;
};
MavenDeploy$942.prototype.up = function () {
    return this.upper;
};
MavenDeploy$942.prototype.and = MavenDeploy$942.prototype.up;
module.exports = MavenDeploy$942;
MavenDeploy$942.prototype[util$940.camelize('id')] = function (value$950) {
    return util$940.primitiveAccessor.apply(this, [
        'id',
        value$950
    ]);
};
MavenDeploy$942.prototype[util$940.camelize('url')] = function (value$951) {
    return util$940.primitiveAccessor.apply(this, [
        'url',
        value$951
    ]);
};
MavenDeploy$942.prototype[util$940.camelize('unique-version')] = function (value$952) {
    return util$940.primitiveAccessor.apply(this, [
        'unique-version',
        value$952
    ]);
};
MavenDeploy$942.prototype[util$940.camelize('deploy-unstable')] = function (value$953) {
    return util$940.primitiveAccessor.apply(this, [
        'deploy-unstable',
        value$953
    ]);
};
MavenDeploy$942.prototype[util$940.camelize('release-env-var')] = function (value$954) {
    return util$940.primitiveAccessor.apply(this, [
        'release-env-var',
        value$954
    ]);
};