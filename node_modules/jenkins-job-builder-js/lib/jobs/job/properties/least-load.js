'use strict';
var util$940 = require('../../../misc/util.js');
var LeastLoad$942 = function (upper$944, obj$945) {
    this.upper = upper$944;
    this.obj = obj$945;
};
LeastLoad$942.prototype.up = function () {
    return this.upper;
};
LeastLoad$942.prototype.and = LeastLoad$942.prototype.up;
module.exports = LeastLoad$942;
LeastLoad$942.prototype[util$940.camelize('disabled')] = function (value$946) {
    return util$940.primitiveAccessor.apply(this, [
        'disabled',
        value$946
    ]);
};