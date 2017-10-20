'use strict';
var util$940 = require('../../../misc/util.js');
var Gitlab$942 = function (upper$955, obj$956) {
    this.upper = upper$955;
    this.obj = obj$956;
};
Gitlab$942.prototype.up = function () {
    return this.upper;
};
Gitlab$942.prototype.and = Gitlab$942.prototype.up;
module.exports = Gitlab$942;
Gitlab$942.prototype[util$940.camelize('trigger-push')] = function (value$957) {
    return util$940.primitiveAccessor.apply(this, [
        'trigger-push',
        value$957
    ]);
};
Gitlab$942.prototype[util$940.camelize('trigger-merge-request')] = function (value$958) {
    return util$940.primitiveAccessor.apply(this, [
        'trigger-merge-request',
        value$958
    ]);
};
Gitlab$942.prototype[util$940.camelize('trigger-open-merge-request-push')] = function (value$959) {
    return util$940.primitiveAccessor.apply(this, [
        'trigger-open-merge-request-push',
        value$959
    ]);
};
Gitlab$942.prototype[util$940.camelize('ci-skip')] = function (value$960) {
    return util$940.primitiveAccessor.apply(this, [
        'ci-skip',
        value$960
    ]);
};
Gitlab$942.prototype[util$940.camelize('set-build-description')] = function (value$961) {
    return util$940.primitiveAccessor.apply(this, [
        'set-build-description',
        value$961
    ]);
};
Gitlab$942.prototype[util$940.camelize('add-note-merge-request')] = function (value$962) {
    return util$940.primitiveAccessor.apply(this, [
        'add-note-merge-request',
        value$962
    ]);
};
Gitlab$942.prototype[util$940.camelize('add-vote-merge-request')] = function (value$963) {
    return util$940.primitiveAccessor.apply(this, [
        'add-vote-merge-request',
        value$963
    ]);
};
Gitlab$942.prototype[util$940.camelize('allow-all-branches')] = function (value$964) {
    return util$940.primitiveAccessor.apply(this, [
        'allow-all-branches',
        value$964
    ]);
};
Gitlab$942.prototype[util$940.camelize('trigger-push')] = function (value$965) {
    return util$940.primitiveAccessor.apply(this, [
        'trigger-push',
        value$965
    ]);
};
Gitlab$942.prototype[util$940.camelize('trigger-push')] = function (value$966) {
    return util$940.primitiveAccessor.apply(this, [
        'trigger-push',
        value$966
    ]);
};
Gitlab$942.prototype[util$940.camelize('include-branches')] = function (value$967) {
    return util$940.primitiveArrayAccessor.apply(this, [
        'include-branches',
        value$967
    ]);
};
Gitlab$942.prototype[util$940.camelize('exclude-branches')] = function (value$968) {
    return util$940.primitiveArrayAccessor.apply(this, [
        'exclude-branches',
        value$968
    ]);
};