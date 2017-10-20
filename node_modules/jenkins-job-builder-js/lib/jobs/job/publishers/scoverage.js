'use strict';
var util$940 = require('../../../misc/util.js');
var Scoverage$942 = function (upper$945, obj$946) {
    this.upper = upper$945;
    this.obj = obj$946;
};
Scoverage$942.prototype.up = function () {
    return this.upper;
};
Scoverage$942.prototype.and = Scoverage$942.prototype.up;
module.exports = Scoverage$942;
Scoverage$942.prototype[util$940.camelize('report-directory')] = function (value$947) {
    return util$940.primitiveAccessor.apply(this, [
        'report-directory',
        value$947
    ]);
};
Scoverage$942.prototype[util$940.camelize('report-file')] = function (value$948) {
    return util$940.primitiveAccessor.apply(this, [
        'report-file',
        value$948
    ]);
};