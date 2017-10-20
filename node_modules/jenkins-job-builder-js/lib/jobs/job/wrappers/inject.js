'use strict';
var util$940 = require('../../../misc/util.js');
var Inject$942 = function (upper$947, obj$948) {
    this.upper = upper$947;
    this.obj = obj$948;
};
Inject$942.prototype.up = function () {
    return this.upper;
};
Inject$942.prototype.and = Inject$942.prototype.up;
module.exports = Inject$942;
Inject$942.prototype[util$940.camelize('properties-file')] = function (value$949) {
    return util$940.primitiveAccessor.apply(this, [
        'properties-file',
        value$949
    ]);
};
Inject$942.prototype[util$940.camelize('properties-content')] = function (value$950) {
    return util$940.primitiveAccessor.apply(this, [
        'properties-content',
        value$950
    ]);
};
Inject$942.prototype[util$940.camelize('script-file')] = function (value$951) {
    return util$940.primitiveAccessor.apply(this, [
        'script-file',
        value$951
    ]);
};
Inject$942.prototype[util$940.camelize('script-content')] = function (value$952) {
    return util$940.primitiveAccessor.apply(this, [
        'script-content',
        value$952
    ]);
};