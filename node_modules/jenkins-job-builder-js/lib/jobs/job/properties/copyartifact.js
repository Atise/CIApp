'use strict';
var util$940 = require('../../../misc/util.js');
var CopyArtifact$942 = function (upper$944, obj$945) {
    this.upper = upper$944;
    this.obj = obj$945;
};
CopyArtifact$942.prototype.up = function () {
    return this.upper;
};
CopyArtifact$942.prototype.and = CopyArtifact$942.prototype.up;
module.exports = CopyArtifact$942;
CopyArtifact$942.prototype[util$940.camelize('projects')] = function (value$946) {
    return util$940.primitiveAccessor.apply(this, [
        'projects',
        value$946
    ]);
};