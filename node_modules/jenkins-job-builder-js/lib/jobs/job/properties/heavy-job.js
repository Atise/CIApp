'use strict';
var util$940 = require('../../../misc/util.js');
var HeavyJob$942 = function (upper$944, obj$945) {
    this.upper = upper$944;
    this.obj = obj$945;
};
HeavyJob$942.prototype.up = function () {
    return this.upper;
};
HeavyJob$942.prototype.and = HeavyJob$942.prototype.up;
module.exports = HeavyJob$942;
HeavyJob$942.prototype[util$940.camelize('weight')] = function (value$946) {
    return util$940.primitiveAccessor.apply(this, [
        'weight',
        value$946
    ]);
};