'use strict';
var util$940 = require('../../../misc/util.js');
var ConditionalPublisher$942 = function (upper$951, obj$952) {
    this.upper = upper$951;
    this.obj = obj$952;
};
ConditionalPublisher$942.prototype.up = function () {
    return this.upper;
};
ConditionalPublisher$942.prototype.and = ConditionalPublisher$942.prototype.up;
module.exports = ConditionalPublisher$942;
ConditionalPublisher$942.prototype[util$940.camelize('condition-kind')] = function (value$953) {
    return util$940.primitiveAccessor.apply(this, [
        'condition-kind',
        value$953
    ]);
};
ConditionalPublisher$942.prototype[util$940.camelize('condition-expression')] = function (value$954) {
    return util$940.primitiveAccessor.apply(this, [
        'condition-expression',
        value$954
    ]);
};
ConditionalPublisher$942.prototype[util$940.camelize('condition-worst')] = function (value$955) {
    return util$940.primitiveAccessor.apply(this, [
        'condition-worst',
        value$955
    ]);
};
ConditionalPublisher$942.prototype[util$940.camelize('condition-best')] = function (value$956) {
    return util$940.primitiveAccessor.apply(this, [
        'condition-best',
        value$956
    ]);
};
ConditionalPublisher$942.prototype[util$940.camelize('condition-command')] = function (value$957) {
    return util$940.primitiveAccessor.apply(this, [
        'condition-command',
        value$957
    ]);
};
ConditionalPublisher$942.prototype[util$940.camelize('condition-filename')] = function (value$958) {
    return util$940.primitiveAccessor.apply(this, [
        'condition-filename',
        value$958
    ]);
};
ConditionalPublisher$942.prototype[util$940.camelize('condition-basedir')] = function (value$959) {
    return util$940.primitiveAccessor.apply(this, [
        'condition-basedir',
        value$959
    ]);
};
ConditionalPublisher$942.prototype[util$940.camelize('on-evaluation-failure')] = function (value$960) {
    return util$940.primitiveAccessor.apply(this, [
        'on-evaluation-failure',
        value$960
    ]);
};
ConditionalPublisher$942.prototype.action = function (value$961) {
    if (value$961 === undefined) {
        // always create a fresh array to enforce declarative code style
        this.obj.action = [];
        var // avoid circular dependency
        Publishers$962 = require('../publishers.js');
        return new Publishers$962(this, this.obj.action);
    } else {
        throw 'TODO: setter is not implemented';
    }
};