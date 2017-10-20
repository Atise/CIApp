'use strict';
var util$940 = require('../../../../misc/util.js');
var Html$942 = function (upper$945, obj$946) {
    this.upper = upper$945;
    this.obj = obj$946;
};
Html$942.prototype.up = function () {
    return this.upper;
};
Html$942.prototype.and = Html$942.prototype.up;
module.exports = Html$942;
Html$942.prototype[util$940.camelize('dir')] = function (value$947) {
    return util$940.primitiveAccessor.apply(this, [
        'dir',
        value$947
    ]);
};
Html$942.prototype[util$940.camelize('archive')] = function (value$948) {
    return util$940.primitiveAccessor.apply(this, [
        'archive',
        value$948
    ]);
};