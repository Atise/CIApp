'use strict';
var util$940 = require('../../../misc/util.js');
var DSL$942 = function (upper$950, obj$951) {
    this.upper = upper$950;
    this.obj = obj$951;
};
DSL$942.prototype.up = function () {
    return this.upper;
};
DSL$942.prototype.and = DSL$942.prototype.up;
module.exports = DSL$942;
DSL$942.prototype[util$940.camelize('script-text')] = function (value$952) {
    return util$940.primitiveAccessor.apply(this, [
        'script-text',
        value$952
    ]);
};
DSL$942.prototype[util$940.camelize('target')] = function (value$953) {
    return util$940.primitiveAccessor.apply(this, [
        'target',
        value$953
    ]);
};
DSL$942.prototype[util$940.camelize('ignore-existing')] = function (value$954) {
    return util$940.primitiveAccessor.apply(this, [
        'ignore-existing',
        value$954
    ]);
};
DSL$942.prototype[util$940.camelize('removed-job-action')] = function (value$955) {
    return util$940.primitiveAccessor.apply(this, [
        'removed-job-action',
        value$955
    ]);
};
DSL$942.prototype[util$940.camelize('removed-view-action')] = function (value$956) {
    return util$940.primitiveAccessor.apply(this, [
        'removed-view-action',
        value$956
    ]);
};
DSL$942.prototype[util$940.camelize('lookup-strategy')] = function (value$957) {
    return util$940.primitiveAccessor.apply(this, [
        'lookup-strategy',
        value$957
    ]);
};
DSL$942.prototype[util$940.camelize('additional-classpath')] = function (value$958) {
    return util$940.primitiveAccessor.apply(this, [
        'additional-classpath',
        value$958
    ]);
};