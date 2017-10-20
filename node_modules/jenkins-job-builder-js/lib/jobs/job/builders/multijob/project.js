'use strict';
var util$940 = require('../../../../misc/util.js');
var Project$942 = function (upper$954, obj$955) {
    this.upper = upper$954;
    this.obj = obj$955;
};
Project$942.prototype.up = function () {
    return this.upper;
};
Project$942.prototype.and = Project$942.prototype.up;
module.exports = Project$942;
Project$942.prototype[util$940.camelize('name')] = function (value$956) {
    return util$940.primitiveAccessor.apply(this, [
        'name',
        value$956
    ]);
};
Project$942.prototype[util$940.camelize('current-parameters')] = function (value$957) {
    return util$940.primitiveAccessor.apply(this, [
        'current-parameters',
        value$957
    ]);
};
Project$942.prototype[util$940.camelize('node-label-name')] = function (value$958) {
    return util$940.primitiveAccessor.apply(this, [
        'node-label-name',
        value$958
    ]);
};
Project$942.prototype[util$940.camelize('node-label')] = function (value$959) {
    return util$940.primitiveAccessor.apply(this, [
        'node-label',
        value$959
    ]);
};
Project$942.prototype[util$940.camelize('git-revision')] = function (value$960) {
    return util$940.primitiveAccessor.apply(this, [
        'git-revision',
        value$960
    ]);
};
Project$942.prototype[util$940.camelize('property-file')] = function (value$961) {
    return util$940.primitiveAccessor.apply(this, [
        'property-file',
        value$961
    ]);
};
Project$942.prototype[util$940.camelize('predefined-parameters')] = function (value$962) {
    return util$940.primitiveAccessor.apply(this, [
        'predefined-parameters',
        value$962
    ]);
};
Project$942.prototype[util$940.camelize('abort-all-job')] = function (value$963) {
    return util$940.primitiveAccessor.apply(this, [
        'abort-all-job',
        value$963
    ]);
};
Project$942.prototype[util$940.camelize('enable-condition')] = function (value$964) {
    return util$940.primitiveAccessor.apply(this, [
        'enable-condition',
        value$964
    ]);
};
Project$942.prototype[util$940.camelize('kill-phase-on')] = function (value$965) {
    return util$940.primitiveAccessor.apply(this, [
        'kill-phase-on',
        value$965
    ]);
};
Project$942.prototype[util$940.camelize('restrict-matrix-project')] = function (value$966) {
    return util$940.primitiveAccessor.apply(this, [
        'restrict-matrix-project',
        value$966
    ]);
};