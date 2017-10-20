'use strict';
var util$940 = require('../../../misc/util.js');
var Workspace$942 = function (upper$945, obj$946) {
    this.upper = upper$945;
    this.obj = obj$946;
};
Workspace$942.prototype.up = function () {
    return this.upper;
};
Workspace$942.prototype.and = Workspace$942.prototype.up;
module.exports = Workspace$942;
Workspace$942.prototype[util$940.camelize('parent-job')] = function (value$947) {
    return util$940.primitiveAccessor.apply(this, [
        'parent-job',
        value$947
    ]);
};
Workspace$942.prototype[util$940.camelize('criteria')] = function (value$948) {
    return util$940.primitiveAccessor.apply(this, [
        'criteria',
        value$948
    ]);
};