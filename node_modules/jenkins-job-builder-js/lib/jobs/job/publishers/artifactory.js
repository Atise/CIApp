'use strict';
var util$940 = require('../../../misc/util.js');
var Artifactory$942 = function (upper$976, obj$977) {
    this.upper = upper$976;
    this.obj = obj$977;
};
Artifactory$942.prototype.up = function () {
    return this.upper;
};
Artifactory$942.prototype.and = Artifactory$942.prototype.up;
module.exports = Artifactory$942;
Artifactory$942.prototype[util$940.camelize('url')] = function (value$978) {
    return util$940.primitiveAccessor.apply(this, [
        'url',
        value$978
    ]);
};
Artifactory$942.prototype[util$940.camelize('name')] = function (value$979) {
    return util$940.primitiveAccessor.apply(this, [
        'name',
        value$979
    ]);
};
Artifactory$942.prototype[util$940.camelize('release-repo-key')] = function (value$980) {
    return util$940.primitiveAccessor.apply(this, [
        'release-repo-key',
        value$980
    ]);
};
Artifactory$942.prototype[util$940.camelize('snapshot-repo-key')] = function (value$981) {
    return util$940.primitiveAccessor.apply(this, [
        'snapshot-repo-key',
        value$981
    ]);
};
Artifactory$942.prototype[util$940.camelize('publish-build-info')] = function (value$982) {
    return util$940.primitiveAccessor.apply(this, [
        'publish-build-info',
        value$982
    ]);
};
Artifactory$942.prototype[util$940.camelize('discard-old-builds')] = function (value$983) {
    return util$940.primitiveAccessor.apply(this, [
        'discard-old-builds',
        value$983
    ]);
};
Artifactory$942.prototype[util$940.camelize('discard-build-artifacts')] = function (value$984) {
    return util$940.primitiveAccessor.apply(this, [
        'discard-build-artifacts',
        value$984
    ]);
};
Artifactory$942.prototype[util$940.camelize('even-if-unstable')] = function (value$985) {
    return util$940.primitiveAccessor.apply(this, [
        'even-if-unstable',
        value$985
    ]);
};
Artifactory$942.prototype[util$940.camelize('run-checks')] = function (value$986) {
    return util$940.primitiveAccessor.apply(this, [
        'run-checks',
        value$986
    ]);
};
Artifactory$942.prototype[util$940.camelize('include-publish-artifacts')] = function (value$987) {
    return util$940.primitiveAccessor.apply(this, [
        'include-publish-artifacts',
        value$987
    ]);
};
Artifactory$942.prototype[util$940.camelize('pass-identified-downstream')] = function (value$988) {
    return util$940.primitiveAccessor.apply(this, [
        'pass-identified-downstream',
        value$988
    ]);
};
Artifactory$942.prototype[util$940.camelize('license-auto-discovery')] = function (value$989) {
    return util$940.primitiveAccessor.apply(this, [
        'license-auto-discovery',
        value$989
    ]);
};
Artifactory$942.prototype[util$940.camelize('enable-issue-tracker-integration')] = function (value$990) {
    return util$940.primitiveAccessor.apply(this, [
        'enable-issue-tracker-integration',
        value$990
    ]);
};
Artifactory$942.prototype[util$940.camelize('aggregate-build-issues')] = function (value$991) {
    return util$940.primitiveAccessor.apply(this, [
        'aggregate-build-issues',
        value$991
    ]);
};
Artifactory$942.prototype[util$940.camelize('allow-promotion-of-non-staged-builds')] = function (value$992) {
    return util$940.primitiveAccessor.apply(this, [
        'allow-promotion-of-non-staged-builds',
        value$992
    ]);
};
Artifactory$942.prototype[util$940.camelize('filter-excluded-artifacts-from-build')] = function (value$993) {
    return util$940.primitiveAccessor.apply(this, [
        'filter-excluded-artifacts-from-build',
        value$993
    ]);
};
Artifactory$942.prototype[util$940.camelize('scopes')] = function (value$994) {
    return util$940.primitiveAccessor.apply(this, [
        'scopes',
        value$994
    ]);
};
Artifactory$942.prototype[util$940.camelize('violation-recipients')] = function (value$995) {
    return util$940.primitiveAccessor.apply(this, [
        'violation-recipients',
        value$995
    ]);
};
Artifactory$942.prototype[util$940.camelize('matrix-params')] = function (value$996) {
    return util$940.primitiveArrayAccessor.apply(this, [
        'matrix-params',
        value$996
    ]);
};
Artifactory$942.prototype[util$940.camelize('black-duck-app-name')] = function (value$997) {
    return util$940.primitiveAccessor.apply(this, [
        'black-duck-app-name',
        value$997
    ]);
};
Artifactory$942.prototype[util$940.camelize('black-duck-app-version')] = function (value$998) {
    return util$940.primitiveAccessor.apply(this, [
        'black-duck-app-version',
        value$998
    ]);
};
Artifactory$942.prototype[util$940.camelize('black-duck-report-recipients')] = function (value$999) {
    return util$940.primitiveAccessor.apply(this, [
        'black-duck-report-recipients',
        value$999
    ]);
};
Artifactory$942.prototype[util$940.camelize('black-duck-scopes')] = function (value$1000) {
    return util$940.primitiveAccessor.apply(this, [
        'black-duck-scopes',
        value$1000
    ]);
};
Artifactory$942.prototype[util$940.camelize('black-duck-run-checks')] = function (value$1001) {
    return util$940.primitiveAccessor.apply(this, [
        'black-duck-run-checks',
        value$1001
    ]);
};
Artifactory$942.prototype[util$940.camelize('black-duck-include-published-artifacts')] = function (value$1002) {
    return util$940.primitiveAccessor.apply(this, [
        'black-duck-include-published-artifacts',
        value$1002
    ]);
};
Artifactory$942.prototype[util$940.camelize('auto-create-missing-component-requests')] = function (value$1003) {
    return util$940.primitiveAccessor.apply(this, [
        'auto-create-missing-component-requests',
        value$1003
    ]);
};
Artifactory$942.prototype[util$940.camelize('auto-discard-stale-component-requests')] = function (value$1004) {
    return util$940.primitiveAccessor.apply(this, [
        'auto-discard-stale-component-requests',
        value$1004
    ]);
};
Artifactory$942.prototype[util$940.camelize('deploy-artifacts')] = function (value$1005) {
    return util$940.primitiveAccessor.apply(this, [
        'deploy-artifacts',
        value$1005
    ]);
};
Artifactory$942.prototype[util$940.camelize('deployment-include-patterns')] = function (value$1006) {
    return util$940.primitiveArrayAccessor.apply(this, [
        'deployment-include-patterns',
        value$1006
    ]);
};
Artifactory$942.prototype[util$940.camelize('deployment-exclude-patterns')] = function (value$1007) {
    return util$940.primitiveArrayAccessor.apply(this, [
        'deployment-exclude-patterns',
        value$1007
    ]);
};
Artifactory$942.prototype[util$940.camelize('env-vars-include')] = function (value$1008) {
    return util$940.primitiveAccessor.apply(this, [
        'env-vars-include',
        value$1008
    ]);
};
Artifactory$942.prototype[util$940.camelize('env-vars-include-patterns')] = function (value$1009) {
    return util$940.primitiveArrayAccessor.apply(this, [
        'env-vars-include-patterns',
        value$1009
    ]);
};
Artifactory$942.prototype[util$940.camelize('env-vars-exclude-patterns')] = function (value$1010) {
    return util$940.primitiveArrayAccessor.apply(this, [
        'env-vars-exclude-patterns',
        value$1010
    ]);
};