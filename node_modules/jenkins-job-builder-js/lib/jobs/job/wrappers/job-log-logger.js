'use strict';
var util$940 = require('../../../misc/util.js');
var JobLogLogger$942 = function (upper$944, obj$945) {
    this.upper = upper$944;
    this.obj = obj$945;
};
JobLogLogger$942.prototype.up = function () {
    return this.upper;
};
JobLogLogger$942.prototype.and = JobLogLogger$942.prototype.up;
module.exports = JobLogLogger$942;
JobLogLogger$942.prototype[util$940.camelize('suppress-empty')] = function (value$946) {
    return util$940.primitiveAccessor.apply(this, [
        'suppress-empty',
        value$946
    ]);
};