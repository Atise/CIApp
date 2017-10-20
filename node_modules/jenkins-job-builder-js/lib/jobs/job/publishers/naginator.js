'use strict';
var util$940 = require('../../../misc/util.js');
var Naginator$942 = function (upper$949, obj$950) {
    this.upper = upper$949;
    this.obj = obj$950;
};
Naginator$942.prototype.up = function () {
    return this.upper;
};
Naginator$942.prototype.and = Naginator$942.prototype.up;
module.exports = Naginator$942;
Naginator$942.prototype[util$940.camelize('rerun-unstable-builds')] = function (value$951) {
    return util$940.primitiveAccessor.apply(this, [
        'rerun-unstable-builds',
        value$951
    ]);
};
Naginator$942.prototype[util$940.camelize('fixed-delay')] = function (value$952) {
    return util$940.primitiveAccessor.apply(this, [
        'fixed-delay',
        value$952
    ]);
};
Naginator$942.prototype[util$940.camelize('progressive-delay-increment')] = function (value$953) {
    return util$940.primitiveAccessor.apply(this, [
        'progressive-delay-increment',
        value$953
    ]);
};
Naginator$942.prototype[util$940.camelize('progressive-delay-maximum')] = function (value$954) {
    return util$940.primitiveAccessor.apply(this, [
        'progressive-delay-maximum',
        value$954
    ]);
};
Naginator$942.prototype[util$940.camelize('max-failed-builds')] = function (value$955) {
    return util$940.primitiveAccessor.apply(this, [
        'max-failed-builds',
        value$955
    ]);
};
Naginator$942.prototype[util$940.camelize('regular-expression')] = function (value$956) {
    return util$940.primitiveAccessor.apply(this, [
        'regular-expression',
        value$956
    ]);
};