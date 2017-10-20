'use strict';
var util$940 = require('../../../misc/util.js');
var Http$942 = function (upper$948, obj$949) {
    this.upper = upper$948;
    this.obj = obj$949;
};
Http$942.prototype.up = function () {
    return this.upper;
};
Http$942.prototype.and = Http$942.prototype.up;
module.exports = Http$942;
Http$942.prototype[util$940.camelize('format')] = function (value$950) {
    return util$940.primitiveAccessor.apply(this, [
        'format',
        value$950
    ]);
};
Http$942.prototype[util$940.camelize('event')] = function (value$951) {
    return util$940.primitiveAccessor.apply(this, [
        'event',
        value$951
    ]);
};
Http$942.prototype[util$940.camelize('url')] = function (value$952) {
    return util$940.primitiveAccessor.apply(this, [
        'url',
        value$952
    ]);
};
Http$942.prototype[util$940.camelize('timeout')] = function (value$953) {
    return util$940.primitiveAccessor.apply(this, [
        'timeout',
        value$953
    ]);
};
Http$942.prototype[util$940.camelize('log')] = function (value$954) {
    return util$940.primitiveAccessor.apply(this, [
        'log',
        value$954
    ]);
};