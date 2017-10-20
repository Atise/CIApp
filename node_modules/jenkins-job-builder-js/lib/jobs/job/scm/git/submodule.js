'use strict';
var util$940 = require('../../../../misc/util.js');
var Submodule$942 = function (upper$947, obj$948) {
    this.upper = upper$947;
    this.obj = obj$948;
};
Submodule$942.prototype.up = function () {
    return this.upper;
};
Submodule$942.prototype.and = Submodule$942.prototype.up;
module.exports = Submodule$942;
Submodule$942.prototype[util$940.camelize('disable')] = function (value$949) {
    return util$940.primitiveAccessor.apply(this, [
        'disable',
        value$949
    ]);
};
Submodule$942.prototype[util$940.camelize('recursive')] = function (value$950) {
    return util$940.primitiveAccessor.apply(this, [
        'recursive',
        value$950
    ]);
};
Submodule$942.prototype[util$940.camelize('tracking')] = function (value$951) {
    return util$940.primitiveAccessor.apply(this, [
        'tracking',
        value$951
    ]);
};
Submodule$942.prototype[util$940.camelize('timeout')] = function (value$952) {
    return util$940.primitiveAccessor.apply(this, [
        'timeout',
        value$952
    ]);
};