'use strict';
var util$940 = require('../../../misc/util.js');
var Exclusion$942 = function (upper$944, obj$945) {
    this.upper = upper$944;
    this.obj = obj$945;
};
Exclusion$942.prototype.up = function () {
    return this.upper;
};
Exclusion$942.prototype.and = Exclusion$942.prototype.up;
module.exports = Exclusion$942;
Exclusion$942.prototype[util$940.camelize('resources')] = function (value$946) {
    return util$940.primitiveArrayAccessor.apply(this, [
        'resources',
        value$946
    ]);
};