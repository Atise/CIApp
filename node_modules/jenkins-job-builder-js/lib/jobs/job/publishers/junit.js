'use strict';
var util$940 = require('../../../misc/util.js');
var Junit$942 = function (upper$948, obj$949) {
    this.upper = upper$948;
    this.obj = obj$949;
};
Junit$942.prototype.up = function () {
    return this.upper;
};
Junit$942.prototype.and = Junit$942.prototype.up;
module.exports = Junit$942;
Junit$942.prototype[util$940.camelize('results')] = function (value$950) {
    return util$940.primitiveAccessor.apply(this, [
        'results',
        value$950
    ]);
};
Junit$942.prototype[util$940.camelize('keep-long-stdio')] = function (value$951) {
    return util$940.primitiveAccessor.apply(this, [
        'keep-long-stdio',
        value$951
    ]);
};
Junit$942.prototype[util$940.camelize('test-stability')] = function (value$952) {
    return util$940.primitiveAccessor.apply(this, [
        'test-stability',
        value$952
    ]);
};
Junit$942.prototype[util$940.camelize('claim-build')] = function (value$953) {
    return util$940.primitiveAccessor.apply(this, [
        'claim-build',
        value$953
    ]);
};
Junit$942.prototype[util$940.camelize('measurement-plots')] = function (value$954) {
    return util$940.primitiveAccessor.apply(this, [
        'measurement-plots',
        value$954
    ]);
};