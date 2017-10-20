'use strict';
var util$940 = require('../../../misc/util.js');
var GithubPullRequest$942 = function (upper$966, obj$967) {
    this.upper = upper$966;
    this.obj = obj$967;
};
GithubPullRequest$942.prototype.up = function () {
    return this.upper;
};
GithubPullRequest$942.prototype.and = GithubPullRequest$942.prototype.up;
module.exports = GithubPullRequest$942;
GithubPullRequest$942.prototype[util$940.camelize('admin-list')] = function (value$968) {
    return util$940.primitiveArrayAccessor.apply(this, [
        'admin-list',
        value$968
    ]);
};
GithubPullRequest$942.prototype[util$940.camelize('white-list')] = function (value$969) {
    return util$940.primitiveArrayAccessor.apply(this, [
        'white-list',
        value$969
    ]);
};
GithubPullRequest$942.prototype[util$940.camelize('org-list')] = function (value$970) {
    return util$940.primitiveArrayAccessor.apply(this, [
        'org-list',
        value$970
    ]);
};
GithubPullRequest$942.prototype[util$940.camelize('allow-whitelist-orgs-as-admins')] = function (value$971) {
    return util$940.primitiveAccessor.apply(this, [
        'allow-whitelist-orgs-as-admins',
        value$971
    ]);
};
GithubPullRequest$942.prototype[util$940.camelize('cron')] = function (value$972) {
    return util$940.primitiveAccessor.apply(this, [
        'cron',
        value$972
    ]);
};
GithubPullRequest$942.prototype[util$940.camelize('trigger-phrase')] = function (value$973) {
    return util$940.primitiveAccessor.apply(this, [
        'trigger-phrase',
        value$973
    ]);
};
GithubPullRequest$942.prototype[util$940.camelize('only-trigger-phrase')] = function (value$974) {
    return util$940.primitiveAccessor.apply(this, [
        'only-trigger-phrase',
        value$974
    ]);
};
GithubPullRequest$942.prototype[util$940.camelize('github-hooks')] = function (value$975) {
    return util$940.primitiveAccessor.apply(this, [
        'github-hooks',
        value$975
    ]);
};
GithubPullRequest$942.prototype[util$940.camelize('permit-all')] = function (value$976) {
    return util$940.primitiveAccessor.apply(this, [
        'permit-all',
        value$976
    ]);
};
GithubPullRequest$942.prototype[util$940.camelize('auto-close-on-fail')] = function (value$977) {
    return util$940.primitiveAccessor.apply(this, [
        'auto-close-on-fail',
        value$977
    ]);
};
GithubPullRequest$942.prototype[util$940.camelize('white-list-target-branches')] = function (value$978) {
    return util$940.primitiveArrayAccessor.apply(this, [
        'white-list-target-branches',
        value$978
    ]);
};
GithubPullRequest$942.prototype[util$940.camelize('auth-id')] = function (value$979) {
    return util$940.primitiveAccessor.apply(this, [
        'auth-id',
        value$979
    ]);
};
GithubPullRequest$942.prototype[util$940.camelize('build-desc-template')] = function (value$980) {
    return util$940.primitiveAccessor.apply(this, [
        'build-desc-template',
        value$980
    ]);
};
GithubPullRequest$942.prototype[util$940.camelize('status-context')] = function (value$981) {
    return util$940.primitiveAccessor.apply(this, [
        'status-context',
        value$981
    ]);
};
GithubPullRequest$942.prototype[util$940.camelize('triggered-status')] = function (value$982) {
    return util$940.primitiveAccessor.apply(this, [
        'triggered-status',
        value$982
    ]);
};
GithubPullRequest$942.prototype[util$940.camelize('started-status')] = function (value$983) {
    return util$940.primitiveAccessor.apply(this, [
        'started-status',
        value$983
    ]);
};
GithubPullRequest$942.prototype[util$940.camelize('status-url')] = function (value$984) {
    return util$940.primitiveAccessor.apply(this, [
        'status-url',
        value$984
    ]);
};
GithubPullRequest$942.prototype[util$940.camelize('success-status')] = function (value$985) {
    return util$940.primitiveAccessor.apply(this, [
        'success-status',
        value$985
    ]);
};
GithubPullRequest$942.prototype[util$940.camelize('failure-status')] = function (value$986) {
    return util$940.primitiveAccessor.apply(this, [
        'failure-status',
        value$986
    ]);
};
GithubPullRequest$942.prototype[util$940.camelize('error-status')] = function (value$987) {
    return util$940.primitiveAccessor.apply(this, [
        'error-status',
        value$987
    ]);
};
GithubPullRequest$942.prototype[util$940.camelize('success-comment')] = function (value$988) {
    return util$940.primitiveAccessor.apply(this, [
        'success-comment',
        value$988
    ]);
};
GithubPullRequest$942.prototype[util$940.camelize('failure-comment')] = function (value$989) {
    return util$940.primitiveAccessor.apply(this, [
        'failure-comment',
        value$989
    ]);
};
GithubPullRequest$942.prototype[util$940.camelize('error-comment')] = function (value$990) {
    return util$940.primitiveAccessor.apply(this, [
        'error-comment',
        value$990
    ]);
};