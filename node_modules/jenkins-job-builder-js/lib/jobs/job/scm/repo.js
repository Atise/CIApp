'use strict';
var util$940 = require('../../../misc/util.js');
var Repo$942 = function (upper$954, obj$955) {
    this.upper = upper$954;
    this.obj = obj$955;
};
Repo$942.prototype.up = function () {
    return this.upper;
};
Repo$942.prototype.and = Repo$942.prototype.up;
module.exports = Repo$942;
Repo$942.prototype[util$940.camelize('manifest-url')] = function (value$956) {
    return util$940.primitiveAccessor.apply(this, [
        'manifest-url',
        value$956
    ]);
};
Repo$942.prototype[util$940.camelize('manifest-branch')] = function (value$957) {
    return util$940.primitiveAccessor.apply(this, [
        'manifest-branch',
        value$957
    ]);
};
Repo$942.prototype[util$940.camelize('manifest-file')] = function (value$958) {
    return util$940.primitiveAccessor.apply(this, [
        'manifest-file',
        value$958
    ]);
};
Repo$942.prototype[util$940.camelize('manifest-group')] = function (value$959) {
    return util$940.primitiveAccessor.apply(this, [
        'manifest-group',
        value$959
    ]);
};
Repo$942.prototype[util$940.camelize('destination-dir')] = function (value$960) {
    return util$940.primitiveAccessor.apply(this, [
        'destination-dir',
        value$960
    ]);
};
Repo$942.prototype[util$940.camelize('repo-url')] = function (value$961) {
    return util$940.primitiveAccessor.apply(this, [
        'repo-url',
        value$961
    ]);
};
Repo$942.prototype[util$940.camelize('mirror-dir')] = function (value$962) {
    return util$940.primitiveAccessor.apply(this, [
        'mirror-dir',
        value$962
    ]);
};
Repo$942.prototype[util$940.camelize('jobs')] = function (value$963) {
    return util$940.primitiveAccessor.apply(this, [
        'jobs',
        value$963
    ]);
};
Repo$942.prototype[util$940.camelize('current-branch')] = function (value$964) {
    return util$940.primitiveAccessor.apply(this, [
        'current-branch',
        value$964
    ]);
};
Repo$942.prototype[util$940.camelize('quiet')] = function (value$965) {
    return util$940.primitiveAccessor.apply(this, [
        'quiet',
        value$965
    ]);
};
Repo$942.prototype[util$940.camelize('local-manifest')] = function (value$966) {
    return util$940.primitiveAccessor.apply(this, [
        'local-manifest',
        value$966
    ]);
};