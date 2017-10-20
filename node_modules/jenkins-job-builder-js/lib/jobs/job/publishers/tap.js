'use strict';
var util$940 = require('../../../misc/util.js');
var Tap$942 = function (upper$950, obj$951) {
    this.upper = upper$950;
    this.obj = obj$951;
};
Tap$942.prototype.up = function () {
    return this.upper;
};
Tap$942.prototype.and = Tap$942.prototype.up;
module.exports = Tap$942;
Tap$942.prototype[util$940.camelize('results')] = function (value$952) {
    return util$940.primitiveAccessor.apply(this, [
        'results',
        value$952
    ]);
};
Tap$942.prototype[util$940.camelize('fail-if-no-results')] = function (value$953) {
    return util$940.primitiveAccessor.apply(this, [
        'fail-if-no-results',
        value$953
    ]);
};
Tap$942.prototype[util$940.camelize('failed-tests-mark-build-as-failure')] = function (value$954) {
    return util$940.primitiveAccessor.apply(this, [
        'failed-tests-mark-build-as-failure',
        value$954
    ]);
};
Tap$942.prototype[util$940.camelize('output-tap-to-console')] = function (value$955) {
    return util$940.primitiveAccessor.apply(this, [
        'output-tap-to-console',
        value$955
    ]);
};
Tap$942.prototype[util$940.camelize('enable-subtests')] = function (value$956) {
    return util$940.primitiveAccessor.apply(this, [
        'enable-subtests',
        value$956
    ]);
};
Tap$942.prototype[util$940.camelize('discard-old-reports')] = function (value$957) {
    return util$940.primitiveAccessor.apply(this, [
        'discard-old-reports',
        value$957
    ]);
};
Tap$942.prototype[util$940.camelize('todo-is-failure')] = function (value$958) {
    return util$940.primitiveAccessor.apply(this, [
        'todo-is-failure',
        value$958
    ]);
};