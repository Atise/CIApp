'use strict';
var util$940 = require('../../../misc/util.js');
var TriggerOn$941 = require('./gerrit/trigger-on.js');
var Project$942 = require('./gerrit/project.js');
var SkipVote$943 = require('./gerrit/skip-vote.js');
var Gerrit$945 = function (upper$977, obj$978) {
    this.upper = upper$977;
    this.obj = obj$978;
};
Gerrit$945.prototype.up = function () {
    return this.upper;
};
Gerrit$945.prototype.and = Gerrit$945.prototype.up;
module.exports = Gerrit$945;
Gerrit$945.prototype[util$940.camelize('trigger-on')] = function (value$979) {
    return util$940.customArrayAccessor.apply(this, [
        'trigger-on',
        TriggerOn$941,
        value$979
    ]);
};
Gerrit$945.prototype[util$940.camelize('override-votes')] = function (value$980) {
    return util$940.primitiveAccessor.apply(this, [
        'override-votes',
        value$980
    ]);
};
Gerrit$945.prototype[util$940.camelize('gerrit-build-started-verified-value')] = function (value$981) {
    return util$940.primitiveAccessor.apply(this, [
        'gerrit-build-started-verified-value',
        value$981
    ]);
};
Gerrit$945.prototype[util$940.camelize('gerrit-build-successful-verified-value')] = function (value$982) {
    return util$940.primitiveAccessor.apply(this, [
        'gerrit-build-successful-verified-value',
        value$982
    ]);
};
Gerrit$945.prototype[util$940.camelize('gerrit-build-failed-verified-value')] = function (value$983) {
    return util$940.primitiveAccessor.apply(this, [
        'gerrit-build-failed-verified-value',
        value$983
    ]);
};
Gerrit$945.prototype[util$940.camelize('gerrit-build-unstable-verified-value')] = function (value$984) {
    return util$940.primitiveAccessor.apply(this, [
        'gerrit-build-unstable-verified-value',
        value$984
    ]);
};
Gerrit$945.prototype[util$940.camelize('gerrit-build-notbuilt-verified-value')] = function (value$985) {
    return util$940.primitiveAccessor.apply(this, [
        'gerrit-build-notbuilt-verified-value',
        value$985
    ]);
};
Gerrit$945.prototype[util$940.camelize('gerrit-build-started-codereview-value')] = function (value$986) {
    return util$940.primitiveAccessor.apply(this, [
        'gerrit-build-started-codereview-value',
        value$986
    ]);
};
Gerrit$945.prototype[util$940.camelize('gerrit-build-successful-codereview-value')] = function (value$987) {
    return util$940.primitiveAccessor.apply(this, [
        'gerrit-build-successful-codereview-value',
        value$987
    ]);
};
Gerrit$945.prototype[util$940.camelize('gerrit-build-failed-codereview-value')] = function (value$988) {
    return util$940.primitiveAccessor.apply(this, [
        'gerrit-build-failed-codereview-value',
        value$988
    ]);
};
Gerrit$945.prototype[util$940.camelize('gerrit-build-unstable-codereview-value')] = function (value$989) {
    return util$940.primitiveAccessor.apply(this, [
        'gerrit-build-unstable-codereview-value',
        value$989
    ]);
};
Gerrit$945.prototype[util$940.camelize('gerrit-build-notbuilt-codereview-value')] = function (value$990) {
    return util$940.primitiveAccessor.apply(this, [
        'gerrit-build-notbuilt-codereview-value',
        value$990
    ]);
};
Gerrit$945.prototype[util$940.camelize('failure-message')] = function (value$991) {
    return util$940.primitiveAccessor.apply(this, [
        'failure-message',
        value$991
    ]);
};
Gerrit$945.prototype[util$940.camelize('successful-message')] = function (value$992) {
    return util$940.primitiveAccessor.apply(this, [
        'successful-message',
        value$992
    ]);
};
Gerrit$945.prototype[util$940.camelize('unstable-message')] = function (value$993) {
    return util$940.primitiveAccessor.apply(this, [
        'unstable-message',
        value$993
    ]);
};
Gerrit$945.prototype[util$940.camelize('notbuilt-message')] = function (value$994) {
    return util$940.primitiveAccessor.apply(this, [
        'notbuilt-message',
        value$994
    ]);
};
Gerrit$945.prototype[util$940.camelize('failure-message-file')] = function (value$995) {
    return util$940.primitiveAccessor.apply(this, [
        'failure-message-file',
        value$995
    ]);
};
Gerrit$945.prototype[util$940.camelize('projects')] = function (value$996) {
    return util$940.objectArrayAccessor.apply(this, [
        'projects',
        Project$942,
        value$996
    ]);
};
Gerrit$945.prototype[util$940.camelize('skip-vote')] = function (value$997) {
    return util$940.objectAccessor.apply(this, [
        'skip-vote',
        SkipVote$943,
        value$997
    ]);
};
Gerrit$945.prototype[util$940.camelize('silent')] = function (value$998) {
    return util$940.primitiveAccessor.apply(this, [
        'silent',
        value$998
    ]);
};
Gerrit$945.prototype[util$940.camelize('silent-start')] = function (value$999) {
    return util$940.primitiveAccessor.apply(this, [
        'silent-start',
        value$999
    ]);
};
Gerrit$945.prototype[util$940.camelize('escape-quotes')] = function (value$1000) {
    return util$940.primitiveAccessor.apply(this, [
        'escape-quotes',
        value$1000
    ]);
};
Gerrit$945.prototype[util$940.camelize('no-name-and-email')] = function (value$1001) {
    return util$940.primitiveAccessor.apply(this, [
        'no-name-and-email',
        value$1001
    ]);
};
Gerrit$945.prototype[util$940.camelize('readable-message')] = function (value$1002) {
    return util$940.primitiveAccessor.apply(this, [
        'readable-message',
        value$1002
    ]);
};
Gerrit$945.prototype[util$940.camelize('dependency-jobs')] = function (value$1003) {
    return util$940.primitiveAccessor.apply(this, [
        'dependency-jobs',
        value$1003
    ]);
};
Gerrit$945.prototype[util$940.camelize('notification-level')] = function (value$1004) {
    return util$940.primitiveAccessor.apply(this, [
        'notification-level',
        value$1004
    ]);
};
Gerrit$945.prototype[util$940.camelize('dynamic-trigger-enabled')] = function (value$1005) {
    return util$940.primitiveAccessor.apply(this, [
        'dynamic-trigger-enabled',
        value$1005
    ]);
};
Gerrit$945.prototype[util$940.camelize('dynamic-trigger-url')] = function (value$1006) {
    return util$940.primitiveAccessor.apply(this, [
        'dynamic-trigger-url',
        value$1006
    ]);
};
Gerrit$945.prototype[util$940.camelize('trigger-for-unreviewed-patches')] = function (value$1007) {
    return util$940.primitiveAccessor.apply(this, [
        'trigger-for-unreviewed-patches',
        value$1007
    ]);
};
Gerrit$945.prototype[util$940.camelize('custom-url')] = function (value$1008) {
    return util$940.primitiveAccessor.apply(this, [
        'custom-url',
        value$1008
    ]);
};
Gerrit$945.prototype[util$940.camelize('server-name')] = function (value$1009) {
    return util$940.primitiveAccessor.apply(this, [
        'server-name',
        value$1009
    ]);
};