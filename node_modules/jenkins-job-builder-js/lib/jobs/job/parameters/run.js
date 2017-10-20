'use strict';
var util$940 = require('../../../misc/util.js');
var Run$942 = function (upper$946, obj$947) {
    this.upper = upper$946;
    this.obj = obj$947;
};
Run$942.prototype.up = function () {
    return this.upper;
};
Run$942.prototype.and = Run$942.prototype.up;
module.exports = Run$942;
Run$942.prototype[util$940.camelize('name')] = function (value$948) {
    return util$940.primitiveAccessor.apply(this, [
        'name',
        value$948
    ]);
};
Run$942.prototype[util$940.camelize('project-name')] = function (value$949) {
    return util$940.primitiveAccessor.apply(this, [
        'project-name',
        value$949
    ]);
};
Run$942.prototype[util$940.camelize('description')] = function (value$950) {
    return util$940.primitiveAccessor.apply(this, [
        'description',
        value$950
    ]);
};