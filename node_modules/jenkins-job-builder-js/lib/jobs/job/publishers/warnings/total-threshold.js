'use strict';
var util$940 = require('../../../../misc/util.js');
var TotalThreshold$942 = function (upper$947, obj$948) {
    this.upper = upper$947;
    this.obj = obj$948;
};
TotalThreshold$942.prototype.up = function () {
    return this.upper;
};
TotalThreshold$942.prototype.and = TotalThreshold$942.prototype.up;
module.exports = TotalThreshold$942;
TotalThreshold$942.prototype[util$940.camelize('total-all')] = function (value$949) {
    return util$940.primitiveAccessor.apply(this, [
        'total-all',
        value$949
    ]);
};
TotalThreshold$942.prototype[util$940.camelize('total-high')] = function (value$950) {
    return util$940.primitiveAccessor.apply(this, [
        'total-high',
        value$950
    ]);
};
TotalThreshold$942.prototype[util$940.camelize('total-normal')] = function (value$951) {
    return util$940.primitiveAccessor.apply(this, [
        'total-normal',
        value$951
    ]);
};
TotalThreshold$942.prototype[util$940.camelize('total-low')] = function (value$952) {
    return util$940.primitiveAccessor.apply(this, [
        'total-low',
        value$952
    ]);
};