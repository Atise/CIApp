'use strict';
var util$940 = require('../../../../misc/util.js');
var WebAccess$942 = function (upper$944, obj$945) {
    this.upper = upper$944;
    this.obj = obj$945;
};
WebAccess$942.prototype.up = function () {
    return this.upper;
};
WebAccess$942.prototype.and = WebAccess$942.prototype.up;
module.exports = WebAccess$942;
WebAccess$942.prototype[util$940.camelize('web-url')] = function (value$946) {
    return util$940.primitiveAccessor.apply(this, [
        'web-url',
        value$946
    ]);
};