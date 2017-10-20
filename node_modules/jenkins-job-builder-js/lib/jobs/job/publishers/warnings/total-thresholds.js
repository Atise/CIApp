'use strict';
var util$940 = require('../../../../misc/util.js');
var TotalThreshold$941 = require('./total-threshold.js');
var TotalThresholds$943 = function (upper$946, obj$947) {
    this.upper = upper$946;
    this.obj = obj$947;
};
TotalThresholds$943.prototype.up = function () {
    return this.upper;
};
TotalThresholds$943.prototype.and = TotalThresholds$943.prototype.up;
module.exports = TotalThresholds$943;
TotalThresholds$943.prototype[util$940.camelize('unstable')] = function (value$948) {
    return util$940.objectAccessor.apply(this, [
        'unstable',
        TotalThreshold$941,
        value$948
    ]);
};
TotalThresholds$943.prototype[util$940.camelize('failed')] = function (value$949) {
    return util$940.objectAccessor.apply(this, [
        'failed',
        TotalThreshold$941,
        value$949
    ]);
};