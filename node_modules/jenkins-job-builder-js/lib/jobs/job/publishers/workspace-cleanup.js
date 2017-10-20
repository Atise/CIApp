'use strict';
var util$940 = require('../../../misc/util.js');
var CleanIf$941 = require('./workspace-cleanup/clean-if.js');
var WorkspaceCleanup$943 = function (upper$950, obj$951) {
    this.upper = upper$950;
    this.obj = obj$951;
};
WorkspaceCleanup$943.prototype.up = function () {
    return this.upper;
};
WorkspaceCleanup$943.prototype.and = WorkspaceCleanup$943.prototype.up;
module.exports = WorkspaceCleanup$943;
WorkspaceCleanup$943.prototype[util$940.camelize('include')] = function (value$952) {
    return util$940.primitiveArrayAccessor.apply(this, [
        'include',
        value$952
    ]);
};
WorkspaceCleanup$943.prototype[util$940.camelize('exclude')] = function (value$953) {
    return util$940.primitiveArrayAccessor.apply(this, [
        'exclude',
        value$953
    ]);
};
WorkspaceCleanup$943.prototype[util$940.camelize('dirmatch')] = function (value$954) {
    return util$940.primitiveAccessor.apply(this, [
        'dirmatch',
        value$954
    ]);
};
WorkspaceCleanup$943.prototype[util$940.camelize('clean-if')] = function (value$955) {
    return util$940.objectArrayAccessor.apply(this, [
        'clean-if',
        CleanIf$941,
        value$955
    ]);
};
WorkspaceCleanup$943.prototype[util$940.camelize('fail-build')] = function (value$956) {
    return util$940.primitiveAccessor.apply(this, [
        'fail-build',
        value$956
    ]);
};
WorkspaceCleanup$943.prototype[util$940.camelize('clean-parent')] = function (value$957) {
    return util$940.primitiveAccessor.apply(this, [
        'clean-parent',
        value$957
    ]);
};