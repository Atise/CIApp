'use strict';
var util$940 = require('../../../../misc/util.js');
var Report$942 = function (upper$945, obj$946) {
    this.upper = upper$945;
    this.obj = obj$946;
};
Report$942.prototype.up = function () {
    return this.upper;
};
Report$942.prototype.and = Report$942.prototype.up;
module.exports = Report$942;
Report$942.prototype[util$940.camelize('jmeter')] = function (value$947) {
    return util$940.primitiveAccessor.apply(this, [
        'jmeter',
        value$947
    ]);
};
Report$942.prototype[util$940.camelize('junit')] = function (value$948) {
    return util$940.primitiveAccessor.apply(this, [
        'junit',
        value$948
    ]);
};