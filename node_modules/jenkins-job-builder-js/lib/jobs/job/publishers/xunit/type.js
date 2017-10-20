'use strict';
var util$940 = require('../../../../misc/util.js');
var Type$942 = function (upper$948, obj$949) {
    this.upper = upper$948;
    this.obj = obj$949;
};
Type$942.prototype.up = function () {
    return this.upper;
};
Type$942.prototype.and = Type$942.prototype.up;
module.exports = Type$942;
Type$942.prototype[util$940.camelize('pattern')] = function (value$950) {
    return util$940.primitiveAccessor.apply(this, [
        'pattern',
        value$950
    ]);
};
Type$942.prototype[util$940.camelize('requireupdate')] = function (value$951) {
    return util$940.primitiveAccessor.apply(this, [
        'requireupdate',
        value$951
    ]);
};
Type$942.prototype[util$940.camelize('deleteoutput')] = function (value$952) {
    return util$940.primitiveAccessor.apply(this, [
        'deleteoutput',
        value$952
    ]);
};
Type$942.prototype[util$940.camelize('skip-if-no-test-files')] = function (value$953) {
    return util$940.primitiveAccessor.apply(this, [
        'skip-if-no-test-files',
        value$953
    ]);
};
Type$942.prototype[util$940.camelize('stoponerror')] = function (value$954) {
    return util$940.primitiveAccessor.apply(this, [
        'stoponerror',
        value$954
    ]);
};