'use strict';
var util$940 = require('../../../misc/util.js');
var Targets$941 = require('./ruby-metrics/targets.js');
var RubyMetrics$943 = function (upper$946, obj$947) {
    this.upper = upper$946;
    this.obj = obj$947;
};
RubyMetrics$943.prototype.up = function () {
    return this.upper;
};
RubyMetrics$943.prototype.and = RubyMetrics$943.prototype.up;
module.exports = RubyMetrics$943;
RubyMetrics$943.prototype[util$940.camelize('report-dir')] = function (value$948) {
    return util$940.primitiveAccessor.apply(this, [
        'report-dir',
        value$948
    ]);
};
RubyMetrics$943.prototype[util$940.camelize('targets')] = function (value$949) {
    return util$940.customArrayAccessor.apply(this, [
        'targets',
        Targets$941,
        value$949
    ]);
};