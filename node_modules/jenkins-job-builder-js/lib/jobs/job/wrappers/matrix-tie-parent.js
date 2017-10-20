'use strict';
var util$940 = require('../../../misc/util.js');
var MatrixTieParent$942 = function (upper$944, obj$945) {
    this.upper = upper$944;
    this.obj = obj$945;
};
MatrixTieParent$942.prototype.up = function () {
    return this.upper;
};
MatrixTieParent$942.prototype.and = MatrixTieParent$942.prototype.up;
module.exports = MatrixTieParent$942;
MatrixTieParent$942.prototype[util$940.camelize('node')] = function (value$946) {
    return util$940.primitiveAccessor.apply(this, [
        'node',
        value$946
    ]);
};