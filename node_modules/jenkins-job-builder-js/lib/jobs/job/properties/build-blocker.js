'use strict';
var util$940 = require('../../../misc/util.js');
var BuildBlocker$942 = function (upper$947, obj$948) {
    this.upper = upper$947;
    this.obj = obj$948;
};
BuildBlocker$942.prototype.up = function () {
    return this.upper;
};
BuildBlocker$942.prototype.and = BuildBlocker$942.prototype.up;
module.exports = BuildBlocker$942;
BuildBlocker$942.prototype[util$940.camelize('use-build-blocker')] = function (value$949) {
    return util$940.primitiveAccessor.apply(this, [
        'use-build-blocker',
        value$949
    ]);
};
BuildBlocker$942.prototype[util$940.camelize('blocking-jobs')] = function (value$950) {
    return util$940.primitiveArrayAccessor.apply(this, [
        'blocking-jobs',
        value$950
    ]);
};
BuildBlocker$942.prototype[util$940.camelize('queue-scanning')] = function (value$951) {
    return util$940.primitiveAccessor.apply(this, [
        'queue-scanning',
        value$951
    ]);
};
BuildBlocker$942.prototype[util$940.camelize('block-level')] = function (value$952) {
    return util$940.primitiveAccessor.apply(this, [
        'block-level',
        value$952
    ]);
};