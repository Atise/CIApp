'use strict';
var util$940 = require('../../../../../misc/util.js');
var Module$941 = require('./module.js');
var Location$943 = function (upper$948, obj$949) {
    this.upper = upper$948;
    this.obj = obj$949;
};
Location$943.prototype.up = function () {
    return this.upper;
};
Location$943.prototype.and = Location$943.prototype.up;
module.exports = Location$943;
Location$943.prototype[util$940.camelize('type')] = function (value$950) {
    return util$940.primitiveAccessor.apply(this, [
        'type',
        value$950
    ]);
};
Location$943.prototype[util$940.camelize('name')] = function (value$951) {
    return util$940.primitiveAccessor.apply(this, [
        'name',
        value$951
    ]);
};
Location$943.prototype[util$940.camelize('use-head')] = function (value$952) {
    return util$940.primitiveAccessor.apply(this, [
        'use-head',
        value$952
    ]);
};
Location$943.prototype[util$940.camelize('modules')] = function (value$953) {
    return util$940.objectArrayAccessor.apply(this, [
        'modules',
        Module$941,
        value$953
    ]);
};