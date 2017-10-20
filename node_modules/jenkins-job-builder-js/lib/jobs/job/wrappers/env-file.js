'use strict';
var util$940 = require('../../../misc/util.js');
var EnvFile$942 = function (upper$944, obj$945) {
    this.upper = upper$944;
    this.obj = obj$945;
};
EnvFile$942.prototype.up = function () {
    return this.upper;
};
EnvFile$942.prototype.and = EnvFile$942.prototype.up;
module.exports = EnvFile$942;
EnvFile$942.prototype[util$940.camelize('properties-file')] = function (value$946) {
    return util$940.primitiveAccessor.apply(this, [
        'properties-file',
        value$946
    ]);
};