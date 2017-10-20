'use strict';
var util$940 = require('../../../../misc/util.js');
var File$942 = function (upper$948, obj$949) {
    this.upper = upper$948;
    this.obj = obj$949;
};
File$942.prototype.up = function () {
    return this.upper;
};
File$942.prototype.and = File$942.prototype.up;
module.exports = File$942;
File$942.prototype[util$940.camelize('target')] = function (value$950) {
    return util$940.primitiveAccessor.apply(this, [
        'target',
        value$950
    ]);
};
File$942.prototype[util$940.camelize('source')] = function (value$951) {
    return util$940.primitiveAccessor.apply(this, [
        'source',
        value$951
    ]);
};
File$942.prototype[util$940.camelize('keep-hierarchy')] = function (value$952) {
    return util$940.primitiveAccessor.apply(this, [
        'keep-hierarchy',
        value$952
    ]);
};
File$942.prototype[util$940.camelize('copy-after-failure')] = function (value$953) {
    return util$940.primitiveAccessor.apply(this, [
        'copy-after-failure',
        value$953
    ]);
};
File$942.prototype[util$940.camelize('copy-console')] = function (value$954) {
    return util$940.primitiveAccessor.apply(this, [
        'copy-console',
        value$954
    ]);
};