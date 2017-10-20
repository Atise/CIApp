'use strict';
var util$940 = require('../../../misc/util.js');
var BuildName$942 = function (upper$944, obj$945) {
    this.upper = upper$944;
    this.obj = obj$945;
};
BuildName$942.prototype.up = function () {
    return this.upper;
};
BuildName$942.prototype.and = BuildName$942.prototype.up;
module.exports = BuildName$942;
BuildName$942.prototype[util$940.camelize('name')] = function (value$946) {
    return util$940.primitiveAccessor.apply(this, [
        'name',
        value$946
    ]);
};