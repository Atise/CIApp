'use strict';
var util$940 = require('../../../misc/util.js');
var Jabber$942 = function (upper$952, obj$953) {
    this.upper = upper$952;
    this.obj = obj$953;
};
Jabber$942.prototype.up = function () {
    return this.upper;
};
Jabber$942.prototype.and = Jabber$942.prototype.up;
module.exports = Jabber$942;
Jabber$942.prototype[util$940.camelize('notify-on-build-start')] = function (value$954) {
    return util$940.primitiveAccessor.apply(this, [
        'notify-on-build-start',
        value$954
    ]);
};
Jabber$942.prototype[util$940.camelize('notify-scm-committers')] = function (value$955) {
    return util$940.primitiveAccessor.apply(this, [
        'notify-scm-committers',
        value$955
    ]);
};
Jabber$942.prototype[util$940.camelize('notify-scm-culprits')] = function (value$956) {
    return util$940.primitiveAccessor.apply(this, [
        'notify-scm-culprits',
        value$956
    ]);
};
Jabber$942.prototype[util$940.camelize('notify-upstream-committers')] = function (value$957) {
    return util$940.primitiveAccessor.apply(this, [
        'notify-upstream-committers',
        value$957
    ]);
};
Jabber$942.prototype[util$940.camelize('notify-scm-fixers')] = function (value$958) {
    return util$940.primitiveAccessor.apply(this, [
        'notify-scm-fixers',
        value$958
    ]);
};
Jabber$942.prototype[util$940.camelize('group-targets')] = function (value$959) {
    return util$940.primitiveArrayAccessor.apply(this, [
        'group-targets',
        value$959
    ]);
};
Jabber$942.prototype[util$940.camelize('individual-targets')] = function (value$960) {
    return util$940.primitiveArrayAccessor.apply(this, [
        'individual-targets',
        value$960
    ]);
};
Jabber$942.prototype[util$940.camelize('strategy')] = function (value$961) {
    return util$940.primitiveAccessor.apply(this, [
        'strategy',
        value$961
    ]);
};
Jabber$942.prototype[util$940.camelize('message')] = function (value$962) {
    return util$940.primitiveAccessor.apply(this, [
        'message',
        value$962
    ]);
};