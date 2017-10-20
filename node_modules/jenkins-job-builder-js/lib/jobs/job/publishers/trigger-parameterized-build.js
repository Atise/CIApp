'use strict';
var util$940 = require('../../../misc/util.js');
var BooleanParameters$942 = require('./trigger-parameterized-build/boolean-parameters.js');
var TriggerParameterizedBuild$943 = function (upper$964, obj$965) {
    this.upper = upper$964;
    this.obj = obj$965;
};
TriggerParameterizedBuild$943.prototype.up = function () {
    return this.upper;
};
TriggerParameterizedBuild$943.prototype.and = TriggerParameterizedBuild$943.prototype.up;
module.exports = TriggerParameterizedBuild$943;
TriggerParameterizedBuild$943.prototype[util$940.camelize('project')] = function (value$966) {
    return util$940.primitiveArrayAccessor.apply(this, [
        'project',
        value$966
    ]);
};
TriggerParameterizedBuild$943.prototype[util$940.camelize('predefined-parameters')] = function (value$967) {
    return util$940.primitiveAccessor.apply(this, [
        'predefined-parameters',
        value$967
    ]);
};
TriggerParameterizedBuild$943.prototype[util$940.camelize('current-parameters')] = function (value$968) {
    return util$940.primitiveAccessor.apply(this, [
        'current-parameters',
        value$968
    ]);
};
TriggerParameterizedBuild$943.prototype[util$940.camelize('node-parameters')] = function (value$969) {
    return util$940.primitiveAccessor.apply(this, [
        'node-parameters',
        value$969
    ]);
};
TriggerParameterizedBuild$943.prototype[util$940.camelize('svn-revision')] = function (value$970) {
    return util$940.primitiveAccessor.apply(this, [
        'svn-revision',
        value$970
    ]);
};
TriggerParameterizedBuild$943.prototype[util$940.camelize('git-revision')] = function (value$971) {
    return util$940.primitiveAccessor.apply(this, [
        'git-revision',
        value$971
    ]);
};
TriggerParameterizedBuild$943.prototype[util$940.camelize('condition')] = function (value$972) {
    return util$940.primitiveAccessor.apply(this, [
        'condition',
        value$972
    ]);
};
TriggerParameterizedBuild$943.prototype[util$940.camelize('property-file')] = function (value$973) {
    return util$940.primitiveAccessor.apply(this, [
        'property-file',
        value$973
    ]);
};
TriggerParameterizedBuild$943.prototype[util$940.camelize('fail-on-missing')] = function (value$974) {
    return util$940.primitiveAccessor.apply(this, [
        'fail-on-missing',
        value$974
    ]);
};
TriggerParameterizedBuild$943.prototype[util$940.camelize('trigger-with-no-params')] = function (value$975) {
    return util$940.primitiveAccessor.apply(this, [
        'trigger-with-no-params',
        value$975
    ]);
};
TriggerParameterizedBuild$943.prototype[util$940.camelize('restrict-matrix-project')] = function (value$976) {
    return util$940.primitiveAccessor.apply(this, [
        'restrict-matrix-project',
        value$976
    ]);
};
TriggerParameterizedBuild$943.prototype[util$940.camelize('node-label-name')] = function (value$977) {
    return util$940.primitiveAccessor.apply(this, [
        'node-label-name',
        value$977
    ]);
};
TriggerParameterizedBuild$943.prototype[util$940.camelize('node-label')] = function (value$978) {
    return util$940.primitiveAccessor.apply(this, [
        'node-label',
        value$978
    ]);
};
TriggerParameterizedBuild$943.prototype[util$940.camelize('file-encoding')] = function (value$979) {
    return util$940.primitiveAccessor.apply(this, [
        'file-encoding',
        value$979
    ]);
};
TriggerParameterizedBuild$943.prototype[util$940.camelize('only-exact-matrix-child-runs')] = function (value$980) {
    return util$940.primitiveAccessor.apply(this, [
        'only-exact-matrix-child-runs',
        value$980
    ]);
};
TriggerParameterizedBuild$943.prototype[util$940.camelize('matrix-child-combination-filter')] = function (value$981) {
    return util$940.primitiveAccessor.apply(this, [
        'matrix-child-combination-filter',
        value$981
    ]);
};
TriggerParameterizedBuild$943.prototype[util$940.camelize('use-matrix-child-files')] = function (value$982) {
    return util$940.primitiveAccessor.apply(this, [
        'use-matrix-child-files',
        value$982
    ]);
};
TriggerParameterizedBuild$943.prototype[util$940.camelize('combine-queued-commits')] = function (value$983) {
    return util$940.primitiveAccessor.apply(this, [
        'combine-queued-commits',
        value$983
    ]);
};
TriggerParameterizedBuild$943.prototype[util$940.camelize('include-upstream')] = function (value$984) {
    return util$940.primitiveAccessor.apply(this, [
        'include-upstream',
        value$984
    ]);
};
TriggerParameterizedBuild$943.prototype[util$940.camelize('boolean-parameters')] = function (value$985) {
    return util$940.objectAccessor.apply(this, [
        'boolean-parameters',
        BooleanParameters$942,
        value$985
    ]);
};