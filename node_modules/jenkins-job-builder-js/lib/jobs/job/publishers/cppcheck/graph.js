'use strict';
var util$940 = require('../../../../misc/util.js');
var Display$941 = require('./graph/display.js');
var Graph$943 = function (upper$946, obj$947) {
    this.upper = upper$946;
    this.obj = obj$947;
};
Graph$943.prototype.up = function () {
    return this.upper;
};
Graph$943.prototype.and = Graph$943.prototype.up;
module.exports = Graph$943;
Graph$943.prototype[util$940.camelize('xysize')] = function (value$948) {
    return util$940.primitiveArrayAccessor.apply(this, [
        'xysize',
        value$948
    ]);
};
Graph$943.prototype[util$940.camelize('display')] = function (value$949) {
    return util$940.objectAccessor.apply(this, [
        'display',
        Display$941,
        value$949
    ]);
};