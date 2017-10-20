'use strict';
var util$940 = require('../../../../misc/util.js');
var Target$942 = function (upper$945, obj$946) {
    this.upper = upper$945;
    this.obj = obj$946;
};
Target$942.prototype.up = function () {
    return this.upper;
};
Target$942.prototype.and = Target$942.prototype.up;
module.exports = Target$942;
Target$942.prototype[util$940.camelize('healthy')] = function (value$947) {
    return util$940.primitiveAccessor.apply(this, [
        'healthy',
        value$947
    ]);
};
Target$942.prototype[util$940.camelize('unhealthy')] = function (value$948) {
    return util$940.primitiveAccessor.apply(this, [
        'unhealthy',
        value$948
    ]);
};