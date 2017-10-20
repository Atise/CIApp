'use strict';
var util$940 = require('../../../misc/util.js');
var EnvScript$942 = function (upper$945, obj$946) {
    this.upper = upper$945;
    this.obj = obj$946;
};
EnvScript$942.prototype.up = function () {
    return this.upper;
};
EnvScript$942.prototype.and = EnvScript$942.prototype.up;
module.exports = EnvScript$942;
EnvScript$942.prototype[util$940.camelize('script-content')] = function (value$947) {
    return util$940.primitiveAccessor.apply(this, [
        'script-content',
        value$947
    ]);
};
EnvScript$942.prototype[util$940.camelize('only-run-on-parent')] = function (value$948) {
    return util$940.primitiveAccessor.apply(this, [
        'only-run-on-parent',
        value$948
    ]);
};