'use strict';
var util$940 = require('../../../misc/util.js');
var Authorization$942 = function (upper$944, obj$945) {
    this.upper = upper$944;
    this.obj = obj$945;
};
Authorization$942.prototype.up = function () {
    return this.upper;
};
Authorization$942.prototype.and = Authorization$942.prototype.up;
module.exports = Authorization$942;
Authorization$942.prototype['authorize'] = function (name$946, value$947) {
    return util$940.primitiveArrayAccessor.apply(this, [
        name$946,
        value$947
    ]);
};