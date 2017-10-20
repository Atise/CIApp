'use strict';
var util$940 = require('../../../misc/util.js');
var GroovyPostbuild$942 = function (upper$948, obj$949) {
    this.upper = upper$948;
    this.obj = obj$949;
};
GroovyPostbuild$942.prototype.up = function () {
    return this.upper;
};
GroovyPostbuild$942.prototype.and = GroovyPostbuild$942.prototype.up;
module.exports = GroovyPostbuild$942;
GroovyPostbuild$942.prototype[util$940.camelize('script')] = function (value$950) {
    return util$940.primitiveAccessor.apply(this, [
        'script',
        value$950
    ]);
};
GroovyPostbuild$942.prototype[util$940.camelize('classpath')] = function (value$951) {
    return util$940.primitiveArrayAccessor.apply(this, [
        'classpath',
        value$951
    ]);
};
GroovyPostbuild$942.prototype[util$940.camelize('on-failure')] = function (value$952) {
    return util$940.primitiveAccessor.apply(this, [
        'on-failure',
        value$952
    ]);
};
GroovyPostbuild$942.prototype[util$940.camelize('matrix-parent')] = function (value$953) {
    return util$940.primitiveAccessor.apply(this, [
        'matrix-parent',
        value$953
    ]);
};
GroovyPostbuild$942.prototype[util$940.camelize('sandbox')] = function (value$954) {
    return util$940.primitiveAccessor.apply(this, [
        'sandbox',
        value$954
    ]);
};