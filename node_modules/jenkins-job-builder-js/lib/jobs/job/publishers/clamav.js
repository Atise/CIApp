'use strict';
var util$940 = require('../../../misc/util.js');
var Clamav$942 = function (upper$945, obj$946) {
    this.upper = upper$945;
    this.obj = obj$946;
};
Clamav$942.prototype.up = function () {
    return this.upper;
};
Clamav$942.prototype.and = Clamav$942.prototype.up;
module.exports = Clamav$942;
Clamav$942.prototype[util$940.camelize('includes')] = function (value$947) {
    return util$940.primitiveAccessor.apply(this, [
        'includes',
        value$947
    ]);
};
Clamav$942.prototype[util$940.camelize('excludes')] = function (value$948) {
    return util$940.primitiveAccessor.apply(this, [
        'excludes',
        value$948
    ]);
};