'use strict';
var util$940 = require('../../../misc/util.js');
var SkipGlobalTriggers$941 = require('./sonar/skip-global-triggers.js');
var Sonar$943 = function (upper$950, obj$951) {
    this.upper = upper$950;
    this.obj = obj$951;
};
Sonar$943.prototype.up = function () {
    return this.upper;
};
Sonar$943.prototype.and = Sonar$943.prototype.up;
module.exports = Sonar$943;
Sonar$943.prototype[util$940.camelize('jdk')] = function (value$952) {
    return util$940.primitiveAccessor.apply(this, [
        'jdk',
        value$952
    ]);
};
Sonar$943.prototype[util$940.camelize('branch')] = function (value$953) {
    return util$940.primitiveAccessor.apply(this, [
        'branch',
        value$953
    ]);
};
Sonar$943.prototype[util$940.camelize('language')] = function (value$954) {
    return util$940.primitiveAccessor.apply(this, [
        'language',
        value$954
    ]);
};
Sonar$943.prototype[util$940.camelize('maven-opts')] = function (value$955) {
    return util$940.primitiveAccessor.apply(this, [
        'maven-opts',
        value$955
    ]);
};
Sonar$943.prototype[util$940.camelize('additional-properties')] = function (value$956) {
    return util$940.primitiveAccessor.apply(this, [
        'additional-properties',
        value$956
    ]);
};
Sonar$943.prototype[util$940.camelize('skip-global-triggers')] = function (value$957) {
    return util$940.objectAccessor.apply(this, [
        'skip-global-triggers',
        SkipGlobalTriggers$941,
        value$957
    ]);
};