'use strict';
var util$940 = require('../../../misc/util.js');
var Channel$941 = require('./ircbot/channel.js');
var IrcBot$943 = function (upper$953, obj$954) {
    this.upper = upper$953;
    this.obj = obj$954;
};
IrcBot$943.prototype.up = function () {
    return this.upper;
};
IrcBot$943.prototype.and = IrcBot$943.prototype.up;
module.exports = IrcBot$943;
IrcBot$943.prototype[util$940.camelize('strategy')] = function (value$955) {
    return util$940.primitiveAccessor.apply(this, [
        'strategy',
        value$955
    ]);
};
IrcBot$943.prototype[util$940.camelize('notify-start')] = function (value$956) {
    return util$940.primitiveAccessor.apply(this, [
        'notify-start',
        value$956
    ]);
};
IrcBot$943.prototype[util$940.camelize('notify-committers')] = function (value$957) {
    return util$940.primitiveAccessor.apply(this, [
        'notify-committers',
        value$957
    ]);
};
IrcBot$943.prototype[util$940.camelize('notify-culprits')] = function (value$958) {
    return util$940.primitiveAccessor.apply(this, [
        'notify-culprits',
        value$958
    ]);
};
IrcBot$943.prototype[util$940.camelize('notify-upstream')] = function (value$959) {
    return util$940.primitiveAccessor.apply(this, [
        'notify-upstream',
        value$959
    ]);
};
IrcBot$943.prototype[util$940.camelize('notify-fixers')] = function (value$960) {
    return util$940.primitiveAccessor.apply(this, [
        'notify-fixers',
        value$960
    ]);
};
IrcBot$943.prototype[util$940.camelize('message-type')] = function (value$961) {
    return util$940.primitiveAccessor.apply(this, [
        'message-type',
        value$961
    ]);
};
IrcBot$943.prototype[util$940.camelize('channels')] = function (value$962) {
    return util$940.objectArrayAccessor.apply(this, [
        'channels',
        Channel$941,
        value$962
    ]);
};
IrcBot$943.prototype[util$940.camelize('matrix-notifier')] = function (value$963) {
    return util$940.primitiveAccessor.apply(this, [
        'matrix-notifier',
        value$963
    ]);
};