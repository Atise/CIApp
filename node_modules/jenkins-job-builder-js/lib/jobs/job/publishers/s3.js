'use strict';
var util$940 = require('../../../misc/util.js');
var Entry$941 = require('./s3/entry.js');
var MetadataTag$942 = require('./s3/metadata-tag.js');
var S3$944 = function (upper$948, obj$949) {
    this.upper = upper$948;
    this.obj = obj$949;
};
S3$944.prototype.up = function () {
    return this.upper;
};
S3$944.prototype.and = S3$944.prototype.up;
module.exports = S3$944;
S3$944.prototype[util$940.camelize('s3-profile')] = function (value$950) {
    return util$940.primitiveAccessor.apply(this, [
        's3-profile',
        value$950
    ]);
};
S3$944.prototype[util$940.camelize('entries')] = function (value$951) {
    return util$940.objectArrayAccessor.apply(this, [
        'entries',
        Entry$941,
        value$951
    ]);
};
S3$944.prototype[util$940.camelize('metadata-tags')] = function (value$952) {
    return util$940.objectArrayAccessor.apply(this, [
        'metadata-tags',
        MetadataTag$942,
        value$952
    ]);
};