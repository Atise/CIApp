'use strict';
var util$940 = require('../../../misc/util.js');
var TestNg$942 = function (upper$946, obj$947) {
    this.upper = upper$946;
    this.obj = obj$947;
};
TestNg$942.prototype.up = function () {
    return this.upper;
};
TestNg$942.prototype.and = TestNg$942.prototype.up;
module.exports = TestNg$942;
TestNg$942.prototype[util$940.camelize('pattern')] = function (value$948) {
    return util$940.primitiveAccessor.apply(this, [
        'pattern',
        value$948
    ]);
};
TestNg$942.prototype[util$940.camelize('escape-test-description')] = function (value$949) {
    return util$940.primitiveAccessor.apply(this, [
        'escape-test-description',
        value$949
    ]);
};
TestNg$942.prototype[util$940.camelize('escape-exception-msg')] = function (value$950) {
    return util$940.primitiveAccessor.apply(this, [
        'escape-exception-msg',
        value$950
    ]);
};