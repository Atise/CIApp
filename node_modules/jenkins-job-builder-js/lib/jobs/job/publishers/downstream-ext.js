'use strict';
var util$940 = require('../../../misc/util.js');
var DownstreamExt$942 = function (upper$948, obj$949) {
    this.upper = upper$948;
    this.obj = obj$949;
};
DownstreamExt$942.prototype.up = function () {
    return this.upper;
};
DownstreamExt$942.prototype.and = DownstreamExt$942.prototype.up;
module.exports = DownstreamExt$942;
DownstreamExt$942.prototype[util$940.camelize('projects')] = function (value$950) {
    return util$940.primitiveArrayAccessor.apply(this, [
        'projects',
        value$950
    ]);
};
DownstreamExt$942.prototype[util$940.camelize('condition')] = function (value$951) {
    return util$940.primitiveAccessor.apply(this, [
        'condition',
        value$951
    ]);
};
DownstreamExt$942.prototype[util$940.camelize('criteria')] = function (value$952) {
    return util$940.primitiveAccessor.apply(this, [
        'criteria',
        value$952
    ]);
};
DownstreamExt$942.prototype[util$940.camelize('only-on-scm-change')] = function (value$953) {
    return util$940.primitiveAccessor.apply(this, [
        'only-on-scm-change',
        value$953
    ]);
};
DownstreamExt$942.prototype[util$940.camelize('only-on-local-scm-change')] = function (value$954) {
    return util$940.primitiveAccessor.apply(this, [
        'only-on-local-scm-change',
        value$954
    ]);
};