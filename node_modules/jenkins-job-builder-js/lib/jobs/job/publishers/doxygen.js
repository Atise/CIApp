'use strict';
var util$940 = require('../../../misc/util.js');
var Doxygen$942 = function (upper$946, obj$947) {
    this.upper = upper$946;
    this.obj = obj$947;
};
Doxygen$942.prototype.up = function () {
    return this.upper;
};
Doxygen$942.prototype.and = Doxygen$942.prototype.up;
module.exports = Doxygen$942;
Doxygen$942.prototype[util$940.camelize('doxyfile')] = function (value$948) {
    return util$940.primitiveAccessor.apply(this, [
        'doxyfile',
        value$948
    ]);
};
Doxygen$942.prototype[util$940.camelize('keepall')] = function (value$949) {
    return util$940.primitiveAccessor.apply(this, [
        'keepall',
        value$949
    ]);
};
Doxygen$942.prototype[util$940.camelize('folder')] = function (value$950) {
    return util$940.primitiveAccessor.apply(this, [
        'folder',
        value$950
    ]);
};