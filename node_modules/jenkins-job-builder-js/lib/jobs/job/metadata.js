'use strict';
var util$940 = require('../../misc/util.js');
var DateObject$941 = require('./metadata/date.js');
var Primitive$942 = require('./metadata/primitive.js');
var Metadata$944 = function (upper$948, array$949) {
    this.upper = upper$948;
    this.array = array$949;
};
Metadata$944.prototype.up = function () {
    return this.upper;
};
Metadata$944.prototype.and = Metadata$944.prototype.up;
module.exports = Metadata$944;
Metadata$944.prototype[util$940.camelize('date')] = function (value$950) {
    return util$940.keyedObjectElementAccessor.apply(this, [
        'date',
        DateObject$941,
        value$950
    ]);
};
Metadata$944.prototype[util$940.camelize('number')] = function (value$951) {
    return util$940.keyedObjectElementAccessor.apply(this, [
        'number',
        Primitive$942,
        value$951
    ]);
};
Metadata$944.prototype[util$940.camelize('string')] = function (value$952) {
    return util$940.keyedObjectElementAccessor.apply(this, [
        'string',
        Primitive$942,
        value$952
    ]);
};