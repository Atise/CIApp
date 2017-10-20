'use strict';
var util$940 = require('../../../misc/util.js');
var SystemGroovy$942 = function (upper$947, obj$948) {
    this.upper = upper$947;
    this.obj = obj$948;
};
SystemGroovy$942.prototype.up = function () {
    return this.upper;
};
SystemGroovy$942.prototype.and = SystemGroovy$942.prototype.up;
module.exports = SystemGroovy$942;
SystemGroovy$942.prototype[util$940.camelize('file')] = function (value$949) {
    return util$940.primitiveAccessor.apply(this, [
        'file',
        value$949
    ]);
};
SystemGroovy$942.prototype[util$940.camelize('command')] = function (value$950) {
    return util$940.primitiveAccessor.apply(this, [
        'command',
        value$950
    ]);
};
SystemGroovy$942.prototype[util$940.camelize('bindings')] = function (value$951) {
    return util$940.primitiveAccessor.apply(this, [
        'bindings',
        value$951
    ]);
};
SystemGroovy$942.prototype[util$940.camelize('class-path')] = function (value$952) {
    return util$940.primitiveAccessor.apply(this, [
        'class-path',
        value$952
    ]);
};