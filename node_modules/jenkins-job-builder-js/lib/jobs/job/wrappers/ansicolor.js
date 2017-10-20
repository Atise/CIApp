'use strict';
var util$940 = require('../../../misc/util.js');
var Ansicolor$942 = function (upper$944, obj$945) {
    this.upper = upper$944;
    this.obj = obj$945;
};
Ansicolor$942.prototype.up = function () {
    return this.upper;
};
Ansicolor$942.prototype.and = Ansicolor$942.prototype.up;
module.exports = Ansicolor$942;
Ansicolor$942.prototype[util$940.camelize('colormap')] = function (value$946) {
    return util$940.primitiveAccessor.apply(this, [
        'colormap',
        value$946
    ]);
};