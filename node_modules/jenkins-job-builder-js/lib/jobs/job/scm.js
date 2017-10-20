'use strict';
var util$940 = require('../../misc/util.js');
var Git$941 = require('./scm/git.js');
var Hg$942 = require('./scm/hg.js');
var Repo$943 = require('./scm/repo.js');
var Store$944 = require('./scm/store.js');
var Svn$945 = require('./scm/svn.js');
var Cvs$946 = require('./scm/cvs.js');
var Tfs$947 = require('./scm/tfs.js');
var Workspace$948 = require('./scm/workspace.js');
var OpenShiftImgStreams$949 = require('./scm/openshift-img-streams.js');
var Scm$951 = function (upper$961, array$962) {
    this.upper = upper$961;
    this.array = array$962;
};
Scm$951.prototype.up = function () {
    return this.upper;
};
Scm$951.prototype.and = Scm$951.prototype.up;
module.exports = Scm$951;
Scm$951.prototype[util$940.camelize('git')] = function (value$963) {
    return util$940.keyedObjectElementAccessor.apply(this, [
        'git',
        Git$941,
        value$963
    ]);
};
Scm$951.prototype[util$940.camelize('hg')] = function (value$964) {
    return util$940.keyedObjectElementAccessor.apply(this, [
        'hg',
        Hg$942,
        value$964
    ]);
};
Scm$951.prototype[util$940.camelize('repo')] = function (value$965) {
    return util$940.keyedObjectElementAccessor.apply(this, [
        'repo',
        Repo$943,
        value$965
    ]);
};
Scm$951.prototype[util$940.camelize('store')] = function (value$966) {
    return util$940.keyedObjectElementAccessor.apply(this, [
        'store',
        Store$944,
        value$966
    ]);
};
Scm$951.prototype[util$940.camelize('svn')] = function (value$967) {
    return util$940.keyedObjectElementAccessor.apply(this, [
        'svn',
        Svn$945,
        value$967
    ]);
};
Scm$951.prototype[util$940.camelize('cvs')] = function (value$968) {
    return util$940.keyedObjectElementAccessor.apply(this, [
        'cvs',
        Cvs$946,
        value$968
    ]);
};
Scm$951.prototype[util$940.camelize('tfs')] = function (value$969) {
    return util$940.keyedObjectElementAccessor.apply(this, [
        'tfs',
        Tfs$947,
        value$969
    ]);
};
Scm$951.prototype[util$940.camelize('workspace')] = function (value$970) {
    return util$940.keyedObjectElementAccessor.apply(this, [
        'workspace',
        Workspace$948,
        value$970
    ]);
};
Scm$951.prototype[util$940.camelize('openshift-img-streams')] = function (value$971) {
    return util$940.keyedObjectElementAccessor.apply(this, [
        'openshift-img-streams',
        OpenShiftImgStreams$949,
        value$971
    ]);
};