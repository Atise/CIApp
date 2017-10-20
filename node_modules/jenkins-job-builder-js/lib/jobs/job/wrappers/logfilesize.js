'use strict';
var util$940 = require('../../../misc/util.js');
var LogFileSize$942 = function (upper$946, obj$947) {
    this.upper = upper$946;
    this.obj = obj$947;
};
LogFileSize$942.prototype.up = function () {
    return this.upper;
};
LogFileSize$942.prototype.and = LogFileSize$942.prototype.up;
module.exports = LogFileSize$942;
LogFileSize$942.prototype[util$940.camelize('set-own')] = function (value$948) {
    return util$940.primitiveAccessor.apply(this, [
        'set-own',
        value$948
    ]);
};
LogFileSize$942.prototype[util$940.camelize('fail')] = function (value$949) {
    return util$940.primitiveAccessor.apply(this, [
        'fail',
        value$949
    ]);
};
LogFileSize$942.prototype[util$940.camelize('size')] = function (value$950) {
    return util$940.primitiveAccessor.apply(this, [
        'size',
        value$950
    ]);
};