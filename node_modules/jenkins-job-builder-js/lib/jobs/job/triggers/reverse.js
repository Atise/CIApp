'use strict';
var util$940 = require('../../../misc/util.js');
var Reverse$942 = function (upper$945, obj$946) {
    this.upper = upper$945;
    this.obj = obj$946;
};
Reverse$942.prototype.up = function () {
    return this.upper;
};
Reverse$942.prototype.and = Reverse$942.prototype.up;
module.exports = Reverse$942;
Reverse$942.prototype[util$940.camelize('jobs')] = function (value$947) {
    return util$940.primitiveAccessor.apply(this, [
        'jobs',
        value$947
    ]);
};
Reverse$942.prototype[util$940.camelize('result')] = function (value$948) {
    return util$940.primitiveAccessor.apply(this, [
        'result',
        value$948
    ]);
};