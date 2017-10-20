'use strict';
var util$940 = require('../../../../misc/util.js');
var BlockThresholds$942 = function (upper$946, obj$947) {
    this.upper = upper$946;
    this.obj = obj$947;
};
BlockThresholds$942.prototype.up = function () {
    return this.upper;
};
BlockThresholds$942.prototype.and = BlockThresholds$942.prototype.up;
module.exports = BlockThresholds$942;
BlockThresholds$942.prototype[util$940.camelize('build-step-failure-threshold')] = function (value$948) {
    return util$940.primitiveAccessor.apply(this, [
        'build-step-failure-threshold',
        value$948
    ]);
};
BlockThresholds$942.prototype[util$940.camelize('unstable-threshold')] = function (value$949) {
    return util$940.primitiveAccessor.apply(this, [
        'unstable-threshold',
        value$949
    ]);
};
BlockThresholds$942.prototype[util$940.camelize('failure-threshold')] = function (value$950) {
    return util$940.primitiveAccessor.apply(this, [
        'failure-threshold',
        value$950
    ]);
};