'use strict';
var util$940 = require('../../../../misc/util.js');
var Credential$942 = function (upper$945, obj$946) {
    this.upper = upper$945;
    this.obj = obj$946;
};
Credential$942.prototype.up = function () {
    return this.upper;
};
Credential$942.prototype.and = Credential$942.prototype.up;
module.exports = Credential$942;
Credential$942.prototype[util$940.camelize('credential-id')] = function (value$947) {
    return util$940.primitiveAccessor.apply(this, [
        'credential-id',
        value$947
    ]);
};
Credential$942.prototype[util$940.camelize('variable')] = function (value$948) {
    return util$940.primitiveAccessor.apply(this, [
        'variable',
        value$948
    ]);
};