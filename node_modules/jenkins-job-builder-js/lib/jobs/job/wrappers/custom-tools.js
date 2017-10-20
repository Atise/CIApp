'use strict';
var util$940 = require('../../../misc/util.js');
var CustomTools$942 = function (upper$946, obj$947) {
    this.upper = upper$946;
    this.obj = obj$947;
};
CustomTools$942.prototype.up = function () {
    return this.upper;
};
CustomTools$942.prototype.and = CustomTools$942.prototype.up;
module.exports = CustomTools$942;
CustomTools$942.prototype[util$940.camelize('tools')] = function (value$948) {
    return util$940.primitiveArrayAccessor.apply(this, [
        'tools',
        value$948
    ]);
};
CustomTools$942.prototype[util$940.camelize('skip-master-install')] = function (value$949) {
    return util$940.primitiveAccessor.apply(this, [
        'skip-master-install',
        value$949
    ]);
};
CustomTools$942.prototype[util$940.camelize('convert-homes-to-upper')] = function (value$950) {
    return util$940.primitiveAccessor.apply(this, [
        'convert-homes-to-upper',
        value$950
    ]);
};