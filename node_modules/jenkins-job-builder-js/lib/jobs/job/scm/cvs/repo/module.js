'use strict';
var util$940 = require('../../../../../misc/util.js');
var Module$942 = function (upper$945, obj$946) {
    this.upper = upper$945;
    this.obj = obj$946;
};
Module$942.prototype.up = function () {
    return this.upper;
};
Module$942.prototype.and = Module$942.prototype.up;
module.exports = Module$942;
Module$942.prototype[util$940.camelize('remote')] = function (value$947) {
    return util$940.primitiveAccessor.apply(this, [
        'remote',
        value$947
    ]);
};
Module$942.prototype[util$940.camelize('local-name')] = function (value$948) {
    return util$940.primitiveAccessor.apply(this, [
        'local-name',
        value$948
    ]);
};