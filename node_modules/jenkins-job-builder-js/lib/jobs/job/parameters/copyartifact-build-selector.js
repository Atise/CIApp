'use strict';
var util$940 = require('../../../misc/util.js');
var CopyArtifacBuildSelector$942 = function (upper$946, obj$947) {
    this.upper = upper$946;
    this.obj = obj$947;
};
CopyArtifacBuildSelector$942.prototype.up = function () {
    return this.upper;
};
CopyArtifacBuildSelector$942.prototype.and = CopyArtifacBuildSelector$942.prototype.up;
module.exports = CopyArtifacBuildSelector$942;
CopyArtifacBuildSelector$942.prototype[util$940.camelize('name')] = function (value$948) {
    return util$940.primitiveAccessor.apply(this, [
        'name',
        value$948
    ]);
};
CopyArtifacBuildSelector$942.prototype[util$940.camelize('description')] = function (value$949) {
    return util$940.primitiveAccessor.apply(this, [
        'description',
        value$949
    ]);
};
CopyArtifacBuildSelector$942.prototype[util$940.camelize('which-build')] = function (value$950) {
    return util$940.primitiveAccessor.apply(this, [
        'which-build',
        value$950
    ]);
};