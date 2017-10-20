'use strict';
var util$940 = require('../../../misc/util.js');
var Node$942 = function (upper$949, obj$950) {
    this.upper = upper$949;
    this.obj = obj$950;
};
Node$942.prototype.up = function () {
    return this.upper;
};
Node$942.prototype.and = Node$942.prototype.up;
module.exports = Node$942;
Node$942.prototype[util$940.camelize('name')] = function (value$951) {
    return util$940.primitiveAccessor.apply(this, [
        'name',
        value$951
    ]);
};
Node$942.prototype[util$940.camelize('description')] = function (value$952) {
    return util$940.primitiveAccessor.apply(this, [
        'description',
        value$952
    ]);
};
Node$942.prototype[util$940.camelize('default-slaves')] = function (value$953) {
    return util$940.primitiveArrayAccessor.apply(this, [
        'default-slaves',
        value$953
    ]);
};
Node$942.prototype[util$940.camelize('allowed-slaves')] = function (value$954) {
    return util$940.primitiveArrayAccessor.apply(this, [
        'allowed-slaves',
        value$954
    ]);
};
Node$942.prototype[util$940.camelize('ignore-offline-nodes')] = function (value$955) {
    return util$940.primitiveAccessor.apply(this, [
        'ignore-offline-nodes',
        value$955
    ]);
};
Node$942.prototype[util$940.camelize('allowed-multiselect')] = function (value$956) {
    return util$940.primitiveAccessor.apply(this, [
        'allowed-multiselect',
        value$956
    ]);
};