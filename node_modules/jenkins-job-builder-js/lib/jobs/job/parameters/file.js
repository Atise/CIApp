'use strict';
var util$940 = require('../../../misc/util.js');
var File$942 = function (upper$945, obj$946) {
    this.upper = upper$945;
    this.obj = obj$946;
};
File$942.prototype.up = function () {
    return this.upper;
};
File$942.prototype.and = File$942.prototype.up;
module.exports = File$942;
File$942.prototype[util$940.camelize('name')] = function (value$947) {
    return util$940.primitiveAccessor.apply(this, [
        'name',
        value$947
    ]);
};
File$942.prototype[util$940.camelize('description')] = function (value$948) {
    return util$940.primitiveAccessor.apply(this, [
        'description',
        value$948
    ]);
};