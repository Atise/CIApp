'use strict';
var util$940 = require('../../../../misc/util.js');
var System$942 = function (upper$947, obj$948) {
    this.upper = upper$947;
    this.obj = obj$948;
};
System$942.prototype.up = function () {
    return this.upper;
};
System$942.prototype.and = System$942.prototype.up;
module.exports = System$942;
System$942.prototype[util$940.camelize('min')] = function (value$949) {
    return util$940.primitiveAccessor.apply(this, [
        'min',
        value$949
    ]);
};
System$942.prototype[util$940.camelize('max')] = function (value$950) {
    return util$940.primitiveAccessor.apply(this, [
        'max',
        value$950
    ]);
};
System$942.prototype[util$940.camelize('unstable')] = function (value$951) {
    return util$940.primitiveAccessor.apply(this, [
        'unstable',
        value$951
    ]);
};
System$942.prototype[util$940.camelize('pattern')] = function (value$952) {
    return util$940.primitiveAccessor.apply(this, [
        'pattern',
        value$952
    ]);
};