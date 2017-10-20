'use strict';
var util$940 = require('../../../misc/util.js');
var Dynamic$942 = function (upper$949, obj$950) {
    this.upper = upper$949;
    this.obj = obj$950;
};
Dynamic$942.prototype.up = function () {
    return this.upper;
};
Dynamic$942.prototype.and = Dynamic$942.prototype.up;
module.exports = Dynamic$942;
Dynamic$942.prototype[util$940.camelize('name')] = function (value$951) {
    return util$940.primitiveAccessor.apply(this, [
        'name',
        value$951
    ]);
};
Dynamic$942.prototype[util$940.camelize('description')] = function (value$952) {
    return util$940.primitiveAccessor.apply(this, [
        'description',
        value$952
    ]);
};
Dynamic$942.prototype[util$940.camelize('script')] = function (value$953) {
    return util$940.primitiveAccessor.apply(this, [
        'script',
        value$953
    ]);
};
Dynamic$942.prototype[util$940.camelize('remote')] = function (value$954) {
    return util$940.primitiveAccessor.apply(this, [
        'remote',
        value$954
    ]);
};
Dynamic$942.prototype[util$940.camelize('classpath')] = function (value$955) {
    return util$940.primitiveAccessor.apply(this, [
        'classpath',
        value$955
    ]);
};
Dynamic$942.prototype[util$940.camelize('read-only')] = function (value$956) {
    return util$940.primitiveAccessor.apply(this, [
        'read-only',
        value$956
    ]);
};