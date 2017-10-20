'use strict';
var util$940 = require('../../../misc/util.js');
var ArtifactoryMavenFreeStyle$942 = function (upper$974, obj$975) {
    this.upper = upper$974;
    this.obj = obj$975;
};
ArtifactoryMavenFreeStyle$942.prototype.up = function () {
    return this.upper;
};
ArtifactoryMavenFreeStyle$942.prototype.and = ArtifactoryMavenFreeStyle$942.prototype.up;
module.exports = ArtifactoryMavenFreeStyle$942;
ArtifactoryMavenFreeStyle$942.prototype[util$940.camelize('url')] = function (value$976) {
    return util$940.primitiveAccessor.apply(this, [
        'url',
        value$976
    ]);
};
ArtifactoryMavenFreeStyle$942.prototype[util$940.camelize('name')] = function (value$977) {
    return util$940.primitiveAccessor.apply(this, [
        'name',
        value$977
    ]);
};
ArtifactoryMavenFreeStyle$942.prototype[util$940.camelize('release-repo-key')] = function (value$978) {
    return util$940.primitiveAccessor.apply(this, [
        'release-repo-key',
        value$978
    ]);
};
ArtifactoryMavenFreeStyle$942.prototype[util$940.camelize('snapshot-repo-key')] = function (value$979) {
    return util$940.primitiveAccessor.apply(this, [
        'snapshot-repo-key',
        value$979
    ]);
};
ArtifactoryMavenFreeStyle$942.prototype[util$940.camelize('publish-build-info')] = function (value$980) {
    return util$940.primitiveAccessor.apply(this, [
        'publish-build-info',
        value$980
    ]);
};
ArtifactoryMavenFreeStyle$942.prototype[util$940.camelize('discard-old-builds')] = function (value$981) {
    return util$940.primitiveAccessor.apply(this, [
        'discard-old-builds',
        value$981
    ]);
};
ArtifactoryMavenFreeStyle$942.prototype[util$940.camelize('discard-build-artifacts')] = function (value$982) {
    return util$940.primitiveAccessor.apply(this, [
        'discard-build-artifacts',
        value$982
    ]);
};
ArtifactoryMavenFreeStyle$942.prototype[util$940.camelize('include-env-vars')] = function (value$983) {
    return util$940.primitiveAccessor.apply(this, [
        'include-env-vars',
        value$983
    ]);
};
ArtifactoryMavenFreeStyle$942.prototype[util$940.camelize('run-checks')] = function (value$984) {
    return util$940.primitiveAccessor.apply(this, [
        'run-checks',
        value$984
    ]);
};
ArtifactoryMavenFreeStyle$942.prototype[util$940.camelize('include-publish-artifacts')] = function (value$985) {
    return util$940.primitiveAccessor.apply(this, [
        'include-publish-artifacts',
        value$985
    ]);
};
ArtifactoryMavenFreeStyle$942.prototype[util$940.camelize('license-auto-discovery')] = function (value$986) {
    return util$940.primitiveAccessor.apply(this, [
        'license-auto-discovery',
        value$986
    ]);
};
ArtifactoryMavenFreeStyle$942.prototype[util$940.camelize('enable-issue-tracker-integration')] = function (value$987) {
    return util$940.primitiveAccessor.apply(this, [
        'enable-issue-tracker-integration',
        value$987
    ]);
};
ArtifactoryMavenFreeStyle$942.prototype[util$940.camelize('aggregate-build-issues')] = function (value$988) {
    return util$940.primitiveAccessor.apply(this, [
        'aggregate-build-issues',
        value$988
    ]);
};
ArtifactoryMavenFreeStyle$942.prototype[util$940.camelize('filter-excluded-artifacts-from-build')] = function (value$989) {
    return util$940.primitiveAccessor.apply(this, [
        'filter-excluded-artifacts-from-build',
        value$989
    ]);
};
ArtifactoryMavenFreeStyle$942.prototype[util$940.camelize('scopes')] = function (value$990) {
    return util$940.primitiveAccessor.apply(this, [
        'scopes',
        value$990
    ]);
};
ArtifactoryMavenFreeStyle$942.prototype[util$940.camelize('violation-recipients')] = function (value$991) {
    return util$940.primitiveAccessor.apply(this, [
        'violation-recipients',
        value$991
    ]);
};
ArtifactoryMavenFreeStyle$942.prototype[util$940.camelize('matrix-params')] = function (value$992) {
    return util$940.primitiveArrayAccessor.apply(this, [
        'matrix-params',
        value$992
    ]);
};
ArtifactoryMavenFreeStyle$942.prototype[util$940.camelize('black-duck-app-name')] = function (value$993) {
    return util$940.primitiveAccessor.apply(this, [
        'black-duck-app-name',
        value$993
    ]);
};
ArtifactoryMavenFreeStyle$942.prototype[util$940.camelize('black-duck-app-version')] = function (value$994) {
    return util$940.primitiveAccessor.apply(this, [
        'black-duck-app-version',
        value$994
    ]);
};
ArtifactoryMavenFreeStyle$942.prototype[util$940.camelize('black-duck-report-recipients')] = function (value$995) {
    return util$940.primitiveAccessor.apply(this, [
        'black-duck-report-recipients',
        value$995
    ]);
};
ArtifactoryMavenFreeStyle$942.prototype[util$940.camelize('black-duck-scopes')] = function (value$996) {
    return util$940.primitiveAccessor.apply(this, [
        'black-duck-scopes',
        value$996
    ]);
};
ArtifactoryMavenFreeStyle$942.prototype[util$940.camelize('black-duck-run-checks')] = function (value$997) {
    return util$940.primitiveAccessor.apply(this, [
        'black-duck-run-checks',
        value$997
    ]);
};
ArtifactoryMavenFreeStyle$942.prototype[util$940.camelize('black-duck-include-published-artifacts')] = function (value$998) {
    return util$940.primitiveAccessor.apply(this, [
        'black-duck-include-published-artifacts',
        value$998
    ]);
};
ArtifactoryMavenFreeStyle$942.prototype[util$940.camelize('auto-create-missing-component-requests')] = function (value$999) {
    return util$940.primitiveAccessor.apply(this, [
        'auto-create-missing-component-requests',
        value$999
    ]);
};
ArtifactoryMavenFreeStyle$942.prototype[util$940.camelize('auto-discard-stale-component-requests')] = function (value$1000) {
    return util$940.primitiveAccessor.apply(this, [
        'auto-discard-stale-component-requests',
        value$1000
    ]);
};
ArtifactoryMavenFreeStyle$942.prototype[util$940.camelize('deploy-artifacts')] = function (value$1001) {
    return util$940.primitiveAccessor.apply(this, [
        'deploy-artifacts',
        value$1001
    ]);
};
ArtifactoryMavenFreeStyle$942.prototype[util$940.camelize('deployment-include-patterns')] = function (value$1002) {
    return util$940.primitiveArrayAccessor.apply(this, [
        'deployment-include-patterns',
        value$1002
    ]);
};
ArtifactoryMavenFreeStyle$942.prototype[util$940.camelize('deployment-exclude-patterns')] = function (value$1003) {
    return util$940.primitiveArrayAccessor.apply(this, [
        'deployment-exclude-patterns',
        value$1003
    ]);
};
ArtifactoryMavenFreeStyle$942.prototype[util$940.camelize('env-vars-include')] = function (value$1004) {
    return util$940.primitiveAccessor.apply(this, [
        'env-vars-include',
        value$1004
    ]);
};
ArtifactoryMavenFreeStyle$942.prototype[util$940.camelize('env-vars-include-patterns')] = function (value$1005) {
    return util$940.primitiveArrayAccessor.apply(this, [
        'env-vars-include-patterns',
        value$1005
    ]);
};
ArtifactoryMavenFreeStyle$942.prototype[util$940.camelize('env-vars-exclude-patterns')] = function (value$1006) {
    return util$940.primitiveArrayAccessor.apply(this, [
        'env-vars-exclude-patterns',
        value$1006
    ]);
};