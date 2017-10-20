'use strict';
var util$940 = require('../../../../../misc/util.js');
var CheckContent$942 = function (upper$947, obj$948) {
    this.upper = upper$947;
    this.obj = obj$948;
};
CheckContent$942.prototype.up = function () {
    return this.upper;
};
CheckContent$942.prototype.and = CheckContent$942.prototype.up;
module.exports = CheckContent$942;
CheckContent$942.prototype[util$940.camelize('simple')] = function (value$949) {
    return util$940.primitiveAccessor.apply(this, [
        'simple',
        value$949
    ]);
};
CheckContent$942.prototype[util$940.camelize('json')] = function (value$950) {
    return util$940.primitiveArrayAccessor.apply(this, [
        'json',
        value$950
    ]);
};
CheckContent$942.prototype[util$940.camelize('text')] = function (value$951) {
    return util$940.primitiveArrayAccessor.apply(this, [
        'text',
        value$951
    ]);
};
CheckContent$942.prototype[util$940.camelize('xml')] = function (value$952) {
    return util$940.primitiveArrayAccessor.apply(this, [
        'xml',
        value$952
    ]);
};