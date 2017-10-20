'use strict';
var util$940 = require('../../../misc/util.js');
var DateObject$942 = function (upper$947, obj$948) {
    this.upper = upper$947;
    this.obj = obj$948;
};
DateObject$942.prototype.up = function () {
    return this.upper;
};
DateObject$942.prototype.and = DateObject$942.prototype.up;
module.exports = DateObject$942;
DateObject$942.prototype[util$940.camelize('name')] = function (value$949) {
    return util$940.primitiveAccessor.apply(this, [
        'name',
        value$949
    ]);
};
DateObject$942.prototype[util$940.camelize('time')] = function (value$950) {
    return util$940.primitiveAccessor.apply(this, [
        'time',
        value$950
    ]);
};
DateObject$942.prototype[util$940.camelize('timezone')] = function (value$951) {
    return util$940.primitiveAccessor.apply(this, [
        'timezone',
        value$951
    ]);
};
DateObject$942.prototype[util$940.camelize('expose-to-env')] = function (value$952) {
    return util$940.primitiveAccessor.apply(this, [
        'expose-to-env',
        value$952
    ]);
};