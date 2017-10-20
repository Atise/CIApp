'use strict';
var util$940 = require('../../../misc/util.js');
var Targets$941 = require('./jacoco/targets.js');
var Jacoco$943 = function (upper$951, obj$952) {
    this.upper = upper$951;
    this.obj = obj$952;
};
Jacoco$943.prototype.up = function () {
    return this.upper;
};
Jacoco$943.prototype.and = Jacoco$943.prototype.up;
module.exports = Jacoco$943;
Jacoco$943.prototype[util$940.camelize('exec-pattern')] = function (value$953) {
    return util$940.primitiveAccessor.apply(this, [
        'exec-pattern',
        value$953
    ]);
};
Jacoco$943.prototype[util$940.camelize('class-pattern')] = function (value$954) {
    return util$940.primitiveAccessor.apply(this, [
        'class-pattern',
        value$954
    ]);
};
Jacoco$943.prototype[util$940.camelize('source-pattern')] = function (value$955) {
    return util$940.primitiveAccessor.apply(this, [
        'source-pattern',
        value$955
    ]);
};
Jacoco$943.prototype[util$940.camelize('update-build-status')] = function (value$956) {
    return util$940.primitiveAccessor.apply(this, [
        'update-build-status',
        value$956
    ]);
};
Jacoco$943.prototype[util$940.camelize('inclusion-pattern')] = function (value$957) {
    return util$940.primitiveAccessor.apply(this, [
        'inclusion-pattern',
        value$957
    ]);
};
Jacoco$943.prototype[util$940.camelize('exclusion-pattern')] = function (value$958) {
    return util$940.primitiveAccessor.apply(this, [
        'exclusion-pattern',
        value$958
    ]);
};
Jacoco$943.prototype[util$940.camelize('targets')] = function (value$959) {
    return util$940.customArrayAccessor.apply(this, [
        'targets',
        Targets$941,
        value$959
    ]);
};