'use strict';
var util$940 = require('../../../misc/util.js');
var CloneWorkspace$942 = function (upper$948, obj$949) {
    this.upper = upper$948;
    this.obj = obj$949;
};
CloneWorkspace$942.prototype.up = function () {
    return this.upper;
};
CloneWorkspace$942.prototype.and = CloneWorkspace$942.prototype.up;
module.exports = CloneWorkspace$942;
CloneWorkspace$942.prototype[util$940.camelize('workspace-glob')] = function (value$950) {
    return util$940.primitiveAccessor.apply(this, [
        'workspace-glob',
        value$950
    ]);
};
CloneWorkspace$942.prototype[util$940.camelize('workspace-exclude-glob')] = function (value$951) {
    return util$940.primitiveAccessor.apply(this, [
        'workspace-exclude-glob',
        value$951
    ]);
};
CloneWorkspace$942.prototype[util$940.camelize('criteria')] = function (value$952) {
    return util$940.primitiveAccessor.apply(this, [
        'criteria',
        value$952
    ]);
};
CloneWorkspace$942.prototype[util$940.camelize('archive-method')] = function (value$953) {
    return util$940.primitiveAccessor.apply(this, [
        'archive-method',
        value$953
    ]);
};
CloneWorkspace$942.prototype[util$940.camelize('override-default-excludes')] = function (value$954) {
    return util$940.primitiveAccessor.apply(this, [
        'override-default-excludes',
        value$954
    ]);
};