'use strict';
var util$940 = require('../../../misc/util.js');
var Archive$942 = function (upper$949, obj$950) {
    this.upper = upper$949;
    this.obj = obj$950;
};
Archive$942.prototype.up = function () {
    return this.upper;
};
Archive$942.prototype.and = Archive$942.prototype.up;
module.exports = Archive$942;
Archive$942.prototype[util$940.camelize('artifacts')] = function (value$951) {
    return util$940.primitiveAccessor.apply(this, [
        'artifacts',
        value$951
    ]);
};
Archive$942.prototype[util$940.camelize('excludes')] = function (value$952) {
    return util$940.primitiveAccessor.apply(this, [
        'excludes',
        value$952
    ]);
};
Archive$942.prototype[util$940.camelize('latest-only')] = function (value$953) {
    return util$940.primitiveAccessor.apply(this, [
        'latest-only',
        value$953
    ]);
};
Archive$942.prototype[util$940.camelize('allow-empty')] = function (value$954) {
    return util$940.primitiveAccessor.apply(this, [
        'allow-empty',
        value$954
    ]);
};
Archive$942.prototype[util$940.camelize('fingerprint')] = function (value$955) {
    return util$940.primitiveAccessor.apply(this, [
        'fingerprint',
        value$955
    ]);
};
Archive$942.prototype[util$940.camelize('only-if-success')] = function (value$956) {
    return util$940.primitiveAccessor.apply(this, [
        'only-if-success',
        value$956
    ]);
};