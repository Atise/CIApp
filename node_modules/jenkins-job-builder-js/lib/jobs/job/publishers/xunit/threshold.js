'use strict';
var util$940 = require('../../../../misc/util.js');
var Threshold$942 = function (upper$947, obj$948) {
    this.upper = upper$947;
    this.obj = obj$948;
};
Threshold$942.prototype.up = function () {
    return this.upper;
};
Threshold$942.prototype.and = Threshold$942.prototype.up;
module.exports = Threshold$942;
Threshold$942.prototype[util$940.camelize('unstable')] = function (value$949) {
    return util$940.primitiveAccessor.apply(this, [
        'unstable',
        value$949
    ]);
};
Threshold$942.prototype[util$940.camelize('unstablenew')] = function (value$950) {
    return util$940.primitiveAccessor.apply(this, [
        'unstablenew',
        value$950
    ]);
};
Threshold$942.prototype[util$940.camelize('failure')] = function (value$951) {
    return util$940.primitiveAccessor.apply(this, [
        'failure',
        value$951
    ]);
};
Threshold$942.prototype[util$940.camelize('failurenew')] = function (value$952) {
    return util$940.primitiveAccessor.apply(this, [
        'failurenew',
        value$952
    ]);
};