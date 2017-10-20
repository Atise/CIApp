'use strict';
var util$940 = require('../../../../misc/util.js');
var NewThreshold$941 = require('./new-threshold.js');
var NewThresholds$943 = function (upper$946, obj$947) {
    this.upper = upper$946;
    this.obj = obj$947;
};
NewThresholds$943.prototype.up = function () {
    return this.upper;
};
NewThresholds$943.prototype.and = NewThresholds$943.prototype.up;
module.exports = NewThresholds$943;
NewThresholds$943.prototype[util$940.camelize('unstable')] = function (value$948) {
    return util$940.objectAccessor.apply(this, [
        'unstable',
        NewThreshold$941,
        value$948
    ]);
};
NewThresholds$943.prototype[util$940.camelize('failed')] = function (value$949) {
    return util$940.objectAccessor.apply(this, [
        'failed',
        NewThreshold$941,
        value$949
    ]);
};