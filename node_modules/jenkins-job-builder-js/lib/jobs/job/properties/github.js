'use strict';
var util$940 = require('../../../misc/util.js');
var Github$942 = function (upper$944, obj$945) {
    this.upper = upper$944;
    this.obj = obj$945;
};
Github$942.prototype.up = function () {
    return this.upper;
};
Github$942.prototype.and = Github$942.prototype.up;
module.exports = Github$942;
Github$942.prototype[util$940.camelize('url')] = function (value$946) {
    return util$940.primitiveAccessor.apply(this, [
        'url',
        value$946
    ]);
};