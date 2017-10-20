'use strict';
var util$940 = require('../../../misc/util.js');
var Rebuild$942 = function (upper$945, obj$946) {
    this.upper = upper$945;
    this.obj = obj$946;
};
Rebuild$942.prototype.up = function () {
    return this.upper;
};
Rebuild$942.prototype.and = Rebuild$942.prototype.up;
module.exports = Rebuild$942;
Rebuild$942.prototype[util$940.camelize('auto-rebuild')] = function (value$947) {
    return util$940.primitiveAccessor.apply(this, [
        'auto-rebuild',
        value$947
    ]);
};
Rebuild$942.prototype[util$940.camelize('rebuild-disabled')] = function (value$948) {
    return util$940.primitiveAccessor.apply(this, [
        'rebuild-disabled',
        value$948
    ]);
};