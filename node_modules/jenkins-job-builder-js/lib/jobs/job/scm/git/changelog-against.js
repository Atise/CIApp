'use strict';
var util$940 = require('../../../../misc/util.js');
var ChangeLogAgainst$942 = function (upper$945, obj$946) {
    this.upper = upper$945;
    this.obj = obj$946;
};
ChangeLogAgainst$942.prototype.up = function () {
    return this.upper;
};
ChangeLogAgainst$942.prototype.and = ChangeLogAgainst$942.prototype.up;
module.exports = ChangeLogAgainst$942;
ChangeLogAgainst$942.prototype[util$940.camelize('remote')] = function (value$947) {
    return util$940.primitiveAccessor.apply(this, [
        'remote',
        value$947
    ]);
};
ChangeLogAgainst$942.prototype[util$940.camelize('branch')] = function (value$948) {
    return util$940.primitiveAccessor.apply(this, [
        'branch',
        value$948
    ]);
};