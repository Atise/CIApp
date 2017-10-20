'use strict';
var util$940 = require('../../../../misc/util.js');
var HardwareProperties$942 = function (upper$944, obj$945) {
    this.upper = upper$944;
    this.obj = obj$945;
};
HardwareProperties$942.prototype.up = function () {
    return this.upper;
};
HardwareProperties$942.prototype.and = HardwareProperties$942.prototype.up;
module.exports = HardwareProperties$942;
HardwareProperties$942.prototype['define'] = function (name$946, value$947) {
    return util$940.primitiveAccessor.apply(this, [
        name$946,
        value$947
    ]);
};