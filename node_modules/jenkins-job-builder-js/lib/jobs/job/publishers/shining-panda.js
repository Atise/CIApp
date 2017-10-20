'use strict';
var util$940 = require('../../../misc/util.js');
var ShiningPanda$942 = function (upper$944, obj$945) {
    this.upper = upper$944;
    this.obj = obj$945;
};
ShiningPanda$942.prototype.up = function () {
    return this.upper;
};
ShiningPanda$942.prototype.and = ShiningPanda$942.prototype.up;
module.exports = ShiningPanda$942;
ShiningPanda$942.prototype[util$940.camelize('html-reports-directory')] = function (value$946) {
    return util$940.primitiveAccessor.apply(this, [
        'html-reports-directory',
        value$946
    ]);
};