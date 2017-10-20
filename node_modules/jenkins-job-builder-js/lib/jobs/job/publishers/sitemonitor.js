'use strict';
var util$940 = require('../../../misc/util.js');
var Site$941 = require('./sitemonitor/site.js');
var SiteMonitor$943 = function (upper$945, obj$946) {
    this.upper = upper$945;
    this.obj = obj$946;
};
SiteMonitor$943.prototype.up = function () {
    return this.upper;
};
SiteMonitor$943.prototype.and = SiteMonitor$943.prototype.up;
module.exports = SiteMonitor$943;
SiteMonitor$943.prototype[util$940.camelize('sites')] = function (value$947) {
    return util$940.objectArrayAccessor.apply(this, [
        'sites',
        Site$941,
        value$947
    ]);
};