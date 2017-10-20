'use strict';
var util$940 = require('../../../misc/util.js');
var ChangeAssemblyVersion$942 = function (upper$945, obj$946) {
    this.upper = upper$945;
    this.obj = obj$946;
};
ChangeAssemblyVersion$942.prototype.up = function () {
    return this.upper;
};
ChangeAssemblyVersion$942.prototype.and = ChangeAssemblyVersion$942.prototype.up;
module.exports = ChangeAssemblyVersion$942;
ChangeAssemblyVersion$942.prototype[util$940.camelize('version')] = function (value$947) {
    return util$940.primitiveAccessor.apply(this, [
        'version',
        value$947
    ]);
};
ChangeAssemblyVersion$942.prototype[util$940.camelize('assembly-file')] = function (value$948) {
    return util$940.primitiveAccessor.apply(this, [
        'assembly-file',
        value$948
    ]);
};