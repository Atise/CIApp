'use strict';
var util$940 = require('../../../misc/util.js');
var LogParser$942 = function (upper$946, obj$947) {
    this.upper = upper$946;
    this.obj = obj$947;
};
LogParser$942.prototype.up = function () {
    return this.upper;
};
LogParser$942.prototype.and = LogParser$942.prototype.up;
module.exports = LogParser$942;
LogParser$942.prototype[util$940.camelize('parse-rules')] = function (value$948) {
    return util$940.primitiveAccessor.apply(this, [
        'parse-rules',
        value$948
    ]);
};
LogParser$942.prototype[util$940.camelize('unstable-on-warning')] = function (value$949) {
    return util$940.primitiveAccessor.apply(this, [
        'unstable-on-warning',
        value$949
    ]);
};
LogParser$942.prototype[util$940.camelize('fail-on-error')] = function (value$950) {
    return util$940.primitiveAccessor.apply(this, [
        'fail-on-error',
        value$950
    ]);
};