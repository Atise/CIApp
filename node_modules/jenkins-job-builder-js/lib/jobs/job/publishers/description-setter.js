'use strict';
var util$940 = require('../../../misc/util.js');
var DescriptionSetter$942 = function (upper$948, obj$949) {
    this.upper = upper$948;
    this.obj = obj$949;
};
DescriptionSetter$942.prototype.up = function () {
    return this.upper;
};
DescriptionSetter$942.prototype.and = DescriptionSetter$942.prototype.up;
module.exports = DescriptionSetter$942;
DescriptionSetter$942.prototype[util$940.camelize('regexp')] = function (value$950) {
    return util$940.primitiveAccessor.apply(this, [
        'regexp',
        value$950
    ]);
};
DescriptionSetter$942.prototype[util$940.camelize('regexp-for-failed')] = function (value$951) {
    return util$940.primitiveAccessor.apply(this, [
        'regexp-for-failed',
        value$951
    ]);
};
DescriptionSetter$942.prototype[util$940.camelize('description')] = function (value$952) {
    return util$940.primitiveAccessor.apply(this, [
        'description',
        value$952
    ]);
};
DescriptionSetter$942.prototype[util$940.camelize('description-for-failed')] = function (value$953) {
    return util$940.primitiveAccessor.apply(this, [
        'description-for-failed',
        value$953
    ]);
};
DescriptionSetter$942.prototype[util$940.camelize('set-for-matrix')] = function (value$954) {
    return util$940.primitiveAccessor.apply(this, [
        'set-for-matrix',
        value$954
    ]);
};