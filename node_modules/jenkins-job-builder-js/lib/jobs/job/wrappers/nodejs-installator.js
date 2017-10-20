'use strict';
var util$940 = require('../../../misc/util.js');
var NodeJsInstallator$942 = function (upper$944, obj$945) {
    this.upper = upper$944;
    this.obj = obj$945;
};
NodeJsInstallator$942.prototype.up = function () {
    return this.upper;
};
NodeJsInstallator$942.prototype.and = NodeJsInstallator$942.prototype.up;
module.exports = NodeJsInstallator$942;
NodeJsInstallator$942.prototype[util$940.camelize('name')] = function (value$946) {
    return util$940.primitiveAccessor.apply(this, [
        'name',
        value$946
    ]);
};