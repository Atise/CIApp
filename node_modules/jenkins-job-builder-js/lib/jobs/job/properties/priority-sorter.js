'use strict';
var util$940 = require('../../../misc/util.js');
var PrioritySorter$942 = function (upper$944, obj$945) {
    this.upper = upper$944;
    this.obj = obj$945;
};
PrioritySorter$942.prototype.up = function () {
    return this.upper;
};
PrioritySorter$942.prototype.and = PrioritySorter$942.prototype.up;
module.exports = PrioritySorter$942;
PrioritySorter$942.prototype[util$940.camelize('priority')] = function (value$946) {
    return util$940.primitiveAccessor.apply(this, [
        'priority',
        value$946
    ]);
};