'use strict';
var util$940 = require('../../../../misc/util.js');
var Parameter$942 = function (upper$945, obj$946) {
    this.upper = upper$945;
    this.obj = obj$946;
};
Parameter$942.prototype.up = function () {
    return this.upper;
};
Parameter$942.prototype.and = Parameter$942.prototype.up;
module.exports = Parameter$942;
Parameter$942.prototype[util$940.camelize('name')] = function (value$947) {
    return util$940.primitiveAccessor.apply(this, [
        'name',
        value$947
    ]);
};
Parameter$942.prototype[util$940.camelize('value')] = function (value$948) {
    return util$940.primitiveAccessor.apply(this, [
        'value',
        value$948
    ]);
};