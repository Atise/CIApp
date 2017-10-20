'use strict';
var util$940 = require('../../../misc/util.js');
var EmailExt$942 = function (upper$968, obj$969) {
    this.upper = upper$968;
    this.obj = obj$969;
};
EmailExt$942.prototype.up = function () {
    return this.upper;
};
EmailExt$942.prototype.and = EmailExt$942.prototype.up;
module.exports = EmailExt$942;
EmailExt$942.prototype[util$940.camelize('recipients')] = function (value$970) {
    return util$940.primitiveAccessor.apply(this, [
        'recipients',
        value$970
    ]);
};
EmailExt$942.prototype[util$940.camelize('reply-to')] = function (value$971) {
    return util$940.primitiveAccessor.apply(this, [
        'reply-to',
        value$971
    ]);
};
EmailExt$942.prototype[util$940.camelize('content-type')] = function (value$972) {
    return util$940.primitiveAccessor.apply(this, [
        'content-type',
        value$972
    ]);
};
EmailExt$942.prototype[util$940.camelize('subject')] = function (value$973) {
    return util$940.primitiveAccessor.apply(this, [
        'subject',
        value$973
    ]);
};
EmailExt$942.prototype[util$940.camelize('body')] = function (value$974) {
    return util$940.primitiveAccessor.apply(this, [
        'body',
        value$974
    ]);
};
EmailExt$942.prototype[util$940.camelize('attach-build-log')] = function (value$975) {
    return util$940.primitiveAccessor.apply(this, [
        'attach-build-log',
        value$975
    ]);
};
EmailExt$942.prototype[util$940.camelize('attachments')] = function (value$976) {
    return util$940.primitiveAccessor.apply(this, [
        'attachments',
        value$976
    ]);
};
EmailExt$942.prototype[util$940.camelize('always')] = function (value$977) {
    return util$940.primitiveAccessor.apply(this, [
        'always',
        value$977
    ]);
};
EmailExt$942.prototype[util$940.camelize('unstable')] = function (value$978) {
    return util$940.primitiveAccessor.apply(this, [
        'unstable',
        value$978
    ]);
};
EmailExt$942.prototype[util$940.camelize('first-failure')] = function (value$979) {
    return util$940.primitiveAccessor.apply(this, [
        'first-failure',
        value$979
    ]);
};
EmailExt$942.prototype[util$940.camelize('not-built')] = function (value$980) {
    return util$940.primitiveAccessor.apply(this, [
        'not-built',
        value$980
    ]);
};
EmailExt$942.prototype[util$940.camelize('aborted')] = function (value$981) {
    return util$940.primitiveAccessor.apply(this, [
        'aborted',
        value$981
    ]);
};
EmailExt$942.prototype[util$940.camelize('regression')] = function (value$982) {
    return util$940.primitiveAccessor.apply(this, [
        'regression',
        value$982
    ]);
};
EmailExt$942.prototype[util$940.camelize('failure')] = function (value$983) {
    return util$940.primitiveAccessor.apply(this, [
        'failure',
        value$983
    ]);
};
EmailExt$942.prototype[util$940.camelize('second-failure')] = function (value$984) {
    return util$940.primitiveAccessor.apply(this, [
        'second-failure',
        value$984
    ]);
};
EmailExt$942.prototype[util$940.camelize('improvement')] = function (value$985) {
    return util$940.primitiveAccessor.apply(this, [
        'improvement',
        value$985
    ]);
};
EmailExt$942.prototype[util$940.camelize('still-failing')] = function (value$986) {
    return util$940.primitiveAccessor.apply(this, [
        'still-failing',
        value$986
    ]);
};
EmailExt$942.prototype[util$940.camelize('success')] = function (value$987) {
    return util$940.primitiveAccessor.apply(this, [
        'success',
        value$987
    ]);
};
EmailExt$942.prototype[util$940.camelize('fixed')] = function (value$988) {
    return util$940.primitiveAccessor.apply(this, [
        'fixed',
        value$988
    ]);
};
EmailExt$942.prototype[util$940.camelize('still-unstable')] = function (value$989) {
    return util$940.primitiveAccessor.apply(this, [
        'still-unstable',
        value$989
    ]);
};
EmailExt$942.prototype[util$940.camelize('pre-build')] = function (value$990) {
    return util$940.primitiveAccessor.apply(this, [
        'pre-build',
        value$990
    ]);
};
EmailExt$942.prototype[util$940.camelize('presend-script')] = function (value$991) {
    return util$940.primitiveAccessor.apply(this, [
        'presend-script',
        value$991
    ]);
};
EmailExt$942.prototype[util$940.camelize('save-output')] = function (value$992) {
    return util$940.primitiveAccessor.apply(this, [
        'save-output',
        value$992
    ]);
};
EmailExt$942.prototype[util$940.camelize('matrix-trigger')] = function (value$993) {
    return util$940.primitiveAccessor.apply(this, [
        'matrix-trigger',
        value$993
    ]);
};
EmailExt$942.prototype[util$940.camelize('send-to')] = function (value$994) {
    return util$940.primitiveArrayAccessor.apply(this, [
        'send-to',
        value$994
    ]);
};