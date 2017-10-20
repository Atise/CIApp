'use strict';
var util$940 = require('../../../../../misc/util.js');
var Topic$942 = function (upper$945, obj$946) {
    this.upper = upper$945;
    this.obj = obj$946;
};
Topic$942.prototype.up = function () {
    return this.upper;
};
Topic$942.prototype.and = Topic$942.prototype.up;
module.exports = Topic$942;
Topic$942.prototype[util$940.camelize('compare-type')] = function (value$947) {
    return util$940.primitiveAccessor.apply(this, [
        'compare-type',
        value$947
    ]);
};
Topic$942.prototype[util$940.camelize('pattern')] = function (value$948) {
    return util$940.primitiveAccessor.apply(this, [
        'pattern',
        value$948
    ]);
};