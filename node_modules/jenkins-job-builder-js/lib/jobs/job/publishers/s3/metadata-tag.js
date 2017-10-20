'use strict';
var util$940 = require('../../../../misc/util.js');
var MetadataTag$942 = function (upper$945, obj$946) {
    this.upper = upper$945;
    this.obj = obj$946;
};
MetadataTag$942.prototype.up = function () {
    return this.upper;
};
MetadataTag$942.prototype.and = MetadataTag$942.prototype.up;
module.exports = MetadataTag$942;
MetadataTag$942.prototype[util$940.camelize('key')] = function (value$947) {
    return util$940.primitiveAccessor.apply(this, [
        'key',
        value$947
    ]);
};
MetadataTag$942.prototype[util$940.camelize('value')] = function (value$948) {
    return util$940.primitiveAccessor.apply(this, [
        'value',
        value$948
    ]);
};