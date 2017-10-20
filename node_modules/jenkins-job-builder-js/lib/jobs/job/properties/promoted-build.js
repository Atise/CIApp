'use strict';
var util$940 = require('../../../misc/util.js');
var PromotedBuild$942 = function (upper$944, obj$945) {
    this.upper = upper$944;
    this.obj = obj$945;
};
PromotedBuild$942.prototype.up = function () {
    return this.upper;
};
PromotedBuild$942.prototype.and = PromotedBuild$942.prototype.up;
module.exports = PromotedBuild$942;
PromotedBuild$942.prototype[util$940.camelize('names')] = function (value$946) {
    return util$940.primitiveArrayAccessor.apply(this, [
        'names',
        value$946
    ]);
};