'use strict';
var util$940 = require('../../../misc/util.js');
var Ssh$942 = function (upper$956, obj$957) {
    this.upper = upper$956;
    this.obj = obj$957;
};
Ssh$942.prototype.up = function () {
    return this.upper;
};
Ssh$942.prototype.and = Ssh$942.prototype.up;
module.exports = Ssh$942;
Ssh$942.prototype[util$940.camelize('site')] = function (value$958) {
    return util$940.primitiveAccessor.apply(this, [
        'site',
        value$958
    ]);
};
Ssh$942.prototype[util$940.camelize('target')] = function (value$959) {
    return util$940.primitiveAccessor.apply(this, [
        'target',
        value$959
    ]);
};
Ssh$942.prototype[util$940.camelize('target-is-date-format')] = function (value$960) {
    return util$940.primitiveAccessor.apply(this, [
        'target-is-date-format',
        value$960
    ]);
};
Ssh$942.prototype[util$940.camelize('clean-remote')] = function (value$961) {
    return util$940.primitiveAccessor.apply(this, [
        'clean-remote',
        value$961
    ]);
};
Ssh$942.prototype[util$940.camelize('source')] = function (value$962) {
    return util$940.primitiveAccessor.apply(this, [
        'source',
        value$962
    ]);
};
Ssh$942.prototype[util$940.camelize('command')] = function (value$963) {
    return util$940.primitiveAccessor.apply(this, [
        'command',
        value$963
    ]);
};
Ssh$942.prototype[util$940.camelize('timeout')] = function (value$964) {
    return util$940.primitiveAccessor.apply(this, [
        'timeout',
        value$964
    ]);
};
Ssh$942.prototype[util$940.camelize('use-pty')] = function (value$965) {
    return util$940.primitiveAccessor.apply(this, [
        'use-pty',
        value$965
    ]);
};
Ssh$942.prototype[util$940.camelize('excludes')] = function (value$966) {
    return util$940.primitiveAccessor.apply(this, [
        'excludes',
        value$966
    ]);
};
Ssh$942.prototype[util$940.camelize('remove-prefix')] = function (value$967) {
    return util$940.primitiveAccessor.apply(this, [
        'remove-prefix',
        value$967
    ]);
};
Ssh$942.prototype[util$940.camelize('fail-on-error')] = function (value$968) {
    return util$940.primitiveAccessor.apply(this, [
        'fail-on-error',
        value$968
    ]);
};
Ssh$942.prototype[util$940.camelize('always-publish-from-master')] = function (value$969) {
    return util$940.primitiveAccessor.apply(this, [
        'always-publish-from-master',
        value$969
    ]);
};
Ssh$942.prototype[util$940.camelize('flatten')] = function (value$970) {
    return util$940.primitiveAccessor.apply(this, [
        'flatten',
        value$970
    ]);
};