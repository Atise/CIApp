'use strict';
var util$940 = require('../../../../misc/util.js');
var Match$942 = function (upper$945, obj$946) {
    this.upper = upper$945;
    this.obj = obj$946;
};
Match$942.prototype.up = function () {
    return this.upper;
};
Match$942.prototype.and = Match$942.prototype.up;
module.exports = Match$942;
Match$942.prototype[util$940.camelize('log-text')] = function (value$947) {
    return util$940.primitiveAccessor.apply(this, [
        'log-text',
        value$947
    ]);
};
Match$942.prototype[util$940.camelize('operator')] = function (value$948) {
    return util$940.primitiveAccessor.apply(this, [
        'operator',
        value$948
    ]);
};