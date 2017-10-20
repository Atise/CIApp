'use strict';
var util$940 = require('../../misc/util.js');
var String$941 = require('./parameters/value.js');
var Bool$942 = require('./parameters/value.js');
var Choice$943 = require('./parameters/choice.js');
var DynamicChoice$944 = require('./parameters/dynamic.js');
var DynamicChoiceScriptler$945 = require('./parameters/dynamic-scriptler.js');
var DynamicString$946 = require('./parameters/dynamic.js');
var DynamicStringScriptler$947 = require('./parameters/dynamic-scriptler.js');
var ExtendedChoice$948 = require('./parameters/extended-choice.js');
var File$949 = require('./parameters/file.js');
var Label$950 = require('./parameters/value.js');
var MatrixCombinations$951 = require('./parameters/matrix-combinations.js');
var Node$952 = require('./parameters/node.js');
var Password$953 = require('./parameters/value.js');
var Run$954 = require('./parameters/run.js');
var SvnTags$955 = require('./parameters/svn-tags.js');
var Text$956 = require('./parameters/value.js');
var ValidatingString$957 = require('./parameters/validating-string.js');
var CopyArtifactBuildSelector$958 = require('./parameters/copyartifact-build-selector.js');
var Parameters$960 = function (upper$979, array$980) {
    this.upper = upper$979;
    this.array = array$980;
};
Parameters$960.prototype.up = function () {
    return this.upper;
};
Parameters$960.prototype.and = Parameters$960.prototype.up;
module.exports = Parameters$960;
Parameters$960.prototype[util$940.camelize('bool')] = function (value$981) {
    return util$940.keyedObjectElementAccessor.apply(this, [
        'bool',
        Bool$942,
        value$981
    ]);
};
Parameters$960.prototype[util$940.camelize('choice')] = function (value$982) {
    return util$940.keyedObjectElementAccessor.apply(this, [
        'choice',
        Choice$943,
        value$982
    ]);
};
Parameters$960.prototype[util$940.camelize('dynamic-choice')] = function (value$983) {
    return util$940.keyedObjectElementAccessor.apply(this, [
        'dynamic-choice',
        DynamicChoice$944,
        value$983
    ]);
};
Parameters$960.prototype[util$940.camelize('dynamic-choice-scriptler')] = function (value$984) {
    return util$940.keyedObjectElementAccessor.apply(this, [
        'dynamic-choice-scriptler',
        DynamicChoiceScriptler$945,
        value$984
    ]);
};
Parameters$960.prototype[util$940.camelize('dynamic-string')] = function (value$985) {
    return util$940.keyedObjectElementAccessor.apply(this, [
        'dynamic-string',
        DynamicString$946,
        value$985
    ]);
};
Parameters$960.prototype[util$940.camelize('dynamic-string-scriptler')] = function (value$986) {
    return util$940.keyedObjectElementAccessor.apply(this, [
        'dynamic-string-scriptler',
        DynamicStringScriptler$947,
        value$986
    ]);
};
Parameters$960.prototype[util$940.camelize('extended-choice')] = function (value$987) {
    return util$940.keyedObjectElementAccessor.apply(this, [
        'extended-choice',
        ExtendedChoice$948,
        value$987
    ]);
};
Parameters$960.prototype[util$940.camelize('file')] = function (value$988) {
    return util$940.keyedObjectElementAccessor.apply(this, [
        'file',
        File$949,
        value$988
    ]);
};
Parameters$960.prototype[util$940.camelize('label')] = function (value$989) {
    return util$940.keyedObjectElementAccessor.apply(this, [
        'label',
        Label$950,
        value$989
    ]);
};
Parameters$960.prototype[util$940.camelize('matrix-combinations')] = function (value$990) {
    return util$940.keyedObjectElementAccessor.apply(this, [
        'matrix-combinations',
        MatrixCombinations$951,
        value$990
    ]);
};
Parameters$960.prototype[util$940.camelize('node')] = function (value$991) {
    return util$940.keyedObjectElementAccessor.apply(this, [
        'node',
        Node$952,
        value$991
    ]);
};
Parameters$960.prototype[util$940.camelize('password')] = function (value$992) {
    return util$940.keyedObjectElementAccessor.apply(this, [
        'password',
        Password$953,
        value$992
    ]);
};
Parameters$960.prototype[util$940.camelize('run')] = function (value$993) {
    return util$940.keyedObjectElementAccessor.apply(this, [
        'run',
        Run$954,
        value$993
    ]);
};
Parameters$960.prototype[util$940.camelize('string')] = function (value$994) {
    return util$940.keyedObjectElementAccessor.apply(this, [
        'string',
        String$941,
        value$994
    ]);
};
Parameters$960.prototype[util$940.camelize('svn-tags')] = function (value$995) {
    return util$940.keyedObjectElementAccessor.apply(this, [
        'svn-tags',
        SvnTags$955,
        value$995
    ]);
};
Parameters$960.prototype[util$940.camelize('text')] = function (value$996) {
    return util$940.keyedObjectElementAccessor.apply(this, [
        'text',
        Text$956,
        value$996
    ]);
};
Parameters$960.prototype[util$940.camelize('validating-string')] = function (value$997) {
    return util$940.keyedObjectElementAccessor.apply(this, [
        'validating-string',
        ValidatingString$957,
        value$997
    ]);
};
Parameters$960.prototype[util$940.camelize('copyartifact-build-selector')] = function (value$998) {
    return util$940.keyedObjectElementAccessor.apply(this, [
        'copyartifact-build-selector',
        CopyArtifactBuildSelector$958,
        value$998
    ]);
};