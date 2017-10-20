'use strict';
var util$940 = require('../../../../misc/util.js');
var JobPassword$942 = function (upper$945, obj$946) {
    this.upper = upper$945;
    this.obj = obj$946;
};
JobPassword$942.prototype.up = function () {
    return this.upper;
};
JobPassword$942.prototype.and = JobPassword$942.prototype.up;
module.exports = JobPassword$942;
JobPassword$942.prototype[util$940.camelize('name')] = function (value$947) {
    return util$940.primitiveAccessor.apply(this, [
        'name',
        value$947
    ]);
};
JobPassword$942.prototype[util$940.camelize('password')] = function (value$948) {
    return util$940.primitiveAccessor.apply(this, [
        'password',
        value$948
    ]);
};