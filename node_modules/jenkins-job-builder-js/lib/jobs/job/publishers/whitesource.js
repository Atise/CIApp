'use strict';
var util$940 = require('../../../misc/util.js');
var Whitesource$942 = function (upper$950, obj$951) {
    this.upper = upper$950;
    this.obj = obj$951;
};
Whitesource$942.prototype.up = function () {
    return this.upper;
};
Whitesource$942.prototype.and = Whitesource$942.prototype.up;
module.exports = Whitesource$942;
Whitesource$942.prototype[util$940.camelize('product-token')] = function (value$952) {
    return util$940.primitiveAccessor.apply(this, [
        'product-token',
        value$952
    ]);
};
Whitesource$942.prototype[util$940.camelize('version')] = function (value$953) {
    return util$940.primitiveAccessor.apply(this, [
        'version',
        value$953
    ]);
};
Whitesource$942.prototype[util$940.camelize('override-token')] = function (value$954) {
    return util$940.primitiveAccessor.apply(this, [
        'override-token',
        value$954
    ]);
};
Whitesource$942.prototype[util$940.camelize('project-token')] = function (value$955) {
    return util$940.primitiveAccessor.apply(this, [
        'project-token',
        value$955
    ]);
};
Whitesource$942.prototype[util$940.camelize('policies')] = function (value$956) {
    return util$940.primitiveAccessor.apply(this, [
        'policies',
        value$956
    ]);
};
Whitesource$942.prototype[util$940.camelize('includes')] = function (value$957) {
    return util$940.primitiveArrayAccessor.apply(this, [
        'includes',
        value$957
    ]);
};
Whitesource$942.prototype[util$940.camelize('excludes')] = function (value$958) {
    return util$940.primitiveArrayAccessor.apply(this, [
        'excludes',
        value$958
    ]);
};