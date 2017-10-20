'use strict';
var util$940 = require('../../../misc/util.js');
var CopyToMaster$942 = function (upper$946, obj$947) {
    this.upper = upper$946;
    this.obj = obj$947;
};
CopyToMaster$942.prototype.up = function () {
    return this.upper;
};
CopyToMaster$942.prototype.and = CopyToMaster$942.prototype.up;
module.exports = CopyToMaster$942;
CopyToMaster$942.prototype[util$940.camelize('includes')] = function (value$948) {
    return util$940.primitiveArrayAccessor.apply(this, [
        'includes',
        value$948
    ]);
};
CopyToMaster$942.prototype[util$940.camelize('excludes')] = function (value$949) {
    return util$940.primitiveArrayAccessor.apply(this, [
        'excludes',
        value$949
    ]);
};
CopyToMaster$942.prototype[util$940.camelize('destination')] = function (value$950) {
    return util$940.primitiveAccessor.apply(this, [
        'destination',
        value$950
    ]);
};