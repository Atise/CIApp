'use strict';
var util$940 = require('../../../misc/util.js');
var JoinTrigger$942 = function (upper$944, obj$945) {
    this.upper = upper$944;
    this.obj = obj$945;
};
JoinTrigger$942.prototype.up = function () {
    return this.upper;
};
JoinTrigger$942.prototype.and = JoinTrigger$942.prototype.up;
module.exports = JoinTrigger$942;
JoinTrigger$942.prototype[util$940.camelize('projects')] = function (value$946) {
    return util$940.primitiveArrayAccessor.apply(this, [
        'projects',
        value$946
    ]);
};