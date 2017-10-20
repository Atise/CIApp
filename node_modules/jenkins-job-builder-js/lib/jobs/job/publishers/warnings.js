'use strict';
var util$940 = require('../../../misc/util.js');
var WorkspaceFileScanner$941 = require('./warnings/workspace-file-scanner.js');
var TotalThresholds$942 = require('./warnings/total-thresholds.js');
var NewThresholds$943 = require('./warnings/new-thresholds.js');
var Warnings$945 = function (upper$961, obj$962) {
    this.upper = upper$961;
    this.obj = obj$962;
};
Warnings$945.prototype.up = function () {
    return this.upper;
};
Warnings$945.prototype.and = Warnings$945.prototype.up;
module.exports = Warnings$945;
Warnings$945.prototype[util$940.camelize('console-log-parsers')] = function (value$963) {
    return util$940.primitiveArrayAccessor.apply(this, [
        'console-log-parsers',
        value$963
    ]);
};
Warnings$945.prototype[util$940.camelize('workspace-file-scanners')] = function (value$964) {
    return util$940.objectArrayAccessor.apply(this, [
        'workspace-file-scanners',
        WorkspaceFileScanner$941,
        value$964
    ]);
};
Warnings$945.prototype[util$940.camelize('files-to-include')] = function (value$965) {
    return util$940.primitiveAccessor.apply(this, [
        'files-to-include',
        value$965
    ]);
};
Warnings$945.prototype[util$940.camelize('files-to-ignore')] = function (value$966) {
    return util$940.primitiveAccessor.apply(this, [
        'files-to-ignore',
        value$966
    ]);
};
Warnings$945.prototype[util$940.camelize('run-always')] = function (value$967) {
    return util$940.primitiveAccessor.apply(this, [
        'run-always',
        value$967
    ]);
};
Warnings$945.prototype[util$940.camelize('detect-modules')] = function (value$968) {
    return util$940.primitiveAccessor.apply(this, [
        'detect-modules',
        value$968
    ]);
};
Warnings$945.prototype[util$940.camelize('resolve-relative-paths')] = function (value$969) {
    return util$940.primitiveAccessor.apply(this, [
        'resolve-relative-paths',
        value$969
    ]);
};
Warnings$945.prototype[util$940.camelize('health-threshold-high')] = function (value$970) {
    return util$940.primitiveAccessor.apply(this, [
        'health-threshold-high',
        value$970
    ]);
};
Warnings$945.prototype[util$940.camelize('health-threshold-low')] = function (value$971) {
    return util$940.primitiveAccessor.apply(this, [
        'health-threshold-low',
        value$971
    ]);
};
Warnings$945.prototype[util$940.camelize('health-priorities')] = function (value$972) {
    return util$940.primitiveAccessor.apply(this, [
        'health-priorities',
        value$972
    ]);
};
Warnings$945.prototype[util$940.camelize('total-thresholds')] = function (value$973) {
    return util$940.objectAccessor.apply(this, [
        'total-thresholds',
        TotalThresholds$942,
        value$973
    ]);
};
Warnings$945.prototype[util$940.camelize('new-thresholds')] = function (value$974) {
    return util$940.objectAccessor.apply(this, [
        'new-thresholds',
        NewThresholds$943,
        value$974
    ]);
};
Warnings$945.prototype[util$940.camelize('use-delta-for-new-warnings')] = function (value$975) {
    return util$940.primitiveAccessor.apply(this, [
        'use-delta-for-new-warnings',
        value$975
    ]);
};
Warnings$945.prototype[util$940.camelize('only-use-stable-builds-as-reference')] = function (value$976) {
    return util$940.primitiveAccessor.apply(this, [
        'only-use-stable-builds-as-reference',
        value$976
    ]);
};
Warnings$945.prototype[util$940.camelize('default-encoding')] = function (value$977) {
    return util$940.primitiveAccessor.apply(this, [
        'default-encoding',
        value$977
    ]);
};