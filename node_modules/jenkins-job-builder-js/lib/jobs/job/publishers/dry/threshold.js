'use strict';
var util$940 = require('../../../../misc/util.js');
var Threshold$942 = function (upper$951, obj$952) {
    this.upper = upper$951;
    this.obj = obj$952;
};
Threshold$942.prototype.up = function () {
    return this.upper;
};
Threshold$942.prototype.and = Threshold$942.prototype.up;
module.exports = Threshold$942;
Threshold$942.prototype[util$940.camelize('total-all')] = function (value$953) {
    return util$940.primitiveAccessor.apply(this, [
        'total-all',
        value$953
    ]);
};
Threshold$942.prototype[util$940.camelize('total-high')] = function (value$954) {
    return util$940.primitiveAccessor.apply(this, [
        'total-high',
        value$954
    ]);
};
Threshold$942.prototype[util$940.camelize('total-normal')] = function (value$955) {
    return util$940.primitiveAccessor.apply(this, [
        'total-normal',
        value$955
    ]);
};
Threshold$942.prototype[util$940.camelize('total-low')] = function (value$956) {
    return util$940.primitiveAccessor.apply(this, [
        'total-low',
        value$956
    ]);
};
Threshold$942.prototype[util$940.camelize('new-all')] = function (value$957) {
    return util$940.primitiveAccessor.apply(this, [
        'new-all',
        value$957
    ]);
};
Threshold$942.prototype[util$940.camelize('new-high')] = function (value$958) {
    return util$940.primitiveAccessor.apply(this, [
        'new-high',
        value$958
    ]);
};
Threshold$942.prototype[util$940.camelize('new-normal')] = function (value$959) {
    return util$940.primitiveAccessor.apply(this, [
        'new-normal',
        value$959
    ]);
};
Threshold$942.prototype[util$940.camelize('new-low')] = function (value$960) {
    return util$940.primitiveAccessor.apply(this, [
        'new-low',
        value$960
    ]);
};