'use strict';
var util$940 = require('../../../../misc/util.js');
var Location$941 = require('./repo/location.js');
var Repo$943 = function (upper$948, obj$949) {
    this.upper = upper$948;
    this.obj = obj$949;
};
Repo$943.prototype.up = function () {
    return this.upper;
};
Repo$943.prototype.and = Repo$943.prototype.up;
module.exports = Repo$943;
Repo$943.prototype[util$940.camelize('root')] = function (value$950) {
    return util$940.primitiveAccessor.apply(this, [
        'root',
        value$950
    ]);
};
Repo$943.prototype[util$940.camelize('locations')] = function (value$951) {
    return util$940.objectArrayAccessor.apply(this, [
        'locations',
        Location$941,
        value$951
    ]);
};
Repo$943.prototype[util$940.camelize('excluded-regions')] = function (value$952) {
    return util$940.primitiveArrayAccessor.apply(this, [
        'excluded-regions',
        value$952
    ]);
};
Repo$943.prototype[util$940.camelize('compression-level')] = function (value$953) {
    return util$940.primitiveAccessor.apply(this, [
        'compression-level',
        value$953
    ]);
};