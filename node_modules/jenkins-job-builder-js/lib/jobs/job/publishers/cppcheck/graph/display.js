'use strict';
var util$940 = require('../../../../../misc/util.js');
var Display$942 = function (upper$945, obj$946) {
    this.upper = upper$945;
    this.obj = obj$946;
};
Display$942.prototype.up = function () {
    return this.upper;
};
Display$942.prototype.and = Display$942.prototype.up;
module.exports = Display$942;
Display$942.prototype[util$940.camelize('sum')] = function (value$947) {
    return util$940.primitiveAccessor.apply(this, [
        'sum',
        value$947
    ]);
};
Display$942.prototype[util$940.camelize('error')] = function (value$948) {
    return util$940.primitiveAccessor.apply(this, [
        'error',
        value$948
    ]);
};