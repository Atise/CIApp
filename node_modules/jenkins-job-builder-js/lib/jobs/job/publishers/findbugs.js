'use strict';
var util$940 = require('../../../misc/util.js');
var Thresholds$941 = require('./dry/thresholds.js');
var FindBugs$943 = function (upper$958, obj$959) {
    this.upper = upper$958;
    this.obj = obj$959;
};
FindBugs$943.prototype.up = function () {
    return this.upper;
};
FindBugs$943.prototype.and = FindBugs$943.prototype.up;
module.exports = FindBugs$943;
FindBugs$943.prototype[util$940.camelize('pattern')] = function (value$960) {
    return util$940.primitiveAccessor.apply(this, [
        'pattern',
        value$960
    ]);
};
FindBugs$943.prototype[util$940.camelize('rank-priority')] = function (value$961) {
    return util$940.primitiveAccessor.apply(this, [
        'rank-priority',
        value$961
    ]);
};
FindBugs$943.prototype[util$940.camelize('include-files')] = function (value$962) {
    return util$940.primitiveAccessor.apply(this, [
        'include-files',
        value$962
    ]);
};
FindBugs$943.prototype[util$940.camelize('exclude-files')] = function (value$963) {
    return util$940.primitiveAccessor.apply(this, [
        'exclude-files',
        value$963
    ]);
};
FindBugs$943.prototype[util$940.camelize('can-run-on-failed')] = function (value$964) {
    return util$940.primitiveAccessor.apply(this, [
        'can-run-on-failed',
        value$964
    ]);
};
FindBugs$943.prototype[util$940.camelize('should-detect-modules')] = function (value$965) {
    return util$940.primitiveAccessor.apply(this, [
        'should-detect-modules',
        value$965
    ]);
};
FindBugs$943.prototype[util$940.camelize('healthy')] = function (value$966) {
    return util$940.primitiveAccessor.apply(this, [
        'healthy',
        value$966
    ]);
};
FindBugs$943.prototype[util$940.camelize('unhealthy')] = function (value$967) {
    return util$940.primitiveAccessor.apply(this, [
        'unhealthy',
        value$967
    ]);
};
FindBugs$943.prototype[util$940.camelize('health-threshold')] = function (value$968) {
    return util$940.primitiveAccessor.apply(this, [
        'health-threshold',
        value$968
    ]);
};
FindBugs$943.prototype[util$940.camelize('dont-compute-new')] = function (value$969) {
    return util$940.primitiveAccessor.apply(this, [
        'dont-compute-new',
        value$969
    ]);
};
FindBugs$943.prototype[util$940.camelize('use-delta-values')] = function (value$970) {
    return util$940.primitiveAccessor.apply(this, [
        'use-delta-values',
        value$970
    ]);
};
FindBugs$943.prototype[util$940.camelize('use-previous-build-as-reference')] = function (value$971) {
    return util$940.primitiveAccessor.apply(this, [
        'use-previous-build-as-reference',
        value$971
    ]);
};
FindBugs$943.prototype[util$940.camelize('use-stable-build-as-reference')] = function (value$972) {
    return util$940.primitiveAccessor.apply(this, [
        'use-stable-build-as-reference',
        value$972
    ]);
};
FindBugs$943.prototype[util$940.camelize('thresholds')] = function (value$973) {
    return util$940.objectAccessor.apply(this, [
        'thresholds',
        Thresholds$941,
        value$973
    ]);
};