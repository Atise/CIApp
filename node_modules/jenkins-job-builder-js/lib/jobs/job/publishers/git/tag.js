'use strict';
var util$940 = require('../../../../misc/util.js');
var Tag$942 = function (upper$948, obj$949) {
    this.upper = upper$948;
    this.obj = obj$949;
};
Tag$942.prototype.up = function () {
    return this.upper;
};
Tag$942.prototype.and = Tag$942.prototype.up;
module.exports = Tag$942;
Tag$942.prototype[util$940.camelize('remote')] = function (value$950) {
    return util$940.primitiveAccessor.apply(this, [
        'remote',
        value$950
    ]);
};
Tag$942.prototype[util$940.camelize('name')] = function (value$951) {
    return util$940.primitiveAccessor.apply(this, [
        'name',
        value$951
    ]);
};
Tag$942.prototype[util$940.camelize('message')] = function (value$952) {
    return util$940.primitiveAccessor.apply(this, [
        'message',
        value$952
    ]);
};
Tag$942.prototype[util$940.camelize('create-tag')] = function (value$953) {
    return util$940.primitiveAccessor.apply(this, [
        'create-tag',
        value$953
    ]);
};
Tag$942.prototype[util$940.camelize('update-tag')] = function (value$954) {
    return util$940.primitiveAccessor.apply(this, [
        'update-tag',
        value$954
    ]);
};