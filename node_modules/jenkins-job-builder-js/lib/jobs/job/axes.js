'use strict';
var util$940 = require('../../misc/util.js');
var Axis$941 = require('./axes/axis.js');
var Axes$943 = function (upper$945, array$946) {
    this.upper = upper$945;
    this.array = array$946;
};
Axes$943.prototype.up = function () {
    return this.upper;
};
Axes$943.prototype.and = Axes$943.prototype.up;
module.exports = Axes$943;
Axes$943.prototype[util$940.camelize('axis')] = function (value$947) {
    return util$940.keyedObjectElementAccessor.apply(this, [
        'axis',
        Axis$941,
        value$947
    ]);
};