'use strict';
var util$940 = require('../../../../misc/util.js');
var Branch$941 = require('./branch.js');
var Branches$943 = function (upper$945, array$946) {
    this.upper = upper$945;
    this.array = array$946;
};
Branches$943.prototype.up = function () {
    return this.upper;
};
Branches$943.prototype.and = Branches$943.prototype.up;
module.exports = Branches$943;
Branches$943.prototype[util$940.camelize('branch')] = function (value$947) {
    return util$940.keyedObjectElementAccessor.apply(this, [
        'branch',
        Branch$941,
        value$947
    ]);
};