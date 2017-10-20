'use strict';
var util$940 = require('../../../misc/util.js');
var Fitnesse$942 = function (upper$944, obj$945) {
    this.upper = upper$944;
    this.obj = obj$945;
};
Fitnesse$942.prototype.up = function () {
    return this.upper;
};
Fitnesse$942.prototype.and = Fitnesse$942.prototype.up;
module.exports = Fitnesse$942;
Fitnesse$942.prototype[util$940.camelize('results')] = function (value$946) {
    return util$940.primitiveAccessor.apply(this, [
        'results',
        value$946
    ]);
};