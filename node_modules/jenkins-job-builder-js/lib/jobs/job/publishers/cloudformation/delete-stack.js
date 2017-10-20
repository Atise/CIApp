'use strict';
var util$940 = require('../../../../misc/util.js');
var DeleteStack$942 = function (upper$948, obj$949) {
    this.upper = upper$948;
    this.obj = obj$949;
};
DeleteStack$942.prototype.up = function () {
    return this.upper;
};
DeleteStack$942.prototype.and = DeleteStack$942.prototype.up;
module.exports = DeleteStack$942;
DeleteStack$942.prototype[util$940.camelize('name')] = function (value$950) {
    return util$940.primitiveArrayAccessor.apply(this, [
        'name',
        value$950
    ]);
};
DeleteStack$942.prototype[util$940.camelize('access-key')] = function (value$951) {
    return util$940.primitiveAccessor.apply(this, [
        'access-key',
        value$951
    ]);
};
DeleteStack$942.prototype[util$940.camelize('secret-key')] = function (value$952) {
    return util$940.primitiveAccessor.apply(this, [
        'secret-key',
        value$952
    ]);
};
DeleteStack$942.prototype[util$940.camelize('prefix')] = function (value$953) {
    return util$940.primitiveAccessor.apply(this, [
        'prefix',
        value$953
    ]);
};
DeleteStack$942.prototype[util$940.camelize('region')] = function (value$954) {
    return util$940.primitiveAccessor.apply(this, [
        'region',
        value$954
    ]);
};