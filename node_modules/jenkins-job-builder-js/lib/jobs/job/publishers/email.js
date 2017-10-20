'use strict';
var util$940 = require('../../../misc/util.js');
var Email$942 = function (upper$946, obj$947) {
    this.upper = upper$946;
    this.obj = obj$947;
};
Email$942.prototype.up = function () {
    return this.upper;
};
Email$942.prototype.and = Email$942.prototype.up;
module.exports = Email$942;
Email$942.prototype[util$940.camelize('recipients')] = function (value$948) {
    return util$940.primitiveAccessor.apply(this, [
        'recipients',
        value$948
    ]);
};
Email$942.prototype[util$940.camelize('notify-every-unstable-build')] = function (value$949) {
    return util$940.primitiveAccessor.apply(this, [
        'notify-every-unstable-build',
        value$949
    ]);
};
Email$942.prototype[util$940.camelize('send-to-individuals')] = function (value$950) {
    return util$940.primitiveAccessor.apply(this, [
        'send-to-individuals',
        value$950
    ]);
};