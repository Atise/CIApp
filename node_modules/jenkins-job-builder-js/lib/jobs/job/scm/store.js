'use strict';
var util$940 = require('../../../misc/util.js');
var Pundle$941 = require('./store/pundle.js');
var Store$943 = function (upper$950, obj$951) {
    this.upper = upper$950;
    this.obj = obj$951;
};
Store$943.prototype.up = function () {
    return this.upper;
};
Store$943.prototype.and = Store$943.prototype.up;
module.exports = Store$943;
Store$943.prototype[util$940.camelize('script')] = function (value$952) {
    return util$940.primitiveAccessor.apply(this, [
        'script',
        value$952
    ]);
};
Store$943.prototype[util$940.camelize('repository')] = function (value$953) {
    return util$940.primitiveAccessor.apply(this, [
        'repository',
        value$953
    ]);
};
Store$943.prototype[util$940.camelize('version-regex')] = function (value$954) {
    return util$940.primitiveAccessor.apply(this, [
        'version-regex',
        value$954
    ]);
};
Store$943.prototype[util$940.camelize('minimum-blessing')] = function (value$955) {
    return util$940.primitiveAccessor.apply(this, [
        'minimum-blessing',
        value$955
    ]);
};
Store$943.prototype[util$940.camelize('parcel-builder-file')] = function (value$956) {
    return util$940.primitiveAccessor.apply(this, [
        'parcel-builder-file',
        value$956
    ]);
};
Store$943.prototype[util$940.camelize('pundles')] = function (value$957) {
    return util$940.objectArrayAccessor.apply(this, [
        'pundles',
        Pundle$941,
        value$957
    ]);
};