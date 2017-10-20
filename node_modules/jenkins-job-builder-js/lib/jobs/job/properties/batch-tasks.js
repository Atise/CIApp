'use strict';
var util$940 = require('../../../misc/util.js');
var BatchTasks$942 = function (upper$945, obj$946) {
    this.upper = upper$945;
    this.obj = obj$946;
};
BatchTasks$942.prototype.up = function () {
    return this.upper;
};
BatchTasks$942.prototype.and = BatchTasks$942.prototype.up;
module.exports = BatchTasks$942;
BatchTasks$942.prototype[util$940.camelize('name')] = function (value$947) {
    return util$940.primitiveAccessor.apply(this, [
        'name',
        value$947
    ]);
};
BatchTasks$942.prototype[util$940.camelize('script')] = function (value$948) {
    return util$940.primitiveAccessor.apply(this, [
        'script',
        value$948
    ]);
};