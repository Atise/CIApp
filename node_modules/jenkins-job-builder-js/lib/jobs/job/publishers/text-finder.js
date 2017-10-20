'use strict';
var util$940 = require('../../../misc/util.js');
var TextFinder$942 = function (upper$948, obj$949) {
    this.upper = upper$948;
    this.obj = obj$949;
};
TextFinder$942.prototype.up = function () {
    return this.upper;
};
TextFinder$942.prototype.and = TextFinder$942.prototype.up;
module.exports = TextFinder$942;
TextFinder$942.prototype[util$940.camelize('regexp')] = function (value$950) {
    return util$940.primitiveAccessor.apply(this, [
        'regexp',
        value$950
    ]);
};
TextFinder$942.prototype[util$940.camelize('fileset')] = function (value$951) {
    return util$940.primitiveAccessor.apply(this, [
        'fileset',
        value$951
    ]);
};
TextFinder$942.prototype[util$940.camelize('also-check-console-output')] = function (value$952) {
    return util$940.primitiveAccessor.apply(this, [
        'also-check-console-output',
        value$952
    ]);
};
TextFinder$942.prototype[util$940.camelize('succeed-if-found')] = function (value$953) {
    return util$940.primitiveAccessor.apply(this, [
        'succeed-if-found',
        value$953
    ]);
};
TextFinder$942.prototype[util$940.camelize('unstable-if-found')] = function (value$954) {
    return util$940.primitiveAccessor.apply(this, [
        'unstable-if-found',
        value$954
    ]);
};