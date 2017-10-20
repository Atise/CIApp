'use strict';
var util$940 = require('../../../../misc/util.js');
var CheckContent$941 = require('./url/check-content.js');
var Url$943 = function (upper$953, obj$954) {
    this.upper = upper$953;
    this.obj = obj$954;
};
Url$943.prototype.up = function () {
    return this.upper;
};
Url$943.prototype.and = Url$943.prototype.up;
module.exports = Url$943;
Url$943.prototype[util$940.camelize('url')] = function (value$955) {
    return util$940.primitiveAccessor.apply(this, [
        'url',
        value$955
    ]);
};
Url$943.prototype[util$940.camelize('proxy')] = function (value$956) {
    return util$940.primitiveAccessor.apply(this, [
        'proxy',
        value$956
    ]);
};
Url$943.prototype[util$940.camelize('timeout')] = function (value$957) {
    return util$940.primitiveAccessor.apply(this, [
        'timeout',
        value$957
    ]);
};
Url$943.prototype[util$940.camelize('username')] = function (value$958) {
    return util$940.primitiveAccessor.apply(this, [
        'username',
        value$958
    ]);
};
Url$943.prototype[util$940.camelize('password')] = function (value$959) {
    return util$940.primitiveAccessor.apply(this, [
        'password',
        value$959
    ]);
};
Url$943.prototype[util$940.camelize('check-status')] = function (value$960) {
    return util$940.primitiveAccessor.apply(this, [
        'check-status',
        value$960
    ]);
};
Url$943.prototype[util$940.camelize('check-etag')] = function (value$961) {
    return util$940.primitiveAccessor.apply(this, [
        'check-etag',
        value$961
    ]);
};
Url$943.prototype[util$940.camelize('check-date')] = function (value$962) {
    return util$940.primitiveAccessor.apply(this, [
        'check-date',
        value$962
    ]);
};
Url$943.prototype[util$940.camelize('check-content')] = function (value$963) {
    return util$940.objectArrayAccessor.apply(this, [
        'check-content',
        CheckContent$941,
        value$963
    ]);
};