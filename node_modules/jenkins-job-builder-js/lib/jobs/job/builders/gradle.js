'use strict';
var util$940 = require('../../../misc/util.js');
var Gradle$942 = function (upper$950, obj$951) {
    this.upper = upper$950;
    this.obj = obj$951;
};
Gradle$942.prototype.up = function () {
    return this.upper;
};
Gradle$942.prototype.and = Gradle$942.prototype.up;
module.exports = Gradle$942;
Gradle$942.prototype[util$940.camelize('tasks')] = function (value$952) {
    return util$940.primitiveAccessor.apply(this, [
        'tasks',
        value$952
    ]);
};
Gradle$942.prototype[util$940.camelize('gradle-name')] = function (value$953) {
    return util$940.primitiveAccessor.apply(this, [
        'gradle-name',
        value$953
    ]);
};
Gradle$942.prototype[util$940.camelize('wrapper')] = function (value$954) {
    return util$940.primitiveAccessor.apply(this, [
        'wrapper',
        value$954
    ]);
};
Gradle$942.prototype[util$940.camelize('executable')] = function (value$955) {
    return util$940.primitiveAccessor.apply(this, [
        'executable',
        value$955
    ]);
};
Gradle$942.prototype[util$940.camelize('switches')] = function (value$956) {
    return util$940.primitiveArrayAccessor.apply(this, [
        'switches',
        value$956
    ]);
};
Gradle$942.prototype[util$940.camelize('use-root-dir')] = function (value$957) {
    return util$940.primitiveAccessor.apply(this, [
        'use-root-dir',
        value$957
    ]);
};
Gradle$942.prototype[util$940.camelize('root-build-script-dir')] = function (value$958) {
    return util$940.primitiveAccessor.apply(this, [
        'root-build-script-dir',
        value$958
    ]);
};