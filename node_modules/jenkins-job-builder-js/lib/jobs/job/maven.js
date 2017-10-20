'use strict';
var util$940 = require('../../misc/util.js');
var RootModule$941 = require('./maven/root-module.js');
var Maven$943 = function (upper$963, obj$964) {
    this.upper = upper$963;
    this.obj = obj$964;
};
Maven$943.prototype.up = function () {
    return this.upper;
};
Maven$943.prototype.and = Maven$943.prototype.up;
module.exports = Maven$943;
Maven$943.prototype[util$940.camelize('root-module')] = function (value$965) {
    return util$940.objectAccessor.apply(this, [
        'root-module',
        RootModule$941,
        value$965
    ]);
};
Maven$943.prototype[util$940.camelize('root-pom')] = function (value$966) {
    return util$940.primitiveAccessor.apply(this, [
        'root-pom',
        value$966
    ]);
};
Maven$943.prototype[util$940.camelize('goals')] = function (value$967) {
    return util$940.primitiveAccessor.apply(this, [
        'goals',
        value$967
    ]);
};
Maven$943.prototype[util$940.camelize('maven-opts')] = function (value$968) {
    return util$940.primitiveAccessor.apply(this, [
        'maven-opts',
        value$968
    ]);
};
Maven$943.prototype[util$940.camelize('maven-name')] = function (value$969) {
    return util$940.primitiveAccessor.apply(this, [
        'maven-name',
        value$969
    ]);
};
Maven$943.prototype[util$940.camelize('private-repository')] = function (value$970) {
    return util$940.primitiveAccessor.apply(this, [
        'private-repository',
        value$970
    ]);
};
Maven$943.prototype[util$940.camelize('ignore-upstream-changes')] = function (value$971) {
    return util$940.primitiveAccessor.apply(this, [
        'ignore-upstream-changes',
        value$971
    ]);
};
Maven$943.prototype[util$940.camelize('incremental-build')] = function (value$972) {
    return util$940.primitiveAccessor.apply(this, [
        'incremental-build',
        value$972
    ]);
};
Maven$943.prototype[util$940.camelize('automatic-archiving')] = function (value$973) {
    return util$940.primitiveAccessor.apply(this, [
        'automatic-archiving',
        value$973
    ]);
};
Maven$943.prototype[util$940.camelize('automatic-site-archiving')] = function (value$974) {
    return util$940.primitiveAccessor.apply(this, [
        'automatic-site-archiving',
        value$974
    ]);
};
Maven$943.prototype[util$940.camelize('automatic-fingerprinting')] = function (value$975) {
    return util$940.primitiveAccessor.apply(this, [
        'automatic-fingerprinting',
        value$975
    ]);
};
Maven$943.prototype[util$940.camelize('parallel-build-modules')] = function (value$976) {
    return util$940.primitiveAccessor.apply(this, [
        'parallel-build-modules',
        value$976
    ]);
};
Maven$943.prototype[util$940.camelize('resolve-dependencies')] = function (value$977) {
    return util$940.primitiveAccessor.apply(this, [
        'resolve-dependencies',
        value$977
    ]);
};
Maven$943.prototype[util$940.camelize('run-headless')] = function (value$978) {
    return util$940.primitiveAccessor.apply(this, [
        'run-headless',
        value$978
    ]);
};
Maven$943.prototype[util$940.camelize('process-plugins')] = function (value$979) {
    return util$940.primitiveAccessor.apply(this, [
        'process-plugins',
        value$979
    ]);
};
Maven$943.prototype[util$940.camelize('custom-workspace')] = function (value$980) {
    return util$940.primitiveAccessor.apply(this, [
        'custom-workspace',
        value$980
    ]);
};
Maven$943.prototype[util$940.camelize('settings')] = function (value$981) {
    return util$940.primitiveAccessor.apply(this, [
        'settings',
        value$981
    ]);
};
Maven$943.prototype[util$940.camelize('global-settings')] = function (value$982) {
    return util$940.primitiveAccessor.apply(this, [
        'global-settings',
        value$982
    ]);
};
Maven$943.prototype[util$940.camelize('post-step-run-condition')] = function (value$983) {
    return util$940.primitiveAccessor.apply(this, [
        'post-step-run-condition',
        value$983
    ]);
};