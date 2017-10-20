'use strict';
var util$940 = require('../../../../misc/util.js');
var Note$941 = require('./note.js');
var Notes$943 = function (upper$945, array$946) {
    this.upper = upper$945;
    this.array = array$946;
};
Notes$943.prototype.up = function () {
    return this.upper;
};
Notes$943.prototype.and = Notes$943.prototype.up;
module.exports = Notes$943;
Notes$943.prototype[util$940.camelize('note')] = function (value$947) {
    return util$940.keyedObjectElementAccessor.apply(this, [
        'note',
        Note$941,
        value$947
    ]);
};