'use strict';
var util$940 = require('../../../misc/util.js');
var AggregateTests$942 = function (upper$944, obj$945) {
    this.upper = upper$944;
    this.obj = obj$945;
};
AggregateTests$942.prototype.up = function () {
    return this.upper;
};
AggregateTests$942.prototype.and = AggregateTests$942.prototype.up;
module.exports = AggregateTests$942;
AggregateTests$942.prototype[util$940.camelize('include-failed-builds')] = function (value$946) {
    return util$940.primitiveAccessor.apply(this, [
        'include-failed-builds',
        value$946
    ]);
};