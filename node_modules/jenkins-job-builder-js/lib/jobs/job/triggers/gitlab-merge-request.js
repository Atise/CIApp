'use strict';
var util$940 = require('../../../misc/util.js');
var GitlabMergeRequest$942 = function (upper$945, obj$946) {
    this.upper = upper$945;
    this.obj = obj$946;
};
GitlabMergeRequest$942.prototype.up = function () {
    return this.upper;
};
GitlabMergeRequest$942.prototype.and = GitlabMergeRequest$942.prototype.up;
module.exports = GitlabMergeRequest$942;
GitlabMergeRequest$942.prototype[util$940.camelize('cron')] = function (value$947) {
    return util$940.primitiveAccessor.apply(this, [
        'cron',
        value$947
    ]);
};
GitlabMergeRequest$942.prototype[util$940.camelize('project-path')] = function (value$948) {
    return util$940.primitiveAccessor.apply(this, [
        'project-path',
        value$948
    ]);
};