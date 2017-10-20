'use strict';
var util$940 = require('../../misc/util.js');
var Touchstone$941 = require('./execution-strategy/touchstone.js');
var ExecutionStrategy$943 = function (upper$947, obj$948) {
    this.upper = upper$947;
    this.obj = obj$948;
};
ExecutionStrategy$943.prototype.up = function () {
    return this.upper;
};
ExecutionStrategy$943.prototype.and = ExecutionStrategy$943.prototype.up;
module.exports = ExecutionStrategy$943;
ExecutionStrategy$943.prototype[util$940.camelize('combination-filter')] = function (value$949) {
    return util$940.primitiveAccessor.apply(this, [
        'combination-filter',
        value$949
    ]);
};
ExecutionStrategy$943.prototype[util$940.camelize('sequential')] = function (value$950) {
    return util$940.primitiveAccessor.apply(this, [
        'sequential',
        value$950
    ]);
};
ExecutionStrategy$943.prototype[util$940.camelize('touchstone')] = function (value$951) {
    return util$940.objectAccessor.apply(this, [
        'touchstone',
        Touchstone$941,
        value$951
    ]);
};