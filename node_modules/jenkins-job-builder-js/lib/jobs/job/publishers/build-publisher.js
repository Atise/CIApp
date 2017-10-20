'use strict';
var util$940 = require('../../../misc/util.js');
var BuildPublisher$942 = function (upper$947, obj$948) {
    this.upper = upper$947;
    this.obj = obj$948;
};
BuildPublisher$942.prototype.up = function () {
    return this.upper;
};
BuildPublisher$942.prototype.and = BuildPublisher$942.prototype.up;
module.exports = BuildPublisher$942;
BuildPublisher$942.prototype[util$940.camelize('publish-unstable-builds')] = function (value$949) {
    return util$940.primitiveAccessor.apply(this, [
        'publish-unstable-builds',
        value$949
    ]);
};
BuildPublisher$942.prototype[util$940.camelize('publish-failed-builds')] = function (value$950) {
    return util$940.primitiveAccessor.apply(this, [
        'publish-failed-builds',
        value$950
    ]);
};
BuildPublisher$942.prototype[util$940.camelize('days-to-keep')] = function (value$951) {
    return util$940.primitiveAccessor.apply(this, [
        'days-to-keep',
        value$951
    ]);
};
BuildPublisher$942.prototype[util$940.camelize('num-to-keep')] = function (value$952) {
    return util$940.primitiveAccessor.apply(this, [
        'num-to-keep',
        value$952
    ]);
};