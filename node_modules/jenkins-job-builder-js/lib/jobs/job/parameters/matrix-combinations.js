'use strict';
var util$940 = require('../../../misc/util.js');
var MatrixCombinations$942 = function (upper$946, obj$947) {
    this.upper = upper$946;
    this.obj = obj$947;
};
MatrixCombinations$942.prototype.up = function () {
    return this.upper;
};
MatrixCombinations$942.prototype.and = MatrixCombinations$942.prototype.up;
module.exports = MatrixCombinations$942;
MatrixCombinations$942.prototype[util$940.camelize('name')] = function (value$948) {
    return util$940.primitiveAccessor.apply(this, [
        'name',
        value$948
    ]);
};
MatrixCombinations$942.prototype[util$940.camelize('description')] = function (value$949) {
    return util$940.primitiveAccessor.apply(this, [
        'description',
        value$949
    ]);
};
MatrixCombinations$942.prototype[util$940.camelize('filter')] = function (value$950) {
    return util$940.primitiveAccessor.apply(this, [
        'filter',
        value$950
    ]);
};