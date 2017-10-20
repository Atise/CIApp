'use strict';
var util$940 = require('../../../../misc/util.js');
var MetricTarget$942 = function (upper$945, obj$946) {
    this.upper = upper$945;
    this.obj = obj$946;
};
MetricTarget$942.prototype.up = function () {
    return this.upper;
};
MetricTarget$942.prototype.and = MetricTarget$942.prototype.up;
module.exports = MetricTarget$942;
MetricTarget$942.prototype[util$940.camelize('method')] = function (value$947) {
    return util$940.primitiveAccessor.apply(this, [
        'method',
        value$947
    ]);
};
MetricTarget$942.prototype[util$940.camelize('statement')] = function (value$948) {
    return util$940.primitiveAccessor.apply(this, [
        'statement',
        value$948
    ]);
};