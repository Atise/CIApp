'use strict';
var util$940 = require('../../misc/util.js');
var LogRotate$942 = function (upper$947, obj$948) {
    this.upper = upper$947;
    this.obj = obj$948;
};
LogRotate$942.prototype.up = function () {
    return this.upper;
};
LogRotate$942.prototype.and = LogRotate$942.prototype.up;
module.exports = LogRotate$942;
LogRotate$942.prototype[util$940.camelize('daysToKeep')] = function (value$949) {
    return util$940.primitiveAccessor.apply(this, [
        'daysToKeep',
        value$949
    ]);
};
LogRotate$942.prototype[util$940.camelize('numToKeep')] = function (value$950) {
    return util$940.primitiveAccessor.apply(this, [
        'numToKeep',
        value$950
    ]);
};
LogRotate$942.prototype[util$940.camelize('artifactDaysToKeep')] = function (value$951) {
    return util$940.primitiveAccessor.apply(this, [
        'artifactDaysToKeep',
        value$951
    ]);
};
LogRotate$942.prototype[util$940.camelize('artifactNumToKeep')] = function (value$952) {
    return util$940.primitiveAccessor.apply(this, [
        'artifactNumToKeep',
        value$952
    ]);
};