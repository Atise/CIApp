'use strict';
var util$940 = require('../../../misc/util.js');
var Group$941 = require('./build-result/group.js');
var BuildResult$943 = function (upper$947, obj$948) {
    this.upper = upper$947;
    this.obj = obj$948;
};
BuildResult$943.prototype.up = function () {
    return this.upper;
};
BuildResult$943.prototype.and = BuildResult$943.prototype.up;
module.exports = BuildResult$943;
BuildResult$943.prototype[util$940.camelize('groups')] = function (value$949) {
    return util$940.objectArrayAccessor.apply(this, [
        'groups',
        Group$941,
        value$949
    ]);
};
BuildResult$943.prototype[util$940.camelize('combine')] = function (value$950) {
    return util$940.primitiveAccessor.apply(this, [
        'combine',
        value$950
    ]);
};
BuildResult$943.prototype[util$940.camelize('cron')] = function (value$951) {
    return util$940.primitiveAccessor.apply(this, [
        'cron',
        value$951
    ]);
};