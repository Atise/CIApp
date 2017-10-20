'use strict';
var util$940 = require('../../../misc/util.js');
var ManagedScript$942 = function (upper$946, obj$947) {
    this.upper = upper$946;
    this.obj = obj$947;
};
ManagedScript$942.prototype.up = function () {
    return this.upper;
};
ManagedScript$942.prototype.and = ManagedScript$942.prototype.up;
module.exports = ManagedScript$942;
ManagedScript$942.prototype[util$940.camelize('script-id')] = function (value$948) {
    return util$940.primitiveAccessor.apply(this, [
        'script-id',
        value$948
    ]);
};
ManagedScript$942.prototype[util$940.camelize('type')] = function (value$949) {
    return util$940.primitiveAccessor.apply(this, [
        'type',
        value$949
    ]);
};
ManagedScript$942.prototype[util$940.camelize('args')] = function (value$950) {
    return util$940.primitiveArrayAccessor.apply(this, [
        'args',
        value$950
    ]);
};