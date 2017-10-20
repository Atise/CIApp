'use strict';
var util$940 = require('../../../../../misc/util.js');
var MonitorKeys$941 = require('./monitor-keys.js');
var CheckContent$943 = function (upper$953, array$954) {
    this.upper = upper$953;
    this.array = array$954;
};
CheckContent$943.prototype.up = function () {
    return this.upper;
};
CheckContent$943.prototype.and = CheckContent$943.prototype.up;
module.exports = CheckContent$943;
CheckContent$943.prototype[util$940.camelize('simple')] = function (value$955) {
    return util$940.keyedPrimitiveElementAccessor.apply(this, [
        'simple',
        value$955
    ]);
};
CheckContent$943.prototype[util$940.camelize('jar')] = function (value$956) {
    return util$940.keyedPrimitiveElementAccessor.apply(this, [
        'jar',
        value$956
    ]);
};
CheckContent$943.prototype[util$940.camelize('tar')] = function (value$957) {
    return util$940.keyedPrimitiveElementAccessor.apply(this, [
        'tar',
        value$957
    ]);
};
CheckContent$943.prototype[util$940.camelize('zip')] = function (value$958) {
    return util$940.keyedPrimitiveElementAccessor.apply(this, [
        'zip',
        value$958
    ]);
};
CheckContent$943.prototype[util$940.camelize('source-manifest')] = function (value$959) {
    return util$940.keyedArrayElementAccessor.apply(this, [
        'source-manifest',
        MonitorKeys$941,
        value$959
    ]);
};
CheckContent$943.prototype[util$940.camelize('jar-manifest')] = function (value$960) {
    return util$940.keyedArrayElementAccessor.apply(this, [
        'jar-manifest',
        MonitorKeys$941,
        value$960
    ]);
};
CheckContent$943.prototype[util$940.camelize('properties')] = function (value$961) {
    return util$940.keyedArrayElementAccessor.apply(this, [
        'properties',
        MonitorKeys$941,
        value$961
    ]);
};
CheckContent$943.prototype[util$940.camelize('xml')] = function (value$962) {
    return util$940.keyedPrimitiveArrayElementAccessor.apply(this, [
        'xml',
        value$962
    ]);
};
CheckContent$943.prototype[util$940.camelize('text')] = function (value$963) {
    return util$940.keyedPrimitiveArrayElementAccessor.apply(this, [
        'text',
        value$963
    ]);
};