'use strict';
var util$940 = require('../../../misc/util.js');
var M2RepositoryCleanup$942 = function (upper$944, obj$945) {
    this.upper = upper$944;
    this.obj = obj$945;
};
M2RepositoryCleanup$942.prototype.up = function () {
    return this.upper;
};
M2RepositoryCleanup$942.prototype.and = M2RepositoryCleanup$942.prototype.up;
module.exports = M2RepositoryCleanup$942;
M2RepositoryCleanup$942.prototype[util$940.camelize('patterns')] = function (value$946) {
    return util$940.primitiveArrayAccessor.apply(this, [
        'patterns',
        value$946
    ]);
};