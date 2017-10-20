'use strict';
var util$940 = require('../../../../misc/util.js');
var WorkspaceFileScanner$942 = function (upper$945, obj$946) {
    this.upper = upper$945;
    this.obj = obj$946;
};
WorkspaceFileScanner$942.prototype.up = function () {
    return this.upper;
};
WorkspaceFileScanner$942.prototype.and = WorkspaceFileScanner$942.prototype.up;
module.exports = WorkspaceFileScanner$942;
WorkspaceFileScanner$942.prototype[util$940.camelize('file-pattern')] = function (value$947) {
    return util$940.primitiveAccessor.apply(this, [
        'file-pattern',
        value$947
    ]);
};
WorkspaceFileScanner$942.prototype[util$940.camelize('scanner')] = function (value$948) {
    return util$940.primitiveAccessor.apply(this, [
        'scanner',
        value$948
    ]);
};