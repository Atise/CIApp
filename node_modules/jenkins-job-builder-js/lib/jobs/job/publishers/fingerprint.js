'use strict';
var util$940 = require('../../../misc/util.js');
var FingerPrint$942 = function (upper$945, obj$946) {
    this.upper = upper$945;
    this.obj = obj$946;
};
FingerPrint$942.prototype.up = function () {
    return this.upper;
};
FingerPrint$942.prototype.and = FingerPrint$942.prototype.up;
module.exports = FingerPrint$942;
FingerPrint$942.prototype[util$940.camelize('files')] = function (value$947) {
    return util$940.primitiveAccessor.apply(this, [
        'files',
        value$947
    ]);
};
FingerPrint$942.prototype[util$940.camelize('record-artifacts')] = function (value$948) {
    return util$940.primitiveAccessor.apply(this, [
        'record-artifacts',
        value$948
    ]);
};