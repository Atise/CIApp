'use strict';
var util$940 = require('../../../misc/util.js');
var Choice$942 = function (upper$946, obj$947) {
    this.upper = upper$946;
    this.obj = obj$947;
};
Choice$942.prototype.up = function () {
    return this.upper;
};
Choice$942.prototype.and = Choice$942.prototype.up;
module.exports = Choice$942;
Choice$942.prototype[util$940.camelize('name')] = function (value$948) {
    return util$940.primitiveAccessor.apply(this, [
        'name',
        value$948
    ]);
};
Choice$942.prototype[util$940.camelize('choices')] = function (value$949) {
    return util$940.primitiveArrayAccessor.apply(this, [
        'choices',
        value$949
    ]);
};
Choice$942.prototype[util$940.camelize('description')] = function (value$950) {
    return util$940.primitiveAccessor.apply(this, [
        'description',
        value$950
    ]);
};