'use strict';
var util$940 = require('../../../misc/util.js');
var Ownership$942 = function (upper$946, obj$947) {
    this.upper = upper$946;
    this.obj = obj$947;
};
Ownership$942.prototype.up = function () {
    return this.upper;
};
Ownership$942.prototype.and = Ownership$942.prototype.up;
module.exports = Ownership$942;
Ownership$942.prototype[util$940.camelize('enabled')] = function (value$948) {
    return util$940.primitiveAccessor.apply(this, [
        'enabled',
        value$948
    ]);
};
Ownership$942.prototype[util$940.camelize('owner')] = function (value$949) {
    return util$940.primitiveAccessor.apply(this, [
        'owner',
        value$949
    ]);
};
Ownership$942.prototype[util$940.camelize('co-owners')] = function (value$950) {
    return util$940.primitiveArrayAccessor.apply(this, [
        'co-owners',
        value$950
    ]);
};