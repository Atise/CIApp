'use strict';
var util$940 = require('../../../../misc/util.js');
var SparseCheckout$942 = function (upper$944, obj$945) {
    this.upper = upper$944;
    this.obj = obj$945;
};
SparseCheckout$942.prototype.up = function () {
    return this.upper;
};
SparseCheckout$942.prototype.and = SparseCheckout$942.prototype.up;
module.exports = SparseCheckout$942;
SparseCheckout$942.prototype[util$940.camelize('paths')] = function (value$946) {
    return util$940.primitiveArrayAccessor.apply(this, [
        'paths',
        value$946
    ]);
};