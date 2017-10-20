'use strict';
var util$940 = require('../../../misc/util.js');
var Grails$942 = function (upper$957, obj$958) {
    this.upper = upper$957;
    this.obj = obj$958;
};
Grails$942.prototype.up = function () {
    return this.upper;
};
Grails$942.prototype.and = Grails$942.prototype.up;
module.exports = Grails$942;
Grails$942.prototype[util$940.camelize('use-wrapper')] = function (value$959) {
    return util$940.primitiveAccessor.apply(this, [
        'use-wrapper',
        value$959
    ]);
};
Grails$942.prototype[util$940.camelize('name')] = function (value$960) {
    return util$940.primitiveAccessor.apply(this, [
        'name',
        value$960
    ]);
};
Grails$942.prototype[util$940.camelize('force-upgrade')] = function (value$961) {
    return util$940.primitiveAccessor.apply(this, [
        'force-upgrade',
        value$961
    ]);
};
Grails$942.prototype[util$940.camelize('non-interactive')] = function (value$962) {
    return util$940.primitiveAccessor.apply(this, [
        'non-interactive',
        value$962
    ]);
};
Grails$942.prototype[util$940.camelize('targets')] = function (value$963) {
    return util$940.primitiveAccessor.apply(this, [
        'targets',
        value$963
    ]);
};
Grails$942.prototype[util$940.camelize('server-port')] = function (value$964) {
    return util$940.primitiveAccessor.apply(this, [
        'server-port',
        value$964
    ]);
};
Grails$942.prototype[util$940.camelize('work-dir')] = function (value$965) {
    return util$940.primitiveAccessor.apply(this, [
        'work-dir',
        value$965
    ]);
};
Grails$942.prototype[util$940.camelize('project-dir')] = function (value$966) {
    return util$940.primitiveAccessor.apply(this, [
        'project-dir',
        value$966
    ]);
};
Grails$942.prototype[util$940.camelize('base-dir')] = function (value$967) {
    return util$940.primitiveAccessor.apply(this, [
        'base-dir',
        value$967
    ]);
};
Grails$942.prototype[util$940.camelize('properties')] = function (value$968) {
    return util$940.primitiveAccessor.apply(this, [
        'properties',
        value$968
    ]);
};
Grails$942.prototype[util$940.camelize('plain-output')] = function (value$969) {
    return util$940.primitiveAccessor.apply(this, [
        'plain-output',
        value$969
    ]);
};
Grails$942.prototype[util$940.camelize('stack-trace')] = function (value$970) {
    return util$940.primitiveAccessor.apply(this, [
        'stack-trace',
        value$970
    ]);
};
Grails$942.prototype[util$940.camelize('verbose')] = function (value$971) {
    return util$940.primitiveAccessor.apply(this, [
        'verbose',
        value$971
    ]);
};
Grails$942.prototype[util$940.camelize('refresh-dependencies')] = function (value$972) {
    return util$940.primitiveAccessor.apply(this, [
        'refresh-dependencies',
        value$972
    ]);
};