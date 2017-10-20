'use strict';
var util$940 = require('../../../misc/util.js');
var ScanBuild$942 = function (upper$946, obj$947) {
    this.upper = upper$946;
    this.obj = obj$947;
};
ScanBuild$942.prototype.up = function () {
    return this.upper;
};
ScanBuild$942.prototype.and = ScanBuild$942.prototype.up;
module.exports = ScanBuild$942;
ScanBuild$942.prototype[util$940.camelize('mark-unstable')] = function (value$948) {
    return util$940.primitiveAccessor.apply(this, [
        'mark-unstable',
        value$948
    ]);
};
ScanBuild$942.prototype[util$940.camelize('threshold')] = function (value$949) {
    return util$940.primitiveAccessor.apply(this, [
        'threshold',
        value$949
    ]);
};
ScanBuild$942.prototype[util$940.camelize('exclude-paths')] = function (value$950) {
    return util$940.primitiveAccessor.apply(this, [
        'exclude-paths',
        value$950
    ]);
};