'use strict';
var util$940 = require('../../../misc/util.js');
var Thresholds$941 = require('./dry/thresholds.js');
var Dry$943 = function (upper$958, obj$959) {
    this.upper = upper$958;
    this.obj = obj$959;
};
Dry$943.prototype.up = function () {
    return this.upper;
};
Dry$943.prototype.and = Dry$943.prototype.up;
module.exports = Dry$943;
Dry$943.prototype[util$940.camelize('pattern')] = function (value$960) {
    return util$940.primitiveAccessor.apply(this, [
        'pattern',
        value$960
    ]);
};
Dry$943.prototype[util$940.camelize('can-run-on-failed')] = function (value$961) {
    return util$940.primitiveAccessor.apply(this, [
        'can-run-on-failed',
        value$961
    ]);
};
Dry$943.prototype[util$940.camelize('should-detect-modules')] = function (value$962) {
    return util$940.primitiveAccessor.apply(this, [
        'should-detect-modules',
        value$962
    ]);
};
Dry$943.prototype[util$940.camelize('healthy')] = function (value$963) {
    return util$940.primitiveAccessor.apply(this, [
        'healthy',
        value$963
    ]);
};
Dry$943.prototype[util$940.camelize('unhealthy')] = function (value$964) {
    return util$940.primitiveAccessor.apply(this, [
        'unhealthy',
        value$964
    ]);
};
Dry$943.prototype[util$940.camelize('health-threshold')] = function (value$965) {
    return util$940.primitiveAccessor.apply(this, [
        'health-threshold',
        value$965
    ]);
};
Dry$943.prototype[util$940.camelize('high-threshold')] = function (value$966) {
    return util$940.primitiveAccessor.apply(this, [
        'high-threshold',
        value$966
    ]);
};
Dry$943.prototype[util$940.camelize('normal-threshold')] = function (value$967) {
    return util$940.primitiveAccessor.apply(this, [
        'normal-threshold',
        value$967
    ]);
};
Dry$943.prototype[util$940.camelize('thresholds')] = function (value$968) {
    return util$940.objectAccessor.apply(this, [
        'thresholds',
        Thresholds$941,
        value$968
    ]);
};
Dry$943.prototype[util$940.camelize('default-encoding')] = function (value$969) {
    return util$940.primitiveAccessor.apply(this, [
        'default-encoding',
        value$969
    ]);
};
Dry$943.prototype[util$940.camelize('do-not-resolve-relative-paths')] = function (value$970) {
    return util$940.primitiveAccessor.apply(this, [
        'do-not-resolve-relative-paths',
        value$970
    ]);
};
Dry$943.prototype[util$940.camelize('dont-compute-new')] = function (value$971) {
    return util$940.primitiveAccessor.apply(this, [
        'dont-compute-new',
        value$971
    ]);
};
Dry$943.prototype[util$940.camelize('use-stable-build-as-reference')] = function (value$972) {
    return util$940.primitiveAccessor.apply(this, [
        'use-stable-build-as-reference',
        value$972
    ]);
};
Dry$943.prototype[util$940.camelize('use-delta-values')] = function (value$973) {
    return util$940.primitiveAccessor.apply(this, [
        'use-delta-values',
        value$973
    ]);
};