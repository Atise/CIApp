'use strict';
var util$940 = require('../../../../misc/util.js');
var SkipVote$942 = function (upper$947, obj$948) {
    this.upper = upper$947;
    this.obj = obj$948;
};
SkipVote$942.prototype.up = function () {
    return this.upper;
};
SkipVote$942.prototype.and = SkipVote$942.prototype.up;
module.exports = SkipVote$942;
SkipVote$942.prototype[util$940.camelize('successful')] = function (value$949) {
    return util$940.primitiveAccessor.apply(this, [
        'successful',
        value$949
    ]);
};
SkipVote$942.prototype[util$940.camelize('failed')] = function (value$950) {
    return util$940.primitiveAccessor.apply(this, [
        'failed',
        value$950
    ]);
};
SkipVote$942.prototype[util$940.camelize('unstable')] = function (value$951) {
    return util$940.primitiveAccessor.apply(this, [
        'unstable',
        value$951
    ]);
};
SkipVote$942.prototype[util$940.camelize('notbuilt')] = function (value$952) {
    return util$940.primitiveAccessor.apply(this, [
        'notbuilt',
        value$952
    ]);
};