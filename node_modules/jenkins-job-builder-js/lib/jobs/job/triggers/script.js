'use strict';
var util$940 = require('../../../misc/util.js');
var Script$942 = function (upper$949, obj$950) {
    this.upper = upper$949;
    this.obj = obj$950;
};
Script$942.prototype.up = function () {
    return this.upper;
};
Script$942.prototype.and = Script$942.prototype.up;
module.exports = Script$942;
Script$942.prototype[util$940.camelize('label')] = function (value$951) {
    return util$940.primitiveAccessor.apply(this, [
        'label',
        value$951
    ]);
};
Script$942.prototype[util$940.camelize('script')] = function (value$952) {
    return util$940.primitiveAccessor.apply(this, [
        'script',
        value$952
    ]);
};
Script$942.prototype[util$940.camelize('script-file-path')] = function (value$953) {
    return util$940.primitiveAccessor.apply(this, [
        'script-file-path',
        value$953
    ]);
};
Script$942.prototype[util$940.camelize('cron')] = function (value$954) {
    return util$940.primitiveAccessor.apply(this, [
        'cron',
        value$954
    ]);
};
Script$942.prototype[util$940.camelize('enable-concurrent')] = function (value$955) {
    return util$940.primitiveAccessor.apply(this, [
        'enable-concurrent',
        value$955
    ]);
};
Script$942.prototype[util$940.camelize('exit-code')] = function (value$956) {
    return util$940.primitiveAccessor.apply(this, [
        'exit-code',
        value$956
    ]);
};