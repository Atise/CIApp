'use strict';
var util$940 = require('../../../misc/util.js');
var Properties$942 = require('./ant/properties.js');
var Ant$943 = function (upper$949, obj$950) {
    this.upper = upper$949;
    this.obj = obj$950;
};
Ant$943.prototype.up = function () {
    return this.upper;
};
Ant$943.prototype.and = Ant$943.prototype.up;
module.exports = Ant$943;
Ant$943.prototype[util$940.camelize('targets')] = function (value$951) {
    return util$940.primitiveAccessor.apply(this, [
        'targets',
        value$951
    ]);
};
Ant$943.prototype[util$940.camelize('buildfile')] = function (value$952) {
    return util$940.primitiveAccessor.apply(this, [
        'buildfile',
        value$952
    ]);
};
Ant$943.prototype[util$940.camelize('properties')] = function (value$953) {
    return util$940.objectAccessor.apply(this, [
        'properties',
        Properties$942,
        value$953
    ]);
};
Ant$943.prototype[util$940.camelize('ant-name')] = function (value$954) {
    return util$940.primitiveAccessor.apply(this, [
        'ant-name',
        value$954
    ]);
};
Ant$943.prototype[util$940.camelize('java-opts')] = function (value$955) {
    return util$940.primitiveAccessor.apply(this, [
        'java-opts',
        value$955
    ]);
};