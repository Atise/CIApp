'use strict';
var util$940 = require('../../misc/util.js');
var Authorization$941 = require('./properties/authorization.js');
var BatchTasks$942 = require('./properties/batch-tasks.js');
var BuildBlocker$943 = require('./properties/build-blocker.js');
var BuildsChainFingerprinter$944 = require('./properties/builds-chain-fingerprinter.js');
var CopyArtifact$945 = require('./properties/copyartifact.js');
var DeliveryPipeline$946 = require('./properties/delivery-pipeline.js');
var Github$947 = require('./properties/github.js');
var HeavyJob$948 = require('./properties/heavy-job.js');
var Inject$949 = require('./properties/inject.js');
var LeastLoad$950 = require('./properties/least-load.js');
var Ownership$951 = require('./properties/ownership.js');
var PrioritySorter$952 = require('./properties/priority-sorter.js');
var PromotedBuild$953 = require('./properties/promoted-build.js');
var SlaveUtilization$954 = require('./properties/slave-utilization.js');
var Throttle$955 = require('./properties/throttle.js');
var ZeromqEvent$956 = require('../../misc/empty-proxy.js');
var Rebuild$957 = require('./properties/rebuild.js');
var Properties$959 = function (upper$977, array$978) {
    this.upper = upper$977;
    this.array = array$978;
};
Properties$959.prototype.up = function () {
    return this.upper;
};
Properties$959.prototype.and = Properties$959.prototype.up;
module.exports = Properties$959;
Properties$959.prototype[util$940.camelize('authorization')] = function (value$979) {
    return util$940.keyedObjectElementAccessor.apply(this, [
        'authorization',
        Authorization$941,
        value$979
    ]);
};
Properties$959.prototype[util$940.camelize('batch-tasks')] = function (value$980) {
    return util$940.keyedArrayElementAccessor.apply(this, [
        'batch-tasks',
        BatchTasks$942,
        value$980
    ]);
};
Properties$959.prototype[util$940.camelize('build-blocker')] = function (value$981) {
    return util$940.keyedObjectElementAccessor.apply(this, [
        'build-blocker',
        BuildBlocker$943,
        value$981
    ]);
};
Properties$959.prototype[util$940.camelize('builds-chain-fingerprinter')] = function (value$982) {
    return util$940.keyedObjectElementAccessor.apply(this, [
        'builds-chain-fingerprinter',
        BuildsChainFingerprinter$944,
        value$982
    ]);
};
Properties$959.prototype[util$940.camelize('copyartifact')] = function (value$983) {
    return util$940.keyedObjectElementAccessor.apply(this, [
        'copyartifact',
        CopyArtifact$945,
        value$983
    ]);
};
Properties$959.prototype[util$940.camelize('delivery-pipeline')] = function (value$984) {
    return util$940.keyedObjectElementAccessor.apply(this, [
        'delivery-pipeline',
        DeliveryPipeline$946,
        value$984
    ]);
};
Properties$959.prototype[util$940.camelize('github')] = function (value$985) {
    return util$940.keyedObjectElementAccessor.apply(this, [
        'github',
        Github$947,
        value$985
    ]);
};
Properties$959.prototype[util$940.camelize('heavy-job')] = function (value$986) {
    return util$940.keyedObjectElementAccessor.apply(this, [
        'heavy-job',
        HeavyJob$948,
        value$986
    ]);
};
Properties$959.prototype[util$940.camelize('inject')] = function (value$987) {
    return util$940.keyedObjectElementAccessor.apply(this, [
        'inject',
        Inject$949,
        value$987
    ]);
};
Properties$959.prototype[util$940.camelize('least-load')] = function (value$988) {
    return util$940.keyedObjectElementAccessor.apply(this, [
        'least-load',
        LeastLoad$950,
        value$988
    ]);
};
Properties$959.prototype[util$940.camelize('ownership')] = function (value$989) {
    return util$940.keyedObjectElementAccessor.apply(this, [
        'ownership',
        Ownership$951,
        value$989
    ]);
};
Properties$959.prototype[util$940.camelize('priority-sorter')] = function (value$990) {
    return util$940.keyedObjectElementAccessor.apply(this, [
        'priority-sorter',
        PrioritySorter$952,
        value$990
    ]);
};
Properties$959.prototype[util$940.camelize('promoted-build')] = function (value$991) {
    return util$940.keyedObjectElementAccessor.apply(this, [
        'promoted-build',
        PromotedBuild$953,
        value$991
    ]);
};
Properties$959.prototype[util$940.camelize('slave-utilization')] = function (value$992) {
    return util$940.keyedObjectElementAccessor.apply(this, [
        'slave-utilization',
        SlaveUtilization$954,
        value$992
    ]);
};
Properties$959.prototype[util$940.camelize('throttle')] = function (value$993) {
    return util$940.keyedObjectElementAccessor.apply(this, [
        'throttle',
        Throttle$955,
        value$993
    ]);
};
Properties$959.prototype[util$940.camelize('zeromq-event')] = function (value$994) {
    return util$940.keyedObjectElementAccessor.apply(this, [
        'zeromq-event',
        ZeromqEvent$956,
        value$994
    ]);
};
Properties$959.prototype[util$940.camelize('rebuild')] = function (value$995) {
    return util$940.keyedObjectElementAccessor.apply(this, [
        'rebuild',
        Rebuild$957,
        value$995
    ]);
};