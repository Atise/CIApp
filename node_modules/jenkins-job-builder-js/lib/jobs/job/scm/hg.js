'use strict';
var util$940 = require('../../../misc/util.js');
var Hg$942 = function (upper$953, obj$954) {
    this.upper = upper$953;
    this.obj = obj$954;
};
Hg$942.prototype.up = function () {
    return this.upper;
};
Hg$942.prototype.and = Hg$942.prototype.up;
module.exports = Hg$942;
Hg$942.prototype[util$940.camelize('url')] = function (value$955) {
    return util$940.primitiveAccessor.apply(this, [
        'url',
        value$955
    ]);
};
Hg$942.prototype[util$940.camelize('credentials-id')] = function (value$956) {
    return util$940.primitiveAccessor.apply(this, [
        'credentials-id',
        value$956
    ]);
};
Hg$942.prototype[util$940.camelize('revision-type')] = function (value$957) {
    return util$940.primitiveAccessor.apply(this, [
        'revision-type',
        value$957
    ]);
};
Hg$942.prototype[util$940.camelize('revision')] = function (value$958) {
    return util$940.primitiveAccessor.apply(this, [
        'revision',
        value$958
    ]);
};
Hg$942.prototype[util$940.camelize('modules')] = function (value$959) {
    return util$940.primitiveArrayAccessor.apply(this, [
        'modules',
        value$959
    ]);
};
Hg$942.prototype[util$940.camelize('clean')] = function (value$960) {
    return util$940.primitiveAccessor.apply(this, [
        'clean',
        value$960
    ]);
};
Hg$942.prototype[util$940.camelize('subdir')] = function (value$961) {
    return util$940.primitiveAccessor.apply(this, [
        'subdir',
        value$961
    ]);
};
Hg$942.prototype[util$940.camelize('disable-changelog')] = function (value$962) {
    return util$940.primitiveAccessor.apply(this, [
        'disable-changelog',
        value$962
    ]);
};
Hg$942.prototype[util$940.camelize('browser')] = function (value$963) {
    return util$940.primitiveAccessor.apply(this, [
        'browser',
        value$963
    ]);
};
Hg$942.prototype[util$940.camelize('browser-url')] = function (value$964) {
    return util$940.primitiveAccessor.apply(this, [
        'browser-url',
        value$964
    ]);
};