'use strict';
var util$940 = require('../../../misc/util.js');
var ExtendedChoice$942 = function (upper$955, obj$956) {
    this.upper = upper$955;
    this.obj = obj$956;
};
ExtendedChoice$942.prototype.up = function () {
    return this.upper;
};
ExtendedChoice$942.prototype.and = ExtendedChoice$942.prototype.up;
module.exports = ExtendedChoice$942;
ExtendedChoice$942.prototype[util$940.camelize('name')] = function (value$957) {
    return util$940.primitiveAccessor.apply(this, [
        'name',
        value$957
    ]);
};
ExtendedChoice$942.prototype[util$940.camelize('description')] = function (value$958) {
    return util$940.primitiveAccessor.apply(this, [
        'description',
        value$958
    ]);
};
ExtendedChoice$942.prototype[util$940.camelize('property-file')] = function (value$959) {
    return util$940.primitiveAccessor.apply(this, [
        'property-file',
        value$959
    ]);
};
ExtendedChoice$942.prototype[util$940.camelize('property-key')] = function (value$960) {
    return util$940.primitiveAccessor.apply(this, [
        'property-key',
        value$960
    ]);
};
ExtendedChoice$942.prototype[util$940.camelize('quote-value')] = function (value$961) {
    return util$940.primitiveAccessor.apply(this, [
        'quote-value',
        value$961
    ]);
};
ExtendedChoice$942.prototype[util$940.camelize('visible-items')] = function (value$962) {
    return util$940.primitiveAccessor.apply(this, [
        'visible-items',
        value$962
    ]);
};
ExtendedChoice$942.prototype[util$940.camelize('type')] = function (value$963) {
    return util$940.primitiveAccessor.apply(this, [
        'type',
        value$963
    ]);
};
ExtendedChoice$942.prototype[util$940.camelize('value')] = function (value$964) {
    return util$940.primitiveAccessor.apply(this, [
        'value',
        value$964
    ]);
};
ExtendedChoice$942.prototype[util$940.camelize('default-value')] = function (value$965) {
    return util$940.primitiveAccessor.apply(this, [
        'default-value',
        value$965
    ]);
};
ExtendedChoice$942.prototype[util$940.camelize('default-property-file')] = function (value$966) {
    return util$940.primitiveAccessor.apply(this, [
        'default-property-file',
        value$966
    ]);
};
ExtendedChoice$942.prototype[util$940.camelize('default-property-key')] = function (value$967) {
    return util$940.primitiveAccessor.apply(this, [
        'default-property-key',
        value$967
    ]);
};
ExtendedChoice$942.prototype[util$940.camelize('multi-select-delimiter')] = function (value$968) {
    return util$940.primitiveAccessor.apply(this, [
        'multi-select-delimiter',
        value$968
    ]);
};