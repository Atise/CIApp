'use strict';
var util$940 = require('../../../../misc/util.js');
var PatchsetCreatedEvent$941 = require('./trigger-on/patchset-created-event.js');
var ChangeAbandonedEvent$942 = require('../../../../misc/empty-proxy.js');
var ChangeMergedEvent$943 = require('../../../../misc/empty-proxy.js');
var ChangeRestoredEvent$944 = require('../../../../misc/empty-proxy.js');
var DraftPublishedEvent$945 = require('../../../../misc/empty-proxy.js');
var RefUpdatedEvent$946 = require('../../../../misc/empty-proxy.js');
var CommentAddedEvent$947 = require('./trigger-on/comment-added-event.js');
var CommentAddedContainsEvent$948 = require('./trigger-on/comment-added-contains-event.js');
var TriggerOn$950 = function (upper$959, array$960) {
    this.upper = upper$959;
    this.array = array$960;
};
TriggerOn$950.prototype.up = function () {
    return this.upper;
};
TriggerOn$950.prototype.and = TriggerOn$950.prototype.up;
module.exports = TriggerOn$950;
TriggerOn$950.prototype[util$940.camelize('patchset-created-event')] = function (value$961) {
    return util$940.keyedObjectElementAccessor.apply(this, [
        'patchset-created-event',
        PatchsetCreatedEvent$941,
        value$961
    ]);
};
TriggerOn$950.prototype[util$940.camelize('change-abandoned-event')] = function (value$962) {
    return util$940.keyedObjectElementAccessor.apply(this, [
        'change-abandoned-event',
        ChangeAbandonedEvent$942,
        value$962
    ]);
};
TriggerOn$950.prototype[util$940.camelize('change-merged-event')] = function (value$963) {
    return util$940.keyedObjectElementAccessor.apply(this, [
        'change-merged-event',
        ChangeMergedEvent$943,
        value$963
    ]);
};
TriggerOn$950.prototype[util$940.camelize('change-restored-event')] = function (value$964) {
    return util$940.keyedObjectElementAccessor.apply(this, [
        'change-restored-event',
        ChangeRestoredEvent$944,
        value$964
    ]);
};
TriggerOn$950.prototype[util$940.camelize('draft-published-event')] = function (value$965) {
    return util$940.keyedObjectElementAccessor.apply(this, [
        'draft-published-event',
        DraftPublishedEvent$945,
        value$965
    ]);
};
TriggerOn$950.prototype[util$940.camelize('ref-updated-event')] = function (value$966) {
    return util$940.keyedObjectElementAccessor.apply(this, [
        'ref-updated-event',
        RefUpdatedEvent$946,
        value$966
    ]);
};
TriggerOn$950.prototype[util$940.camelize('comment-added-event')] = function (value$967) {
    return util$940.keyedObjectElementAccessor.apply(this, [
        'comment-added-event',
        CommentAddedEvent$947,
        value$967
    ]);
};
TriggerOn$950.prototype[util$940.camelize('comment-added-contains-event')] = function (value$968) {
    return util$940.keyedObjectElementAccessor.apply(this, [
        'comment-added-contains-event',
        CommentAddedContainsEvent$948,
        value$968
    ]);
};