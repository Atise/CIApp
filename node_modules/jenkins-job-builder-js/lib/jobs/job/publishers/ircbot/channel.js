'use strict';
var util$940 = require('../../../../misc/util.js');
var Channel$942 = function (upper$946, obj$947) {
    this.upper = upper$946;
    this.obj = obj$947;
};
Channel$942.prototype.up = function () {
    return this.upper;
};
Channel$942.prototype.and = Channel$942.prototype.up;
module.exports = Channel$942;
Channel$942.prototype[util$940.camelize('name')] = function (value$948) {
    return util$940.primitiveAccessor.apply(this, [
        'name',
        value$948
    ]);
};
Channel$942.prototype[util$940.camelize('password')] = function (value$949) {
    return util$940.primitiveAccessor.apply(this, [
        'password',
        value$949
    ]);
};
Channel$942.prototype[util$940.camelize('notify-only')] = function (value$950) {
    return util$940.primitiveAccessor.apply(this, [
        'notify-only',
        value$950
    ]);
};