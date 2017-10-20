'use strict';
var util$940 = require('../../../misc/util.js');
var Touchstone$942 = function (upper$945, obj$946) {
    this.upper = upper$945;
    this.obj = obj$946;
};
Touchstone$942.prototype.up = function () {
    return this.upper;
};
Touchstone$942.prototype.and = Touchstone$942.prototype.up;
module.exports = Touchstone$942;
Touchstone$942.prototype[util$940.camelize('expr')] = function (value$947) {
    return util$940.primitiveAccessor.apply(this, [
        'expr',
        value$947
    ]);
};
Touchstone$942.prototype[util$940.camelize('result')] = function (value$948) {
    return util$940.primitiveAccessor.apply(this, [
        'result',
        value$948
    ]);
};