'use strict';
var util$940 = require('../../../misc/util.js');
var Thresholds$941 = require('./xunit/thresholds.js');
var Types$942 = require('./xunit/types.js');
var Xunit$944 = function (upper$949, obj$950) {
    this.upper = upper$949;
    this.obj = obj$950;
};
Xunit$944.prototype.up = function () {
    return this.upper;
};
Xunit$944.prototype.and = Xunit$944.prototype.up;
module.exports = Xunit$944;
Xunit$944.prototype[util$940.camelize('thresholdmode')] = function (value$951) {
    return util$940.primitiveAccessor.apply(this, [
        'thresholdmode',
        value$951
    ]);
};
Xunit$944.prototype[util$940.camelize('thresholds')] = function (value$952) {
    return util$940.customArrayAccessor.apply(this, [
        'thresholds',
        Thresholds$941,
        value$952
    ]);
};
Xunit$944.prototype[util$940.camelize('test-time-margin')] = function (value$953) {
    return util$940.primitiveAccessor.apply(this, [
        'test-time-margin',
        value$953
    ]);
};
Xunit$944.prototype[util$940.camelize('types')] = function (value$954) {
    return util$940.customArrayAccessor.apply(this, [
        'types',
        Types$942,
        value$954
    ]);
};