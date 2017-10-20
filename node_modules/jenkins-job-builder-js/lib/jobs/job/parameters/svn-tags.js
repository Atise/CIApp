'use strict';
var util$940 = require('../../../misc/util.js');
var SvnTags$942 = function (upper$948, obj$949) {
    this.upper = upper$948;
    this.obj = obj$949;
};
SvnTags$942.prototype.up = function () {
    return this.upper;
};
SvnTags$942.prototype.and = SvnTags$942.prototype.up;
module.exports = SvnTags$942;
SvnTags$942.prototype[util$940.camelize('name')] = function (value$950) {
    return util$940.primitiveAccessor.apply(this, [
        'name',
        value$950
    ]);
};
SvnTags$942.prototype[util$940.camelize('default')] = function (value$951) {
    return util$940.primitiveAccessor.apply(this, [
        'default',
        value$951
    ]);
};
SvnTags$942.prototype[util$940.camelize('description')] = function (value$952) {
    return util$940.primitiveAccessor.apply(this, [
        'description',
        value$952
    ]);
};
SvnTags$942.prototype[util$940.camelize('url')] = function (value$953) {
    return util$940.primitiveAccessor.apply(this, [
        'url',
        value$953
    ]);
};
SvnTags$942.prototype[util$940.camelize('filter')] = function (value$954) {
    return util$940.primitiveAccessor.apply(this, [
        'filter',
        value$954
    ]);
};