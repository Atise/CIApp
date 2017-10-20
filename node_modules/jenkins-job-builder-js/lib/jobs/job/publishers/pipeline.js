'use strict';
var util$940 = require('../../../misc/util.js');
var Pipeline$942 = function (upper$946, obj$947) {
    this.upper = upper$946;
    this.obj = obj$947;
};
Pipeline$942.prototype.up = function () {
    return this.upper;
};
Pipeline$942.prototype.and = Pipeline$942.prototype.up;
module.exports = Pipeline$942;
Pipeline$942.prototype[util$940.camelize('project')] = function (value$948) {
    return util$940.primitiveAccessor.apply(this, [
        'project',
        value$948
    ]);
};
Pipeline$942.prototype[util$940.camelize('predefined-parameters')] = function (value$949) {
    return util$940.primitiveAccessor.apply(this, [
        'predefined-parameters',
        value$949
    ]);
};
Pipeline$942.prototype[util$940.camelize('current-parameters')] = function (value$950) {
    return util$940.primitiveAccessor.apply(this, [
        'current-parameters',
        value$950
    ]);
};