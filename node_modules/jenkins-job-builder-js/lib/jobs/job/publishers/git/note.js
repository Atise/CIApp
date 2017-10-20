'use strict';
var util$940 = require('../../../../misc/util.js');
var Note$942 = function (upper$947, obj$948) {
    this.upper = upper$947;
    this.obj = obj$948;
};
Note$942.prototype.up = function () {
    return this.upper;
};
Note$942.prototype.and = Note$942.prototype.up;
module.exports = Note$942;
Note$942.prototype[util$940.camelize('remote')] = function (value$949) {
    return util$940.primitiveAccessor.apply(this, [
        'remote',
        value$949
    ]);
};
Note$942.prototype[util$940.camelize('message')] = function (value$950) {
    return util$940.primitiveAccessor.apply(this, [
        'message',
        value$950
    ]);
};
Note$942.prototype[util$940.camelize('namespace')] = function (value$951) {
    return util$940.primitiveAccessor.apply(this, [
        'namespace',
        value$951
    ]);
};
Note$942.prototype[util$940.camelize('replace-note')] = function (value$952) {
    return util$940.primitiveAccessor.apply(this, [
        'replace-note',
        value$952
    ]);
};