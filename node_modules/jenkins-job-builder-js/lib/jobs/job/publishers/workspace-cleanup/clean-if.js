'use strict';
var util$940 = require('../../../../misc/util.js');
var CleanIf$942 = function (upper$948, obj$949) {
    this.upper = upper$948;
    this.obj = obj$949;
};
CleanIf$942.prototype.up = function () {
    return this.upper;
};
CleanIf$942.prototype.and = CleanIf$942.prototype.up;
module.exports = CleanIf$942;
CleanIf$942.prototype[util$940.camelize('success')] = function (value$950) {
    return util$940.primitiveAccessor.apply(this, [
        'success',
        value$950
    ]);
};
CleanIf$942.prototype[util$940.camelize('unstable')] = function (value$951) {
    return util$940.primitiveAccessor.apply(this, [
        'unstable',
        value$951
    ]);
};
CleanIf$942.prototype[util$940.camelize('failure')] = function (value$952) {
    return util$940.primitiveAccessor.apply(this, [
        'failure',
        value$952
    ]);
};
CleanIf$942.prototype[util$940.camelize('aborted')] = function (value$953) {
    return util$940.primitiveAccessor.apply(this, [
        'aborted',
        value$953
    ]);
};
CleanIf$942.prototype[util$940.camelize('not-built')] = function (value$954) {
    return util$940.primitiveAccessor.apply(this, [
        'not-built',
        value$954
    ]);
};