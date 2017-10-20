'use strict';
var util$940 = require('../../../../misc/util.js');
var Target$942 = function (upper$946, obj$947) {
    this.upper = upper$946;
    this.obj = obj$947;
};
Target$942.prototype.up = function () {
    return this.upper;
};
Target$942.prototype.and = Target$942.prototype.up;
module.exports = Target$942;
Target$942.prototype[util$940.camelize('healthy')] = function (value$948) {
    return util$940.primitiveAccessor.apply(this, [
        'healthy',
        value$948
    ]);
};
Target$942.prototype[util$940.camelize('unhealthy')] = function (value$949) {
    return util$940.primitiveAccessor.apply(this, [
        'unhealthy',
        value$949
    ]);
};
Target$942.prototype[util$940.camelize('failing')] = function (value$950) {
    return util$940.primitiveAccessor.apply(this, [
        'failing',
        value$950
    ]);
};