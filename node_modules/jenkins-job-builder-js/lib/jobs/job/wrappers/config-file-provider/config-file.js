'use strict';
var util$940 = require('../../../../misc/util.js');
var ConfigFile$942 = function (upper$946, obj$947) {
    this.upper = upper$946;
    this.obj = obj$947;
};
ConfigFile$942.prototype.up = function () {
    return this.upper;
};
ConfigFile$942.prototype.and = ConfigFile$942.prototype.up;
module.exports = ConfigFile$942;
ConfigFile$942.prototype[util$940.camelize('file-id')] = function (value$948) {
    return util$940.primitiveAccessor.apply(this, [
        'file-id',
        value$948
    ]);
};
ConfigFile$942.prototype[util$940.camelize('target')] = function (value$949) {
    return util$940.primitiveAccessor.apply(this, [
        'target',
        value$949
    ]);
};
ConfigFile$942.prototype[util$940.camelize('variable')] = function (value$950) {
    return util$940.primitiveAccessor.apply(this, [
        'variable',
        value$950
    ]);
};