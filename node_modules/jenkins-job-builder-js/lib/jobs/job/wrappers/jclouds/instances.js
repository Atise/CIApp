'use strict';
var util$940 = require('../../../../misc/util.js');
var Instance$941 = require('./instance.js');
var Instances$943 = function (upper$944, obj$945) {
    this.upper = upper$944;
    this.obj = obj$945;
};
Instances$943.prototype.up = function () {
    return this.upper;
};
Instances$943.prototype.and = Instances$943.prototype.up;
module.exports = Instances$943;
Instances$943.prototype.build = util$940.generateCustomKeyObjectElementAccessor('obj', Instance$941);