'use strict';
var util$940 = require('../../../misc/util.js');
var Sonar$942 = function (upper$949, obj$950) {
    this.upper = upper$949;
    this.obj = obj$950;
};
Sonar$942.prototype.up = function () {
    return this.upper;
};
Sonar$942.prototype.and = Sonar$942.prototype.up;
module.exports = Sonar$942;
Sonar$942.prototype[util$940.camelize('sonar-name')] = function (value$951) {
    return util$940.primitiveAccessor.apply(this, [
        'sonar-name',
        value$951
    ]);
};
Sonar$942.prototype[util$940.camelize('task')] = function (value$952) {
    return util$940.primitiveAccessor.apply(this, [
        'task',
        value$952
    ]);
};
Sonar$942.prototype[util$940.camelize('project')] = function (value$953) {
    return util$940.primitiveAccessor.apply(this, [
        'project',
        value$953
    ]);
};
Sonar$942.prototype[util$940.camelize('properties')] = function (value$954) {
    return util$940.primitiveAccessor.apply(this, [
        'properties',
        value$954
    ]);
};
Sonar$942.prototype[util$940.camelize('java-opts')] = function (value$955) {
    return util$940.primitiveAccessor.apply(this, [
        'java-opts',
        value$955
    ]);
};
Sonar$942.prototype[util$940.camelize('jdk')] = function (value$956) {
    return util$940.primitiveAccessor.apply(this, [
        'jdk',
        value$956
    ]);
};