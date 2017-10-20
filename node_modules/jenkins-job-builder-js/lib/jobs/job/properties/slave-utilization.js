'use strict';
var util$940 = require('../../../misc/util.js');
var SlaveUtilization$942 = function (upper$945, obj$946) {
    this.upper = upper$945;
    this.obj = obj$946;
};
SlaveUtilization$942.prototype.up = function () {
    return this.upper;
};
SlaveUtilization$942.prototype.and = SlaveUtilization$942.prototype.up;
module.exports = SlaveUtilization$942;
SlaveUtilization$942.prototype[util$940.camelize('slave-percentage')] = function (value$947) {
    return util$940.primitiveAccessor.apply(this, [
        'slave-percentage',
        value$947
    ]);
};
SlaveUtilization$942.prototype[util$940.camelize('single-instance-per-slave')] = function (value$948) {
    return util$940.primitiveAccessor.apply(this, [
        'single-instance-per-slave',
        value$948
    ]);
};