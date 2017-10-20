'use strict';
var util$940 = require('../../../../misc/util.js');
var Group$942 = function (upper$945, obj$946) {
    this.upper = upper$945;
    this.obj = obj$946;
};
Group$942.prototype.up = function () {
    return this.upper;
};
Group$942.prototype.and = Group$942.prototype.up;
module.exports = Group$942;
Group$942.prototype[util$940.camelize('jobs')] = function (value$947) {
    return util$940.primitiveArrayAccessor.apply(this, [
        'jobs',
        value$947
    ]);
};
Group$942.prototype[util$940.camelize('results')] = function (value$948) {
    return util$940.primitiveArrayAccessor.apply(this, [
        'results',
        value$948
    ]);
};