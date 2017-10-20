'use strict';
var util$940 = require('../../../misc/util.js');
var MavenTarget$942 = function (upper$951, obj$952) {
    this.upper = upper$951;
    this.obj = obj$952;
};
MavenTarget$942.prototype.up = function () {
    return this.upper;
};
MavenTarget$942.prototype.and = MavenTarget$942.prototype.up;
module.exports = MavenTarget$942;
MavenTarget$942.prototype[util$940.camelize('goals')] = function (value$953) {
    return util$940.primitiveAccessor.apply(this, [
        'goals',
        value$953
    ]);
};
MavenTarget$942.prototype[util$940.camelize('properties')] = function (value$954) {
    return util$940.primitiveArrayAccessor.apply(this, [
        'properties',
        value$954
    ]);
};
MavenTarget$942.prototype[util$940.camelize('pom')] = function (value$955) {
    return util$940.primitiveAccessor.apply(this, [
        'pom',
        value$955
    ]);
};
MavenTarget$942.prototype[util$940.camelize('private-repository')] = function (value$956) {
    return util$940.primitiveAccessor.apply(this, [
        'private-repository',
        value$956
    ]);
};
MavenTarget$942.prototype[util$940.camelize('maven-version')] = function (value$957) {
    return util$940.primitiveAccessor.apply(this, [
        'maven-version',
        value$957
    ]);
};
MavenTarget$942.prototype[util$940.camelize('java-opts')] = function (value$958) {
    return util$940.primitiveArrayAccessor.apply(this, [
        'java-opts',
        value$958
    ]);
};
MavenTarget$942.prototype[util$940.camelize('settings')] = function (value$959) {
    return util$940.primitiveAccessor.apply(this, [
        'settings',
        value$959
    ]);
};
MavenTarget$942.prototype[util$940.camelize('global-settings')] = function (value$960) {
    return util$940.primitiveAccessor.apply(this, [
        'global-settings',
        value$960
    ]);
};