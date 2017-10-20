'use strict';
var util$940 = require('../../../misc/util.js');
var SBT$942 = function (upper$948, obj$949) {
    this.upper = upper$948;
    this.obj = obj$949;
};
SBT$942.prototype.up = function () {
    return this.upper;
};
SBT$942.prototype.and = SBT$942.prototype.up;
module.exports = SBT$942;
SBT$942.prototype[util$940.camelize('name')] = function (value$950) {
    return util$940.primitiveAccessor.apply(this, [
        'name',
        value$950
    ]);
};
SBT$942.prototype[util$940.camelize('jvm-flags')] = function (value$951) {
    return util$940.primitiveAccessor.apply(this, [
        'jvm-flags',
        value$951
    ]);
};
SBT$942.prototype[util$940.camelize('actions')] = function (value$952) {
    return util$940.primitiveAccessor.apply(this, [
        'actions',
        value$952
    ]);
};
SBT$942.prototype[util$940.camelize('sbt-flags')] = function (value$953) {
    return util$940.primitiveAccessor.apply(this, [
        'sbt-flags',
        value$953
    ]);
};
SBT$942.prototype[util$940.camelize('subdir-path')] = function (value$954) {
    return util$940.primitiveAccessor.apply(this, [
        'subdir-path',
        value$954
    ]);
};