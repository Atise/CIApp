'use strict';
var util$940 = require('../../../misc/util.js');
var SlocCount$942 = function (upper$945, obj$946) {
    this.upper = upper$945;
    this.obj = obj$946;
};
SlocCount$942.prototype.up = function () {
    return this.upper;
};
SlocCount$942.prototype.and = SlocCount$942.prototype.up;
module.exports = SlocCount$942;
SlocCount$942.prototype[util$940.camelize('report-files')] = function (value$947) {
    return util$940.primitiveAccessor.apply(this, [
        'report-files',
        value$947
    ]);
};
SlocCount$942.prototype[util$940.camelize('charset')] = function (value$948) {
    return util$940.primitiveAccessor.apply(this, [
        'charset',
        value$948
    ]);
};