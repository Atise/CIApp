'use strict';
var util$940 = require('../../../misc/util.js');
var CopyToSlave$942 = function (upper$948, obj$949) {
    this.upper = upper$948;
    this.obj = obj$949;
};
CopyToSlave$942.prototype.up = function () {
    return this.upper;
};
CopyToSlave$942.prototype.and = CopyToSlave$942.prototype.up;
module.exports = CopyToSlave$942;
CopyToSlave$942.prototype[util$940.camelize('includes')] = function (value$950) {
    return util$940.primitiveArrayAccessor.apply(this, [
        'includes',
        value$950
    ]);
};
CopyToSlave$942.prototype[util$940.camelize('excludes')] = function (value$951) {
    return util$940.primitiveArrayAccessor.apply(this, [
        'excludes',
        value$951
    ]);
};
CopyToSlave$942.prototype[util$940.camelize('flatten')] = function (value$952) {
    return util$940.primitiveAccessor.apply(this, [
        'flatten',
        value$952
    ]);
};
CopyToSlave$942.prototype[util$940.camelize('relative-to')] = function (value$953) {
    return util$940.primitiveAccessor.apply(this, [
        'relative-to',
        value$953
    ]);
};
CopyToSlave$942.prototype[util$940.camelize('include-ant-excludes')] = function (value$954) {
    return util$940.primitiveAccessor.apply(this, [
        'include-ant-excludes',
        value$954
    ]);
};