'use strict';
var util$940 = require('../../../misc/util.js');
var ConditionOperand$941 = require('./conditional-step/condition-operand.js');
var ConditionalStep$943 = function (upper$956, obj$957) {
    this.upper = upper$956;
    this.obj = obj$957;
};
ConditionalStep$943.prototype.up = function () {
    return this.upper;
};
ConditionalStep$943.prototype.and = ConditionalStep$943.prototype.up;
module.exports = ConditionalStep$943;
ConditionalStep$943.prototype[util$940.camelize('condition-kind')] = function (value$958) {
    return util$940.primitiveAccessor.apply(this, [
        'condition-kind',
        value$958
    ]);
};
ConditionalStep$943.prototype[util$940.camelize('condition-expression')] = function (value$959) {
    return util$940.primitiveAccessor.apply(this, [
        'condition-expression',
        value$959
    ]);
};
ConditionalStep$943.prototype[util$940.camelize('condition-string1')] = function (value$960) {
    return util$940.primitiveAccessor.apply(this, [
        'condition-string1',
        value$960
    ]);
};
ConditionalStep$943.prototype[util$940.camelize('condition-string2')] = function (value$961) {
    return util$940.primitiveAccessor.apply(this, [
        'condition-string2',
        value$961
    ]);
};
ConditionalStep$943.prototype[util$940.camelize('condition-case-insensitive')] = function (value$962) {
    return util$940.primitiveAccessor.apply(this, [
        'condition-case-insensitive',
        value$962
    ]);
};
ConditionalStep$943.prototype[util$940.camelize('condition-worst')] = function (value$963) {
    return util$940.primitiveAccessor.apply(this, [
        'condition-worst',
        value$963
    ]);
};
ConditionalStep$943.prototype[util$940.camelize('condition-best')] = function (value$964) {
    return util$940.primitiveAccessor.apply(this, [
        'condition-best',
        value$964
    ]);
};
ConditionalStep$943.prototype[util$940.camelize('condition-command')] = function (value$965) {
    return util$940.primitiveAccessor.apply(this, [
        'condition-command',
        value$965
    ]);
};
;
ConditionalStep$943.prototype[util$940.camelize('condition-filename')] = function (value$966) {
    return util$940.primitiveAccessor.apply(this, [
        'condition-filename',
        value$966
    ]);
};
ConditionalStep$943.prototype[util$940.camelize('condition-basedir')] = function (value$967) {
    return util$940.primitiveAccessor.apply(this, [
        'condition-basedir',
        value$967
    ]);
};
ConditionalStep$943.prototype[util$940.camelize('condition-operand')] = function (value$968) {
    return util$940.objectAccessor.apply(this, [
        'condition-operand',
        ConditionOperand$941,
        value$968
    ]);
};
ConditionalStep$943.prototype[util$940.camelize('on-evaluation-failure')] = function (value$969) {
    return util$940.primitiveAccessor.apply(this, [
        'on-evaluation-failure',
        value$969
    ]);
};
// necessary duplication
ConditionalStep$943.prototype.steps = function (value$970) {
    if (value$970 === undefined) {
        // always create a fresh array to enforce declarative code style
        this.obj.steps = [];
        var // avoid circular dependency
        Builders$971 = require('../builders.js');
        return new Builders$971(this, this.obj.steps);
    } else {
        throw 'TODO: setter is not implemented';
    }
};