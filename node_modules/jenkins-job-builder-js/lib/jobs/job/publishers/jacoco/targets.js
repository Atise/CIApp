'use strict';
var util$940 = require('../../../../misc/util.js');
var Target$941 = require('./target.js');
var Targets$943 = function (upper$950, array$951) {
    this.upper = upper$950;
    this.array = array$951;
};
Targets$943.prototype.up = function () {
    return this.upper;
};
Targets$943.prototype.and = Targets$943.prototype.up;
module.exports = Targets$943;
Targets$943.prototype[util$940.camelize('instruction')] = function (value$952) {
    return util$940.keyedObjectElementAccessor.apply(this, [
        'instruction',
        Target$941,
        value$952
    ]);
};
Targets$943.prototype[util$940.camelize('branch')] = function (value$953) {
    return util$940.keyedObjectElementAccessor.apply(this, [
        'branch',
        Target$941,
        value$953
    ]);
};
Targets$943.prototype[util$940.camelize('complexity')] = function (value$954) {
    return util$940.keyedObjectElementAccessor.apply(this, [
        'complexity',
        Target$941,
        value$954
    ]);
};
Targets$943.prototype[util$940.camelize('line')] = function (value$955) {
    return util$940.keyedObjectElementAccessor.apply(this, [
        'line',
        Target$941,
        value$955
    ]);
};
Targets$943.prototype[util$940.camelize('method')] = function (value$956) {
    return util$940.keyedObjectElementAccessor.apply(this, [
        'method',
        Target$941,
        value$956
    ]);
};
Targets$943.prototype[util$940.camelize('class')] = function (value$957) {
    return util$940.keyedObjectElementAccessor.apply(this, [
        'class',
        Target$941,
        value$957
    ]);
};