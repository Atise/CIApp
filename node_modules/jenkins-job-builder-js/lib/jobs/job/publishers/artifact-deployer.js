'use strict';
var util$940 = require('../../../misc/util.js');
var Entry$941 = require('./artifact-deployer/entry.js');
var ArtifactDeployer$943 = function (upper$946, obj$947) {
    this.upper = upper$946;
    this.obj = obj$947;
};
ArtifactDeployer$943.prototype.up = function () {
    return this.upper;
};
ArtifactDeployer$943.prototype.and = ArtifactDeployer$943.prototype.up;
module.exports = ArtifactDeployer$943;
ArtifactDeployer$943.prototype[util$940.camelize('entries')] = function (value$948) {
    return util$940.objectArrayAccessor.apply(this, [
        'entries',
        Entry$941,
        value$948
    ]);
};
ArtifactDeployer$943.prototype[util$940.camelize('deploy-if-fail')] = function (value$949) {
    return util$940.primitiveAccessor.apply(this, [
        'deploy-if-fail',
        value$949
    ]);
};