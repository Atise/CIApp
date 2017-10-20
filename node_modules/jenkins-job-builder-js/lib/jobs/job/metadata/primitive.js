'use strict';
var util$940 = require('../../../misc/util.js');
var Primitive$942 = function (upper$946, obj$947) {
    this.upper = upper$946;
    this.obj = obj$947;
};
Primitive$942.prototype.up = function () {
    return this.upper;
};
Primitive$942.prototype.and = Primitive$942.prototype.up;
module.exports = Primitive$942;
Primitive$942.prototype[util$940.camelize('name')] = function (value$948) {
    return util$940.primitiveAccessor.apply(this, [
        'name',
        value$948
    ]);
};
Primitive$942.prototype[util$940.camelize('value')] = function (value$949) {
    return util$940.primitiveAccessor.apply(this, [
        'value',
        value$949
    ]);
};
Primitive$942.prototype[util$940.camelize('expose-to-env')] = function (value$950) {
    return util$940.primitiveAccessor.apply(this, [
        'expose-to-env',
        value$950
    ]);
};