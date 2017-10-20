'use strict';
var util$940 = require('../../../../misc/util.js');
var Instance$942 = function (upper$946, obj$947) {
    this.upper = upper$946;
    this.obj = obj$947;
};
Instance$942.prototype.up = function () {
    return this.upper;
};
Instance$942.prototype.and = Instance$942.prototype.up;
module.exports = Instance$942;
Instance$942.prototype[util$940.camelize('cloud-name')] = function (value$948) {
    return util$940.primitiveAccessor.apply(this, [
        'cloud-name',
        value$948
    ]);
};
Instance$942.prototype[util$940.camelize('count')] = function (value$949) {
    return util$940.primitiveAccessor.apply(this, [
        'count',
        value$949
    ]);
};
Instance$942.prototype[util$940.camelize('stop-on-terminate')] = function (value$950) {
    return util$940.primitiveAccessor.apply(this, [
        'stop-on-terminate',
        value$950
    ]);
};