'use strict';
var util$940 = require('../../../misc/util.js');
var Jdepend$942 = function (upper$944, obj$945) {
    this.upper = upper$944;
    this.obj = obj$945;
};
Jdepend$942.prototype.up = function () {
    return this.upper;
};
Jdepend$942.prototype.and = Jdepend$942.prototype.up;
module.exports = Jdepend$942;
Jdepend$942.prototype[util$940.camelize('file')] = function (value$946) {
    return util$940.primitiveAccessor.apply(this, [
        'file',
        value$946
    ]);
};