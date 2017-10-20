'use strict';
var util$940 = require('../../../misc/util.js');
var Thresholds$941 = require('./valgrind/thresholds.js');
var Valgrind$943 = function (upper$950, obj$951) {
    this.upper = upper$950;
    this.obj = obj$951;
};
Valgrind$943.prototype.up = function () {
    return this.upper;
};
Valgrind$943.prototype.and = Valgrind$943.prototype.up;
module.exports = Valgrind$943;
Valgrind$943.prototype[util$940.camelize('pattern')] = function (value$952) {
    return util$940.primitiveAccessor.apply(this, [
        'pattern',
        value$952
    ]);
};
Valgrind$943.prototype[util$940.camelize('thresholds')] = function (value$953) {
    return util$940.objectAccessor.apply(this, [
        'thresholds',
        Thresholds$941,
        value$953
    ]);
};
Valgrind$943.prototype[util$940.camelize('fail-no-reports')] = function (value$954) {
    return util$940.primitiveAccessor.apply(this, [
        'fail-no-reports',
        value$954
    ]);
};
Valgrind$943.prototype[util$940.camelize('fail-invalid-reports')] = function (value$955) {
    return util$940.primitiveAccessor.apply(this, [
        'fail-invalid-reports',
        value$955
    ]);
};
Valgrind$943.prototype[util$940.camelize('publish-if-aborted')] = function (value$956) {
    return util$940.primitiveAccessor.apply(this, [
        'publish-if-aborted',
        value$956
    ]);
};
Valgrind$943.prototype[util$940.camelize('publish-if-failed')] = function (value$957) {
    return util$940.primitiveAccessor.apply(this, [
        'publish-if-failed',
        value$957
    ]);
};