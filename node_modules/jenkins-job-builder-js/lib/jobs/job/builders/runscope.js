'use strict';
var util$940 = require('../../../misc/util.js');
var Runscope$942 = function (upper$946, obj$947) {
    this.upper = upper$946;
    this.obj = obj$947;
};
Runscope$942.prototype.up = function () {
    return this.upper;
};
Runscope$942.prototype.and = Runscope$942.prototype.up;
module.exports = Runscope$942;
Runscope$942.prototype[util$940.camelize('test-trigger-url')] = function (value$948) {
    return util$940.primitiveAccessor.apply(this, [
        'test-trigger-url',
        value$948
    ]);
};
Runscope$942.prototype[util$940.camelize('access-token')] = function (value$949) {
    return util$940.primitiveAccessor.apply(this, [
        'access-token',
        value$949
    ]);
};
Runscope$942.prototype[util$940.camelize('timeout')] = function (value$950) {
    return util$940.primitiveAccessor.apply(this, [
        'timeout',
        value$950
    ]);
};