'use strict';
var util$940 = require('../../../misc/util.js');
var Trigger$942 = function (upper$945, obj$946) {
    this.upper = upper$945;
    this.obj = obj$946;
};
Trigger$942.prototype.up = function () {
    return this.upper;
};
Trigger$942.prototype.and = Trigger$942.prototype.up;
module.exports = Trigger$942;
Trigger$942.prototype[util$940.camelize('project')] = function (value$947) {
    return util$940.primitiveAccessor.apply(this, [
        'project',
        value$947
    ]);
};
Trigger$942.prototype[util$940.camelize('threshold')] = function (value$948) {
    return util$940.primitiveAccessor.apply(this, [
        'threshold',
        value$948
    ]);
};