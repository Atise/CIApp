'use strict';
var util$940 = require('../../../misc/util.js');
var Xvnc$942 = function (upper$945, obj$946) {
    this.upper = upper$945;
    this.obj = obj$946;
};
Xvnc$942.prototype.up = function () {
    return this.upper;
};
Xvnc$942.prototype.and = Xvnc$942.prototype.up;
module.exports = Xvnc$942;
Xvnc$942.prototype[util$940.camelize('screenshot')] = function (value$947) {
    return util$940.primitiveAccessor.apply(this, [
        'screenshot',
        value$947
    ]);
};
Xvnc$942.prototype[util$940.camelize('xauthority')] = function (value$948) {
    return util$940.primitiveAccessor.apply(this, [
        'xauthority',
        value$948
    ]);
};