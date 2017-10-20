'use strict';
var util$940 = require('../../../misc/util.js');
var Stash$942 = function (upper$949, obj$950) {
    this.upper = upper$949;
    this.obj = obj$950;
};
Stash$942.prototype.up = function () {
    return this.upper;
};
Stash$942.prototype.and = Stash$942.prototype.up;
module.exports = Stash$942;
Stash$942.prototype[util$940.camelize('url')] = function (value$951) {
    return util$940.primitiveAccessor.apply(this, [
        'url',
        value$951
    ]);
};
Stash$942.prototype[util$940.camelize('username')] = function (value$952) {
    return util$940.primitiveAccessor.apply(this, [
        'username',
        value$952
    ]);
};
Stash$942.prototype[util$940.camelize('password')] = function (value$953) {
    return util$940.primitiveAccessor.apply(this, [
        'password',
        value$953
    ]);
};
Stash$942.prototype[util$940.camelize('ignore-ssl')] = function (value$954) {
    return util$940.primitiveAccessor.apply(this, [
        'ignore-ssl',
        value$954
    ]);
};
Stash$942.prototype[util$940.camelize('commit-sha1')] = function (value$955) {
    return util$940.primitiveAccessor.apply(this, [
        'commit-sha1',
        value$955
    ]);
};
Stash$942.prototype[util$940.camelize('include-build-number')] = function (value$956) {
    return util$940.primitiveAccessor.apply(this, [
        'include-build-number',
        value$956
    ]);
};