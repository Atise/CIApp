'use strict';
var util$940 = require('../../../misc/util.js');
var ValidatingString$942 = function (upper$948, obj$949) {
    this.upper = upper$948;
    this.obj = obj$949;
};
ValidatingString$942.prototype.up = function () {
    return this.upper;
};
ValidatingString$942.prototype.and = ValidatingString$942.prototype.up;
module.exports = ValidatingString$942;
ValidatingString$942.prototype[util$940.camelize('name')] = function (value$950) {
    return util$940.primitiveAccessor.apply(this, [
        'name',
        value$950
    ]);
};
ValidatingString$942.prototype[util$940.camelize('default')] = function (value$951) {
    return util$940.primitiveAccessor.apply(this, [
        'default',
        value$951
    ]);
};
ValidatingString$942.prototype[util$940.camelize('description')] = function (value$952) {
    return util$940.primitiveAccessor.apply(this, [
        'description',
        value$952
    ]);
};
ValidatingString$942.prototype[util$940.camelize('regex')] = function (value$953) {
    return util$940.primitiveAccessor.apply(this, [
        'regex',
        value$953
    ]);
};
ValidatingString$942.prototype[util$940.camelize('msg')] = function (value$954) {
    return util$940.primitiveAccessor.apply(this, [
        'msg',
        value$954
    ]);
};