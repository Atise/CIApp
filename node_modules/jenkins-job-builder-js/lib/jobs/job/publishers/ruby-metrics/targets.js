'use strict';
var util$940 = require('../../../../misc/util.js');
var Target$941 = require('./target.js');
var Targets$943 = function (upper$946, array$947) {
    this.upper = upper$946;
    this.array = array$947;
};
Targets$943.prototype.up = function () {
    return this.upper;
};
Targets$943.prototype.and = Targets$943.prototype.up;
module.exports = Targets$943;
Targets$943.prototype[util$940.camelize('total-coverage')] = function (value$948) {
    return util$940.keyedObjectElementAccessor.apply(this, [
        'total-coverage',
        Target$941,
        value$948
    ]);
};
Targets$943.prototype[util$940.camelize('code-coverage')] = function (value$949) {
    return util$940.keyedObjectElementAccessor.apply(this, [
        'code-coverage',
        Target$941,
        value$949
    ]);
};