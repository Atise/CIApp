'use strict';
var util$940 = require('../../../misc/util.js');
var LiveScreenshot$942 = function (upper$945, obj$946) {
    this.upper = upper$945;
    this.obj = obj$946;
};
LiveScreenshot$942.prototype.up = function () {
    return this.upper;
};
LiveScreenshot$942.prototype.and = LiveScreenshot$942.prototype.up;
module.exports = LiveScreenshot$942;
LiveScreenshot$942.prototype[util$940.camelize('full-size')] = function (value$947) {
    return util$940.primitiveAccessor.apply(this, [
        'full-size',
        value$947
    ]);
};
LiveScreenshot$942.prototype[util$940.camelize('thumbnail')] = function (value$948) {
    return util$940.primitiveAccessor.apply(this, [
        'thumbnail',
        value$948
    ]);
};