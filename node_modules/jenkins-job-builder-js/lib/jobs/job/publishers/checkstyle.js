'use strict';
var util$940 = require('../../../misc/util.js');
var Thresholds$941 = require('./dry/thresholds.js');
var CheckStyle$943 = function (upper$956, obj$957) {
    this.upper = upper$956;
    this.obj = obj$957;
};
CheckStyle$943.prototype.up = function () {
    return this.upper;
};
CheckStyle$943.prototype.and = CheckStyle$943.prototype.up;
module.exports = CheckStyle$943;
CheckStyle$943.prototype[util$940.camelize('pattern')] = function (value$958) {
    return util$940.primitiveAccessor.apply(this, [
        'pattern',
        value$958
    ]);
};
CheckStyle$943.prototype[util$940.camelize('can-run-on-failed')] = function (value$959) {
    return util$940.primitiveAccessor.apply(this, [
        'can-run-on-failed',
        value$959
    ]);
};
CheckStyle$943.prototype[util$940.camelize('should-detect-modules')] = function (value$960) {
    return util$940.primitiveAccessor.apply(this, [
        'should-detect-modules',
        value$960
    ]);
};
CheckStyle$943.prototype[util$940.camelize('healthy')] = function (value$961) {
    return util$940.primitiveAccessor.apply(this, [
        'healthy',
        value$961
    ]);
};
CheckStyle$943.prototype[util$940.camelize('unhealthy')] = function (value$962) {
    return util$940.primitiveAccessor.apply(this, [
        'unhealthy',
        value$962
    ]);
};
CheckStyle$943.prototype[util$940.camelize('health-threshold')] = function (value$963) {
    return util$940.primitiveAccessor.apply(this, [
        'health-threshold',
        value$963
    ]);
};
CheckStyle$943.prototype[util$940.camelize('thresholds')] = function (value$964) {
    return util$940.objectAccessor.apply(this, [
        'thresholds',
        Thresholds$941,
        value$964
    ]);
};
CheckStyle$943.prototype[util$940.camelize('default-encoding')] = function (value$965) {
    return util$940.primitiveAccessor.apply(this, [
        'default-encoding',
        value$965
    ]);
};
CheckStyle$943.prototype[util$940.camelize('do-not-resolve-relative-paths')] = function (value$966) {
    return util$940.primitiveAccessor.apply(this, [
        'do-not-resolve-relative-paths',
        value$966
    ]);
};
CheckStyle$943.prototype[util$940.camelize('dont-compute-new')] = function (value$967) {
    return util$940.primitiveAccessor.apply(this, [
        'dont-compute-new',
        value$967
    ]);
};
CheckStyle$943.prototype[util$940.camelize('use-stable-build-as-reference')] = function (value$968) {
    return util$940.primitiveAccessor.apply(this, [
        'use-stable-build-as-reference',
        value$968
    ]);
};
CheckStyle$943.prototype[util$940.camelize('use-delta-values')] = function (value$969) {
    return util$940.primitiveAccessor.apply(this, [
        'use-delta-values',
        value$969
    ]);
};