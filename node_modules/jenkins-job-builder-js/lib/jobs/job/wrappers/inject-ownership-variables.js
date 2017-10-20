'use strict';
var util$940 = require('../../../misc/util.js');
var InjectOwnershipVariables$942 = function (upper$945, obj$946) {
    this.upper = upper$945;
    this.obj = obj$946;
};
InjectOwnershipVariables$942.prototype.up = function () {
    return this.upper;
};
InjectOwnershipVariables$942.prototype.and = InjectOwnershipVariables$942.prototype.up;
module.exports = InjectOwnershipVariables$942;
InjectOwnershipVariables$942.prototype[util$940.camelize('job-variables')] = function (value$947) {
    return util$940.primitiveAccessor.apply(this, [
        'job-variables',
        value$947
    ]);
};
InjectOwnershipVariables$942.prototype[util$940.camelize('node-variables')] = function (value$948) {
    return util$940.primitiveAccessor.apply(this, [
        'node-variables',
        value$948
    ]);
};