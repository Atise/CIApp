'use strict';
var util$940 = require('../../../misc/util.js');
var RvmEnv$942 = function (upper$944, obj$945) {
    this.upper = upper$944;
    this.obj = obj$945;
};
RvmEnv$942.prototype.up = function () {
    return this.upper;
};
RvmEnv$942.prototype.and = RvmEnv$942.prototype.up;
module.exports = RvmEnv$942;
RvmEnv$942.prototype[util$940.camelize('implementation')] = function (value$946) {
    return util$940.primitiveAccessor.apply(this, [
        'implementation',
        value$946
    ]);
};