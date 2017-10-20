'use strict';
var util$940 = require('../../../misc/util.js');
var Thresholds$941 = require('./cppcheck/thresholds.js');
var Graph$942 = require('./cppcheck/graph.js');
var CppCheck$944 = function (upper$948, obj$949) {
    this.upper = upper$948;
    this.obj = obj$949;
};
CppCheck$944.prototype.up = function () {
    return this.upper;
};
CppCheck$944.prototype.and = CppCheck$944.prototype.up;
module.exports = CppCheck$944;
CppCheck$944.prototype[util$940.camelize('pattern')] = function (value$950) {
    return util$940.primitiveAccessor.apply(this, [
        'pattern',
        value$950
    ]);
};
CppCheck$944.prototype[util$940.camelize('thresholds')] = function (value$951) {
    return util$940.objectAccessor.apply(this, [
        'thresholds',
        Thresholds$941,
        value$951
    ]);
};
CppCheck$944.prototype[util$940.camelize('graph')] = function (value$952) {
    return util$940.objectAccessor.apply(this, [
        'graph',
        Graph$942,
        value$952
    ]);
};