'use strict';
var util$940 = require('../../../misc/util.js');
var Beaker$942 = function (upper$946, obj$947) {
    this.upper = upper$946;
    this.obj = obj$947;
};
Beaker$942.prototype.up = function () {
    return this.upper;
};
Beaker$942.prototype.and = Beaker$942.prototype.up;
module.exports = Beaker$942;
Beaker$942.prototype[util$940.camelize('content')] = function (value$948) {
    return util$940.primitiveAccessor.apply(this, [
        'content',
        value$948
    ]);
};
Beaker$942.prototype[util$940.camelize('path')] = function (value$949) {
    return util$940.primitiveAccessor.apply(this, [
        'path',
        value$949
    ]);
};
Beaker$942.prototype[util$940.camelize('download-logs')] = function (value$950) {
    return util$940.primitiveAccessor.apply(this, [
        'download-logs',
        value$950
    ]);
};