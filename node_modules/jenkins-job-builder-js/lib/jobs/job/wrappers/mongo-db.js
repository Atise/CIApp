'use strict';
var util$940 = require('../../../misc/util.js');
var MongoDb$942 = function (upper$948, obj$949) {
    this.upper = upper$948;
    this.obj = obj$949;
};
MongoDb$942.prototype.up = function () {
    return this.upper;
};
MongoDb$942.prototype.and = MongoDb$942.prototype.up;
module.exports = MongoDb$942;
MongoDb$942.prototype[util$940.camelize('name')] = function (value$950) {
    return util$940.primitiveAccessor.apply(this, [
        'name',
        value$950
    ]);
};
MongoDb$942.prototype[util$940.camelize('data-directory')] = function (value$951) {
    return util$940.primitiveAccessor.apply(this, [
        'data-directory',
        value$951
    ]);
};
MongoDb$942.prototype[util$940.camelize('port')] = function (value$952) {
    return util$940.primitiveAccessor.apply(this, [
        'port',
        value$952
    ]);
};
MongoDb$942.prototype[util$940.camelize('startup-params')] = function (value$953) {
    return util$940.primitiveAccessor.apply(this, [
        'startup-params',
        value$953
    ]);
};
MongoDb$942.prototype[util$940.camelize('start-timeout')] = function (value$954) {
    return util$940.primitiveAccessor.apply(this, [
        'start-timeout',
        value$954
    ]);
};