'use strict';
var util$940 = require('../../../../misc/util.js');
var NewThreshold$942 = function (upper$947, obj$948) {
    this.upper = upper$947;
    this.obj = obj$948;
};
NewThreshold$942.prototype.up = function () {
    return this.upper;
};
NewThreshold$942.prototype.and = NewThreshold$942.prototype.up;
module.exports = NewThreshold$942;
NewThreshold$942.prototype[util$940.camelize('new-all')] = function (value$949) {
    return util$940.primitiveAccessor.apply(this, [
        'new-all',
        value$949
    ]);
};
NewThreshold$942.prototype[util$940.camelize('new-high')] = function (value$950) {
    return util$940.primitiveAccessor.apply(this, [
        'new-high',
        value$950
    ]);
};
NewThreshold$942.prototype[util$940.camelize('new-normal')] = function (value$951) {
    return util$940.primitiveAccessor.apply(this, [
        'new-normal',
        value$951
    ]);
};
NewThreshold$942.prototype[util$940.camelize('new-low')] = function (value$952) {
    return util$940.primitiveAccessor.apply(this, [
        'new-low',
        value$952
    ]);
};