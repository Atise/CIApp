'use strict';
var util$940 = require('../../../misc/util.js');
var Axis$942 = function (upper$946, obj$947) {
    this.upper = upper$946;
    this.obj = obj$947;
};
Axis$942.prototype.up = function () {
    return this.upper;
};
Axis$942.prototype.and = Axis$942.prototype.up;
module.exports = Axis$942;
Axis$942.prototype[util$940.camelize('type')] = function (value$948) {
    return util$940.primitiveAccessor.apply(this, [
        'type',
        value$948
    ]);
};
Axis$942.prototype[util$940.camelize('name')] = function (value$949) {
    return util$940.primitiveAccessor.apply(this, [
        'name',
        value$949
    ]);
};
Axis$942.prototype[util$940.camelize('values')] = function (value$950) {
    return util$940.primitiveArrayAccessor.apply(this, [
        'values',
        value$950
    ]);
};