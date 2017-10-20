'use strict';
var util$940 = require('../../../../misc/util.js');
var Severity$941 = require('./thresholds/severity.js');
var Thresholds$943 = function (upper$949, obj$950) {
    this.upper = upper$949;
    this.obj = obj$950;
};
Thresholds$943.prototype.up = function () {
    return this.upper;
};
Thresholds$943.prototype.and = Thresholds$943.prototype.up;
module.exports = Thresholds$943;
Thresholds$943.prototype[util$940.camelize('unstable')] = function (value$951) {
    return util$940.primitiveAccessor.apply(this, [
        'unstable',
        value$951
    ]);
};
Thresholds$943.prototype[util$940.camelize('new-unstable')] = function (value$952) {
    return util$940.primitiveAccessor.apply(this, [
        'new-unstable',
        value$952
    ]);
};
Thresholds$943.prototype[util$940.camelize('failure')] = function (value$953) {
    return util$940.primitiveAccessor.apply(this, [
        'failure',
        value$953
    ]);
};
Thresholds$943.prototype[util$940.camelize('new-failure')] = function (value$954) {
    return util$940.primitiveAccessor.apply(this, [
        'new-failure',
        value$954
    ]);
};
Thresholds$943.prototype[util$940.camelize('severity')] = function (value$955) {
    return util$940.objectAccessor.apply(this, [
        'severity',
        Severity$941,
        value$955
    ]);
};