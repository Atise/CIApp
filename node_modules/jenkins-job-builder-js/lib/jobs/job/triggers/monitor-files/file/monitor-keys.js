'use strict';
var util$940 = require('../../../../../misc/util.js');
var MonitorParameters$942 = function (upper$945, obj$946) {
    this.upper = upper$945;
    this.obj = obj$946;
};
MonitorParameters$942.prototype.up = function () {
    return this.upper;
};
MonitorParameters$942.prototype.and = MonitorParameters$942.prototype.up;
module.exports = MonitorParameters$942;
MonitorParameters$942.prototype[util$940.camelize('keys')] = function (value$947) {
    return util$940.primitiveArrayAccessor.apply(this, [
        'keys',
        value$947
    ]);
};
MonitorParameters$942.prototype[util$940.camelize('all-keys')] = function (value$948) {
    return util$940.primitiveAccessor.apply(this, [
        'all-keys',
        value$948
    ]);
};