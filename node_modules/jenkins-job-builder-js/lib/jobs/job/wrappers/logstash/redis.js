'use strict';
var util$940 = require('../../../../misc/util.js');
var Redis$942 = function (upper$949, obj$950) {
    this.upper = upper$949;
    this.obj = obj$950;
};
Redis$942.prototype.up = function () {
    return this.upper;
};
Redis$942.prototype.and = Redis$942.prototype.up;
module.exports = Redis$942;
Redis$942.prototype[util$940.camelize('host')] = function (value$951) {
    return util$940.primitiveAccessor.apply(this, [
        'host',
        value$951
    ]);
};
Redis$942.prototype[util$940.camelize('port')] = function (value$952) {
    return util$940.primitiveAccessor.apply(this, [
        'port',
        value$952
    ]);
};
Redis$942.prototype[util$940.camelize('database-number')] = function (value$953) {
    return util$940.primitiveAccessor.apply(this, [
        'database-number',
        value$953
    ]);
};
Redis$942.prototype[util$940.camelize('database-password')] = function (value$954) {
    return util$940.primitiveAccessor.apply(this, [
        'database-password',
        value$954
    ]);
};
Redis$942.prototype[util$940.camelize('data-type')] = function (value$955) {
    return util$940.primitiveAccessor.apply(this, [
        'data-type',
        value$955
    ]);
};
Redis$942.prototype[util$940.camelize('key')] = function (value$956) {
    return util$940.primitiveAccessor.apply(this, [
        'key',
        value$956
    ]);
};