'use strict';
var util$940 = require('../../../../misc/util.js');
var Tag$941 = require('./tag.js');
var Tags$943 = function (upper$945, array$946) {
    this.upper = upper$945;
    this.array = array$946;
};
Tags$943.prototype.up = function () {
    return this.upper;
};
Tags$943.prototype.and = Tags$943.prototype.up;
module.exports = Tags$943;
Tags$943.prototype[util$940.camelize('tag')] = function (value$947) {
    return util$940.keyedObjectElementAccessor.apply(this, [
        'tag',
        Tag$941,
        value$947
    ]);
};