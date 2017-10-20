'use strict';
var util$940 = require('../../misc/util.js');
var BuildResult$941 = require('./triggers/build-result.js');
var Gerrit$942 = require('./triggers/gerrit.js');
var Github$943 = require('../../misc/empty-proxy.js');
var GithubPullRequest$944 = require('./triggers/github-pull-request.js');
var GitlabMergeRequest$945 = require('./triggers/gitlab-merge-request.js');
var PollUrl$946 = require('./triggers/pollurl.js');
var Reverse$947 = require('./triggers/reverse.js');
var Script$948 = require('./triggers/script.js');
var Gitlab$949 = require('./triggers/gitlab.js');
var Bitbucket$950 = require('../../misc/empty-proxy.js');
var MonitorFolders$951 = require('./triggers/monitor-folders.js');
var MonitorFiles$952 = require('./triggers/monitor-files.js');
var PollScm$953 = require('./triggers/pollscm.js');
var Triggers$955 = function (upper$970, array$971) {
    this.upper = upper$970;
    this.array = array$971;
};
Triggers$955.prototype.up = function () {
    return this.upper;
};
Triggers$955.prototype.and = Triggers$955.prototype.up;
module.exports = Triggers$955;
Triggers$955.prototype[util$940.camelize('build-result')] = function (value$972) {
    return util$940.keyedObjectElementAccessor.apply(this, [
        'build-result',
        BuildResult$941,
        value$972
    ]);
};
Triggers$955.prototype[util$940.camelize('gerrit')] = function (value$973) {
    return util$940.keyedObjectElementAccessor.apply(this, [
        'gerrit',
        Gerrit$942,
        value$973
    ]);
};
Triggers$955.prototype[util$940.camelize('github')] = function (value$974) {
    return util$940.keyedObjectElementAccessor.apply(this, [
        'github',
        Github$943,
        value$974
    ]);
};
Triggers$955.prototype[util$940.camelize('github-pull-request')] = function (value$975) {
    return util$940.keyedObjectElementAccessor.apply(this, [
        'github-pull-request',
        GithubPullRequest$944,
        value$975
    ]);
};
Triggers$955.prototype[util$940.camelize('gitlab-merge-request')] = function (value$976) {
    return util$940.keyedObjectElementAccessor.apply(this, [
        'gitlab-merge-request',
        GitlabMergeRequest$945,
        value$976
    ]);
};
Triggers$955.prototype[util$940.camelize('pollscm')] = function (value$977) {
    return util$940.keyedObjectElementAccessor.apply(this, [
        'pollscm',
        PollScm$953,
        value$977
    ]);
};
Triggers$955.prototype[util$940.camelize('pollurl')] = function (value$978) {
    return util$940.keyedObjectElementAccessor.apply(this, [
        'pollurl',
        PollUrl$946,
        value$978
    ]);
};
Triggers$955.prototype[util$940.camelize('reverse')] = function (value$979) {
    return util$940.keyedObjectElementAccessor.apply(this, [
        'reverse',
        Reverse$947,
        value$979
    ]);
};
Triggers$955.prototype[util$940.camelize('script')] = function (value$980) {
    return util$940.keyedObjectElementAccessor.apply(this, [
        'script',
        Script$948,
        value$980
    ]);
};
Triggers$955.prototype[util$940.camelize('timed')] = function (value$981) {
    return util$940.keyedPrimitiveElementAccessor.apply(this, [
        'timed',
        value$981
    ]);
};
Triggers$955.prototype[util$940.camelize('gitlab')] = function (value$982) {
    return util$940.keyedObjectElementAccessor.apply(this, [
        'gitlab',
        Gitlab$949,
        value$982
    ]);
};
Triggers$955.prototype[util$940.camelize('bitbucket')] = function (value$983) {
    return util$940.keyedObjectElementAccessor.apply(this, [
        'bitbucket',
        Bitbucket$950,
        value$983
    ]);
};
Triggers$955.prototype[util$940.camelize('monitor-folders')] = function (value$984) {
    return util$940.keyedObjectElementAccessor.apply(this, [
        'monitor-folders',
        MonitorFolders$951,
        value$984
    ]);
};
Triggers$955.prototype[util$940.camelize('monitor-files')] = function (value$985) {
    return util$940.keyedObjectElementAccessor.apply(this, [
        'monitor-files',
        MonitorFiles$952,
        value$985
    ]);
};