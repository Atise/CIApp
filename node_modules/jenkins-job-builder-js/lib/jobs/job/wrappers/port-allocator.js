'use strict';
var util$940 = require('../../../misc/util.js');
var PortAllocator$942 = function (upper$944, obj$945) {
    this.upper = upper$944;
    this.obj = obj$945;
};
PortAllocator$942.prototype.up = function () {
    return this.upper;
};
PortAllocator$942.prototype.and = PortAllocator$942.prototype.up;
module.exports = PortAllocator$942;
PortAllocator$942.prototype[util$940.camelize('names')] = function (value$946) {
    return util$940.primitiveArrayAccessor.apply(this, [
        'names',
        value$946
    ]);
};