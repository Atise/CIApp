'use strict';
var util$940 = require('../../../misc/util.js');
var Url$941 = require('./pollurl/url.js');
var PollUrl$943 = function (upper$947, obj$948) {
    this.upper = upper$947;
    this.obj = obj$948;
};
PollUrl$943.prototype.up = function () {
    return this.upper;
};
PollUrl$943.prototype.and = PollUrl$943.prototype.up;
module.exports = PollUrl$943;
PollUrl$943.prototype[util$940.camelize('cron')] = function (value$949) {
    return util$940.primitiveAccessor.apply(this, [
        'cron',
        value$949
    ]);
};
PollUrl$943.prototype[util$940.camelize('polling-node')] = function (value$950) {
    return util$940.primitiveAccessor.apply(this, [
        'polling-node',
        value$950
    ]);
};
PollUrl$943.prototype[util$940.camelize('urls')] = function (value$951) {
    return util$940.objectArrayAccessor.apply(this, [
        'urls',
        Url$941,
        value$951
    ]);
};