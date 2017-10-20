'use strict';
var util$940 = require('../../../misc/util.js');
var Campfire$942 = function (upper$947, obj$948) {
    this.upper = upper$947;
    this.obj = obj$948;
};
Campfire$942.prototype.up = function () {
    return this.upper;
};
Campfire$942.prototype.and = Campfire$942.prototype.up;
module.exports = Campfire$942;
Campfire$942.prototype[util$940.camelize('subdomain')] = function (value$949) {
    return util$940.primitiveAccessor.apply(this, [
        'subdomain',
        value$949
    ]);
};
Campfire$942.prototype[util$940.camelize('token')] = function (value$950) {
    return util$940.primitiveAccessor.apply(this, [
        'token',
        value$950
    ]);
};
Campfire$942.prototype[util$940.camelize('ssl')] = function (value$951) {
    return util$940.primitiveAccessor.apply(this, [
        'ssl',
        value$951
    ]);
};
Campfire$942.prototype[util$940.camelize('room')] = function (value$952) {
    return util$940.primitiveAccessor.apply(this, [
        'room',
        value$952
    ]);
};