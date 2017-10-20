'use strict';
var util$940 = require('../../../../misc/util.js');
var ConditionOperand$942 = function (upper$954, obj$955) {
    this.upper = upper$954;
    this.obj = obj$955;
};
ConditionOperand$942.prototype.up = function () {
    return this.upper;
};
ConditionOperand$942.prototype.and = ConditionOperand$942.prototype.up;
module.exports = ConditionOperand$942;
ConditionOperand$942.prototype[util$940.camelize('condition-kind')] = function (value$956) {
    return util$940.primitiveAccessor.apply(this, [
        'condition-kind',
        value$956
    ]);
};
ConditionOperand$942.prototype[util$940.camelize('condition-expression')] = function (value$957) {
    return util$940.primitiveAccessor.apply(this, [
        'condition-expression',
        value$957
    ]);
};
ConditionOperand$942.prototype[util$940.camelize('condition-string1')] = function (value$958) {
    return util$940.primitiveAccessor.apply(this, [
        'condition-string1',
        value$958
    ]);
};
ConditionOperand$942.prototype[util$940.camelize('condition-string2')] = function (value$959) {
    return util$940.primitiveAccessor.apply(this, [
        'condition-string2',
        value$959
    ]);
};
ConditionOperand$942.prototype[util$940.camelize('condition-case-insensitive')] = function (value$960) {
    return util$940.primitiveAccessor.apply(this, [
        'condition-case-insensitive',
        value$960
    ]);
};
ConditionOperand$942.prototype[util$940.camelize('condition-worst')] = function (value$961) {
    return util$940.primitiveAccessor.apply(this, [
        'condition-worst',
        value$961
    ]);
};
ConditionOperand$942.prototype[util$940.camelize('condition-best')] = function (value$962) {
    return util$940.primitiveAccessor.apply(this, [
        'condition-best',
        value$962
    ]);
};
ConditionOperand$942.prototype[util$940.camelize('condition-command')] = function (value$963) {
    return util$940.primitiveAccessor.apply(this, [
        'condition-command',
        value$963
    ]);
};
;
ConditionOperand$942.prototype[util$940.camelize('condition-filename')] = function (value$964) {
    return util$940.primitiveAccessor.apply(this, [
        'condition-filename',
        value$964
    ]);
};
ConditionOperand$942.prototype[util$940.camelize('condition-basedir')] = function (value$965) {
    return util$940.primitiveAccessor.apply(this, [
        'condition-basedir',
        value$965
    ]);
};
ConditionOperand$942.prototype[util$940.camelize('condition-operand')] = function (value$966) {
    return util$940.objectAccessor.apply(this, [
        'condition-operand',
        ConditionOperand$942,
        value$966
    ]);
};