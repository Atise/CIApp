'use strict';
var util$940 = require('../../../misc/util.js');
var RootModule$942 = function (upper$945, obj$946) {
    this.upper = upper$945;
    this.obj = obj$946;
};
RootModule$942.prototype.up = function () {
    return this.upper;
};
RootModule$942.prototype.and = RootModule$942.prototype.up;
module.exports = RootModule$942;
RootModule$942.prototype[util$940.camelize('group-id')] = function (value$947) {
    return util$940.primitiveAccessor.apply(this, [
        'group-id',
        value$947
    ]);
};
RootModule$942.prototype[util$940.camelize('artifact-id')] = function (value$948) {
    return util$940.primitiveAccessor.apply(this, [
        'artifact-id',
        value$948
    ]);
};