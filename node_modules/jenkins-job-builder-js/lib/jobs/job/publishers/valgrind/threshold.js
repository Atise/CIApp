'use strict';
var util$940 = require('../../../../misc/util.js');
var Threshold$942 = function (upper$946, obj$947) {
    this.upper = upper$946;
    this.obj = obj$947;
};
Threshold$942.prototype.up = function () {
    return this.upper;
};
Threshold$942.prototype.and = Threshold$942.prototype.up;
module.exports = Threshold$942;
Threshold$942.prototype[util$940.camelize('invalid-read-write')] = function (value$948) {
    return util$940.primitiveAccessor.apply(this, [
        'invalid-read-write',
        value$948
    ]);
};
Threshold$942.prototype[util$940.camelize('definitely-lost')] = function (value$949) {
    return util$940.primitiveAccessor.apply(this, [
        'definitely-lost',
        value$949
    ]);
};
Threshold$942.prototype[util$940.camelize('total')] = function (value$950) {
    return util$940.primitiveAccessor.apply(this, [
        'total',
        value$950
    ]);
};