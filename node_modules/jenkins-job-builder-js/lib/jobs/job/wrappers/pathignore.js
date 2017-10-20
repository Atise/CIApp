'use strict';
var util$940 = require('../../../misc/util.js');
var PathIgnore$942 = function (upper$944, obj$945) {
    this.upper = upper$944;
    this.obj = obj$945;
};
PathIgnore$942.prototype.up = function () {
    return this.upper;
};
PathIgnore$942.prototype.and = PathIgnore$942.prototype.up;
module.exports = PathIgnore$942;
PathIgnore$942.prototype[util$940.camelize('ignored')] = function (value$946) {
    return util$940.primitiveAccessor.apply(this, [
        'ignored',
        value$946
    ]);
};