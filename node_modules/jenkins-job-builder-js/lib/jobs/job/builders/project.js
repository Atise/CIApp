'use strict';
var util$940 = require('../../../misc/util.js');
var Bool$941 = require('./project/bool.js');
var BlockThresholds$942 = require('./project/block-thresholds.js');
var ParameterFactories$943 = require('./project/parameter-factories.js');
var Project$945 = function (upper$960, obj$961) {
    this.upper = upper$960;
    this.obj = obj$961;
};
Project$945.prototype.up = function () {
    return this.upper;
};
Project$945.prototype.and = Project$945.prototype.up;
module.exports = Project$945;
Project$945.prototype[util$940.camelize('project')] = function (value$962) {
    return util$940.primitiveArrayAccessor.apply(this, [
        'project',
        value$962
    ]);
};
Project$945.prototype[util$940.camelize('predefined-parameters')] = function (value$963) {
    return util$940.primitiveAccessor.apply(this, [
        'predefined-parameters',
        value$963
    ]);
};
Project$945.prototype[util$940.camelize('bool-parameters')] = function (value$964) {
    return util$940.objectArrayAccessor.apply(this, [
        'bool-parameters',
        Bool$941,
        value$964
    ]);
};
Project$945.prototype[util$940.camelize('property-file')] = function (value$965) {
    return util$940.primitiveAccessor.apply(this, [
        'property-file',
        value$965
    ]);
};
Project$945.prototype[util$940.camelize('property-file-fail-on-missing')] = function (value$966) {
    return util$940.primitiveAccessor.apply(this, [
        'property-file-fail-on-missing',
        value$966
    ]);
};
Project$945.prototype[util$940.camelize('current-parameters')] = function (value$967) {
    return util$940.primitiveAccessor.apply(this, [
        'current-parameters',
        value$967
    ]);
};
Project$945.prototype[util$940.camelize('node-label-name')] = function (value$968) {
    return util$940.primitiveAccessor.apply(this, [
        'node-label-name',
        value$968
    ]);
};
Project$945.prototype[util$940.camelize('node-label')] = function (value$969) {
    return util$940.primitiveAccessor.apply(this, [
        'node-label',
        value$969
    ]);
};
Project$945.prototype[util$940.camelize('svn-revision')] = function (value$970) {
    return util$940.primitiveAccessor.apply(this, [
        'svn-revision',
        value$970
    ]);
};
Project$945.prototype[util$940.camelize('git-revision')] = function (value$971) {
    return util$940.primitiveAccessor.apply(this, [
        'git-revision',
        value$971
    ]);
};
Project$945.prototype[util$940.camelize('block')] = function (value$972) {
    return util$940.primitiveAccessor.apply(this, [
        'block',
        value$972
    ]);
};
Project$945.prototype[util$940.camelize('block-thresholds')] = function (value$973) {
    return util$940.objectAccessor.apply(this, [
        'block-thresholds',
        BlockThresholds$942,
        value$973
    ]);
};
Project$945.prototype[util$940.camelize('same-node')] = function (value$974) {
    return util$940.primitiveAccessor.apply(this, [
        'same-node',
        value$974
    ]);
};
Project$945.prototype[util$940.camelize('parameter-factories')] = function (value$975) {
    return util$940.objectArrayAccessor.apply(this, [
        'parameter-factories',
        ParameterFactories$943,
        value$975
    ]);
};