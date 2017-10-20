'use strict';
var util$940 = require('../../../../misc/util.js');
var Pundle$942 = function (upper$945, obj$946) {
    this.upper = upper$945;
    this.obj = obj$946;
};
Pundle$942.prototype.up = function () {
    return this.upper;
};
Pundle$942.prototype.and = Pundle$942.prototype.up;
module.exports = Pundle$942;
Pundle$942.prototype[util$940.camelize('package')] = function (value$947) {
    return util$940.primitiveAccessor.apply(this, [
        'package',
        value$947
    ]);
};
Pundle$942.prototype[util$940.camelize('bundle')] = function (value$948) {
    return util$940.primitiveAccessor.apply(this, [
        'bundle',
        value$948
    ]);
};