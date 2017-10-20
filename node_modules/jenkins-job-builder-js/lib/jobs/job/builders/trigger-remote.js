'use strict';
var util$940 = require('../../../misc/util.js');
var TriggerRemote$942 = function (upper$952, obj$953) {
    this.upper = upper$952;
    this.obj = obj$953;
};
TriggerRemote$942.prototype.up = function () {
    return this.upper;
};
TriggerRemote$942.prototype.and = TriggerRemote$942.prototype.up;
module.exports = TriggerRemote$942;
TriggerRemote$942.prototype[util$940.camelize('remote-jenkins-name')] = function (value$954) {
    return util$940.primitiveAccessor.apply(this, [
        'remote-jenkins-name',
        value$954
    ]);
};
TriggerRemote$942.prototype[util$940.camelize('job')] = function (value$955) {
    return util$940.primitiveAccessor.apply(this, [
        'job',
        value$955
    ]);
};
TriggerRemote$942.prototype[util$940.camelize('should-not-fail-build')] = function (value$956) {
    return util$940.primitiveAccessor.apply(this, [
        'should-not-fail-build',
        value$956
    ]);
};
TriggerRemote$942.prototype[util$940.camelize('prevent-remote-build-queue')] = function (value$957) {
    return util$940.primitiveAccessor.apply(this, [
        'prevent-remote-build-queue',
        value$957
    ]);
};
TriggerRemote$942.prototype[util$940.camelize('block')] = function (value$958) {
    return util$940.primitiveAccessor.apply(this, [
        'block',
        value$958
    ]);
};
TriggerRemote$942.prototype[util$940.camelize('poll-interval')] = function (value$959) {
    return util$940.primitiveAccessor.apply(this, [
        'poll-interval',
        value$959
    ]);
};
TriggerRemote$942.prototype[util$940.camelize('connection-retry-limit')] = function (value$960) {
    return util$940.primitiveAccessor.apply(this, [
        'connection-retry-limit',
        value$960
    ]);
};
TriggerRemote$942.prototype[util$940.camelize('predefined-parameters')] = function (value$961) {
    return util$940.primitiveAccessor.apply(this, [
        'predefined-parameters',
        value$961
    ]);
};
TriggerRemote$942.prototype[util$940.camelize('property-file')] = function (value$962) {
    return util$940.primitiveAccessor.apply(this, [
        'property-file',
        value$962
    ]);
};