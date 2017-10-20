'use strict';
var util$940 = require('../../../misc/util.js');
var WorkspaceCleanup$942 = function (upper$946, obj$947) {
    this.upper = upper$946;
    this.obj = obj$947;
};
WorkspaceCleanup$942.prototype.up = function () {
    return this.upper;
};
WorkspaceCleanup$942.prototype.and = WorkspaceCleanup$942.prototype.up;
module.exports = WorkspaceCleanup$942;
WorkspaceCleanup$942.prototype[util$940.camelize('include')] = function (value$948) {
    return util$940.primitiveArrayAccessor.apply(this, [
        'include',
        value$948
    ]);
};
WorkspaceCleanup$942.prototype[util$940.camelize('exclude')] = function (value$949) {
    return util$940.primitiveArrayAccessor.apply(this, [
        'exclude',
        value$949
    ]);
};
WorkspaceCleanup$942.prototype[util$940.camelize('dirmatch')] = function (value$950) {
    return util$940.primitiveAccessor.apply(this, [
        'dirmatch',
        value$950
    ]);
};