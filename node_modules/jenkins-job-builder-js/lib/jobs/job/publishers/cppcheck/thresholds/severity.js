'use strict';
var util$940 = require('../../../../../misc/util.js');
var Severity$942 = function (upper$946, obj$947) {
    this.upper = upper$946;
    this.obj = obj$947;
};
Severity$942.prototype.up = function () {
    return this.upper;
};
Severity$942.prototype.and = Severity$942.prototype.up;
module.exports = Severity$942;
Severity$942.prototype[util$940.camelize('error')] = function (value$948) {
    return util$940.primitiveAccessor.apply(this, [
        'error',
        value$948
    ]);
};
Severity$942.prototype[util$940.camelize('warning')] = function (value$949) {
    return util$940.primitiveAccessor.apply(this, [
        'warning',
        value$949
    ]);
};
Severity$942.prototype[util$940.camelize('information')] = function (value$950) {
    return util$940.primitiveAccessor.apply(this, [
        'information',
        value$950
    ]);
};