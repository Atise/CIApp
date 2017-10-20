'use strict';
var util$940 = require('../../../../misc/util.js');
var CheckContent$941 = require('./file/check-content.js');
var File$943 = function (upper$948, obj$949) {
    this.upper = upper$948;
    this.obj = obj$949;
};
File$943.prototype.up = function () {
    return this.upper;
};
File$943.prototype.and = File$943.prototype.up;
module.exports = File$943;
File$943.prototype[util$940.camelize('path')] = function (value$950) {
    return util$940.primitiveAccessor.apply(this, [
        'path',
        value$950
    ]);
};
File$943.prototype[util$940.camelize('strategy')] = function (value$951) {
    return util$940.primitiveAccessor.apply(this, [
        'strategy',
        value$951
    ]);
};
File$943.prototype[util$940.camelize('check-content')] = function (value$952) {
    return util$940.objectArrayAccessor.apply(this, [
        'check-content',
        CheckContent$941,
        value$952
    ]);
};
File$943.prototype[util$940.camelize('ignore-modificaton-date')] = function (value$953) {
    return util$940.primitiveAccessor.apply(this, [
        'ignore-modificaton-date',
        value$953
    ]);
};