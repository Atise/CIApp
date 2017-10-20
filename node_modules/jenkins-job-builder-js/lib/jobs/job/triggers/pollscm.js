'use strict';
var util$940 = require('../../../misc/util.js');
var PollScm$942 = function (upper$945, obj$946) {
    this.upper = upper$945;
    this.obj = obj$946;
};
PollScm$942.prototype.up = function () {
    return this.upper;
};
PollScm$942.prototype.and = PollScm$942.prototype.up;
module.exports = PollScm$942;
PollScm$942.prototype[util$940.camelize('cron')] = function (value$947) {
    return util$940.primitiveAccessor.apply(this, [
        'cron',
        value$947
    ]);
};
PollScm$942.prototype[util$940.camelize('ignore-post-commit-hooks')] = function (value$948) {
    return util$940.primitiveAccessor.apply(this, [
        'ignore-post-commit-hooks',
        value$948
    ]);
};