'use strict';
var util$940 = require('../../../misc/util.js');
var File$941 = require('./monitor-files/file.js');
var MonitorFiles$943 = function (upper$946, obj$947) {
    this.upper = upper$946;
    this.obj = obj$947;
};
MonitorFiles$943.prototype.up = function () {
    return this.upper;
};
MonitorFiles$943.prototype.and = MonitorFiles$943.prototype.up;
module.exports = MonitorFiles$943;
MonitorFiles$943.prototype[util$940.camelize('files')] = function (value$948) {
    return util$940.objectArrayAccessor.apply(this, [
        'files',
        File$941,
        value$948
    ]);
};
MonitorFiles$943.prototype[util$940.camelize('cron')] = function (value$949) {
    return util$940.primitiveAccessor.apply(this, [
        'cron',
        value$949
    ]);
};