'use strict';
var util$940 = require('../../../misc/util.js');
var Match$941 = require('./post-tasks/match.js');
var PostTasks$943 = function (upper$948, obj$949) {
    this.upper = upper$948;
    this.obj = obj$949;
};
PostTasks$943.prototype.up = function () {
    return this.upper;
};
PostTasks$943.prototype.and = PostTasks$943.prototype.up;
module.exports = PostTasks$943;
PostTasks$943.prototype[util$940.camelize('matches')] = function (value$950) {
    return util$940.objectArrayAccessor.apply(this, [
        'matches',
        Match$941,
        value$950
    ]);
};
PostTasks$943.prototype[util$940.camelize('escalate-status')] = function (value$951) {
    return util$940.primitiveAccessor.apply(this, [
        'escalate-status',
        value$951
    ]);
};
PostTasks$943.prototype[util$940.camelize('run-if-job-successful')] = function (value$952) {
    return util$940.primitiveAccessor.apply(this, [
        'run-if-job-successful',
        value$952
    ]);
};
PostTasks$943.prototype[util$940.camelize('script')] = function (value$953) {
    return util$940.primitiveAccessor.apply(this, [
        'script',
        value$953
    ]);
};