'use strict';
var util$940 = require('../../../../misc/util.js');
var Site$942 = function (upper$944, obj$945) {
    this.upper = upper$944;
    this.obj = obj$945;
};
Site$942.prototype.up = function () {
    return this.upper;
};
Site$942.prototype.and = Site$942.prototype.up;
module.exports = Site$942;
Site$942.prototype[util$940.camelize('url')] = function (value$946) {
    return util$940.primitiveAccessor.apply(this, [
        'url',
        value$946
    ]);
};