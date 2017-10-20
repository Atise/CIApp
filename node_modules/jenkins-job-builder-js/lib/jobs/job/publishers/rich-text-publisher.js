'use strict';
var util$940 = require('../../../misc/util.js');
var RichTextPublisher$942 = function (upper$947, obj$948) {
    this.upper = upper$947;
    this.obj = obj$948;
};
RichTextPublisher$942.prototype.up = function () {
    return this.upper;
};
RichTextPublisher$942.prototype.and = RichTextPublisher$942.prototype.up;
module.exports = RichTextPublisher$942;
RichTextPublisher$942.prototype[util$940.camelize('stable-text')] = function (value$949) {
    return util$940.primitiveAccessor.apply(this, [
        'stable-text',
        value$949
    ]);
};
RichTextPublisher$942.prototype[util$940.camelize('unstable-text')] = function (value$950) {
    return util$940.primitiveAccessor.apply(this, [
        'unstable-text',
        value$950
    ]);
};
RichTextPublisher$942.prototype[util$940.camelize('failed-text')] = function (value$951) {
    return util$940.primitiveAccessor.apply(this, [
        'failed-text',
        value$951
    ]);
};
RichTextPublisher$942.prototype[util$940.camelize('parser-name')] = function (value$952) {
    return util$940.primitiveAccessor.apply(this, [
        'parser-name',
        value$952
    ]);
};