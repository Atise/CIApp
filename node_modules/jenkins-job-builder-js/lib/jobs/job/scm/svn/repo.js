'use strict';
var util$940 = require('../../../../misc/util.js');
var Repo$942 = function (upper$948, obj$949) {
    this.upper = upper$948;
    this.obj = obj$949;
};
Repo$942.prototype.up = function () {
    return this.upper;
};
Repo$942.prototype.and = Repo$942.prototype.up;
module.exports = Repo$942;
Repo$942.prototype[util$940.camelize('url')] = function (value$950) {
    return util$940.primitiveAccessor.apply(this, [
        'url',
        value$950
    ]);
};
Repo$942.prototype[util$940.camelize('basedir')] = function (value$951) {
    return util$940.primitiveAccessor.apply(this, [
        'basedir',
        value$951
    ]);
};
Repo$942.prototype[util$940.camelize('credentials-id')] = function (value$952) {
    return util$940.primitiveAccessor.apply(this, [
        'credentials-id',
        value$952
    ]);
};
Repo$942.prototype[util$940.camelize('repo-depth')] = function (value$953) {
    return util$940.primitiveAccessor.apply(this, [
        'repo-depth',
        value$953
    ]);
};
Repo$942.prototype[util$940.camelize('ignore-externals')] = function (value$954) {
    return util$940.primitiveAccessor.apply(this, [
        'ignore-externals',
        value$954
    ]);
};