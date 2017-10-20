'use strict';
var util$940 = require('../../../misc/util.js');
var Throttle$942 = function (upper$948, obj$949) {
    this.upper = upper$948;
    this.obj = obj$949;
};
Throttle$942.prototype.up = function () {
    return this.upper;
};
Throttle$942.prototype.and = Throttle$942.prototype.up;
module.exports = Throttle$942;
Throttle$942.prototype[util$940.camelize('max-per-node')] = function (value$950) {
    return util$940.primitiveAccessor.apply(this, [
        'max-per-node',
        value$950
    ]);
};
Throttle$942.prototype[util$940.camelize('max-total')] = function (value$951) {
    return util$940.primitiveAccessor.apply(this, [
        'max-total',
        value$951
    ]);
};
Throttle$942.prototype[util$940.camelize('enabled')] = function (value$952) {
    return util$940.primitiveAccessor.apply(this, [
        'enabled',
        value$952
    ]);
};
Throttle$942.prototype[util$940.camelize('option')] = function (value$953) {
    return util$940.primitiveAccessor.apply(this, [
        'option',
        value$953
    ]);
};
Throttle$942.prototype[util$940.camelize('categories')] = function (value$954) {
    return util$940.primitiveArrayAccessor.apply(this, [
        'categories',
        value$954
    ]);
};