'use strict';
var util$940 = require('../../../misc/util.js');
var Jclouds$942 = function (upper$948, obj$949) {
    this.upper = upper$948;
    this.obj = obj$949;
};
Jclouds$942.prototype.up = function () {
    return this.upper;
};
Jclouds$942.prototype.and = Jclouds$942.prototype.up;
module.exports = Jclouds$942;
Jclouds$942.prototype[util$940.camelize('profile')] = function (value$950) {
    return util$940.primitiveAccessor.apply(this, [
        'profile',
        value$950
    ]);
};
Jclouds$942.prototype[util$940.camelize('files')] = function (value$951) {
    return util$940.primitiveAccessor.apply(this, [
        'files',
        value$951
    ]);
};
Jclouds$942.prototype[util$940.camelize('basedir')] = function (value$952) {
    return util$940.primitiveAccessor.apply(this, [
        'basedir',
        value$952
    ]);
};
Jclouds$942.prototype[util$940.camelize('container')] = function (value$953) {
    return util$940.primitiveAccessor.apply(this, [
        'container',
        value$953
    ]);
};
Jclouds$942.prototype[util$940.camelize('hierarchy')] = function (value$954) {
    return util$940.primitiveAccessor.apply(this, [
        'hierarchy',
        value$954
    ]);
};