'use strict';
var util$940 = require('../../../../misc/util.js');
var Remote$942 = function (upper$946, obj$947) {
    this.upper = upper$946;
    this.obj = obj$947;
};
Remote$942.prototype.up = function () {
    return this.upper;
};
Remote$942.prototype.and = Remote$942.prototype.up;
module.exports = Remote$942;
Remote$942.prototype[util$940.camelize('url')] = function (value$948) {
    return util$940.primitiveAccessor.apply(this, [
        'url',
        value$948
    ]);
};
Remote$942.prototype[util$940.camelize('refspec')] = function (value$949) {
    return util$940.primitiveAccessor.apply(this, [
        'refspec',
        value$949
    ]);
};
Remote$942.prototype[util$940.camelize('credentials-id')] = function (value$950) {
    return util$940.primitiveAccessor.apply(this, [
        'credentials-id',
        value$950
    ]);
};