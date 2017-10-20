'use strict';
var util$940 = require('../../../misc/util.js');
var LogParser$942 = function (upper$945, obj$946) {
    this.upper = upper$945;
    this.obj = obj$946;
};
LogParser$942.prototype.up = function () {
    return this.upper;
};
LogParser$942.prototype.and = LogParser$942.prototype.up;
module.exports = LogParser$942;
LogParser$942.prototype[util$940.camelize('max-lines')] = function (value$947) {
    return util$940.primitiveAccessor.apply(this, [
        'max-lines',
        value$947
    ]);
};
LogParser$942.prototype[util$940.camelize('fail-build')] = function (value$948) {
    return util$940.primitiveAccessor.apply(this, [
        'fail-build',
        value$948
    ]);
};