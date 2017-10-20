'use strict';
var util$940 = require('../../../misc/util.js');
var Artifact$941 = require('./artifact-resolver/artifact.js');
var ArtifactResolver$943 = function (upper$948, obj$949) {
    this.upper = upper$948;
    this.obj = obj$949;
};
ArtifactResolver$943.prototype.up = function () {
    return this.upper;
};
ArtifactResolver$943.prototype.and = ArtifactResolver$943.prototype.up;
module.exports = ArtifactResolver$943;
ArtifactResolver$943.prototype[util$940.camelize('fail-on-error')] = function (value$950) {
    return util$940.primitiveAccessor.apply(this, [
        'fail-on-error',
        value$950
    ]);
};
ArtifactResolver$943.prototype[util$940.camelize('repository-logging')] = function (value$951) {
    return util$940.primitiveAccessor.apply(this, [
        'repository-logging',
        value$951
    ]);
};
ArtifactResolver$943.prototype[util$940.camelize('target-directory')] = function (value$952) {
    return util$940.primitiveAccessor.apply(this, [
        'target-directory',
        value$952
    ]);
};
ArtifactResolver$943.prototype[util$940.camelize('artifacts')] = function (value$953) {
    return util$940.objectArrayAccessor.apply(this, [
        'artifacts',
        Artifact$941,
        value$953
    ]);
};