'use strict';
var util$940 = require('../../misc/util.js');
var Email$941 = require('./publishers/email.js');
var FindBugs$942 = require('./publishers/findbugs.js');
var Reporters$944 = function (upper$947, array$948) {
    this.upper = upper$947;
    this.array = array$948;
};
Reporters$944.prototype.up = function () {
    return this.upper;
};
Reporters$944.prototype.and = Reporters$944.prototype.up;
module.exports = Reporters$944;
Reporters$944.prototype[util$940.camelize('email')] = function (value$949) {
    return util$940.keyedObjectElementAccessor.apply(this, [
        'email',
        Email$941,
        value$949
    ]);
};
Reporters$944.prototype[util$940.camelize('findbugs')] = function (value$950) {
    return util$940.keyedObjectElementAccessor.apply(this, [
        'findbugs',
        FindBugs$942,
        value$950
    ]);
};