'use strict';
var util$940 = require('../../../misc/util.js');
var MavenBuilder$942 = function (upper$947, obj$948) {
    this.upper = upper$947;
    this.obj = obj$948;
};
MavenBuilder$942.prototype.up = function () {
    return this.upper;
};
MavenBuilder$942.prototype.and = MavenBuilder$942.prototype.up;
module.exports = MavenBuilder$942;
MavenBuilder$942.prototype[util$940.camelize('name')] = function (value$949) {
    return util$940.primitiveAccessor.apply(this, [
        'name',
        value$949
    ]);
};
MavenBuilder$942.prototype[util$940.camelize('pom')] = function (value$950) {
    return util$940.primitiveAccessor.apply(this, [
        'pom',
        value$950
    ]);
};
MavenBuilder$942.prototype[util$940.camelize('goals')] = function (value$951) {
    return util$940.primitiveAccessor.apply(this, [
        'goals',
        value$951
    ]);
};
MavenBuilder$942.prototype[util$940.camelize('maven-opts')] = function (value$952) {
    return util$940.primitiveAccessor.apply(this, [
        'maven-opts',
        value$952
    ]);
};