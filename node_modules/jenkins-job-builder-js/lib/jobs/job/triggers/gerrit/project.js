'use strict';
var util$940 = require('../../../../misc/util.js');
var Branch$941 = require('./project/branch.js');
var FilePath$942 = require('./project/file-path.js');
var Topic$943 = require('./project/topic.js');
var Project$945 = function (upper$954, obj$955) {
    this.upper = upper$954;
    this.obj = obj$955;
};
Project$945.prototype.up = function () {
    return this.upper;
};
Project$945.prototype.and = Project$945.prototype.up;
module.exports = Project$945;
Project$945.prototype[util$940.camelize('project-compare-type')] = function (value$956) {
    return util$940.primitiveAccessor.apply(this, [
        'project-compare-type',
        value$956
    ]);
};
Project$945.prototype[util$940.camelize('project-pattern')] = function (value$957) {
    return util$940.primitiveAccessor.apply(this, [
        'project-pattern',
        value$957
    ]);
};
Project$945.prototype[util$940.camelize('branch-compare-type')] = function (value$958) {
    return util$940.primitiveAccessor.apply(this, [
        'branch-compare-type',
        value$958
    ]);
};
Project$945.prototype[util$940.camelize('branch-pattern')] = function (value$959) {
    return util$940.primitiveAccessor.apply(this, [
        'branch-pattern',
        value$959
    ]);
};
Project$945.prototype[util$940.camelize('branches')] = function (value$960) {
    return util$940.objectArrayAccessor.apply(this, [
        'branches',
        Branch$941,
        value$960
    ]);
};
Project$945.prototype[util$940.camelize('file-paths')] = function (value$961) {
    return util$940.objectArrayAccessor.apply(this, [
        'file-paths',
        FilePath$942,
        value$961
    ]);
};
Project$945.prototype[util$940.camelize('forbidden-file-paths')] = function (value$962) {
    return util$940.objectArrayAccessor.apply(this, [
        'forbidden-file-paths',
        FilePath$942,
        value$962
    ]);
};
Project$945.prototype[util$940.camelize('topics')] = function (value$963) {
    return util$940.objectArrayAccessor.apply(this, [
        'topics',
        Topic$943,
        value$963
    ]);
};