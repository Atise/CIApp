'use strict';
var util$940 = require('../../../misc/util.js');
var SshAgentCredentials$942 = function (upper$944, obj$945) {
    this.upper = upper$944;
    this.obj = obj$945;
};
SshAgentCredentials$942.prototype.up = function () {
    return this.upper;
};
SshAgentCredentials$942.prototype.and = SshAgentCredentials$942.prototype.up;
module.exports = SshAgentCredentials$942;
SshAgentCredentials$942.prototype[util$940.camelize('users')] = function (value$946) {
    return util$940.primitiveArrayAccessor.apply(this, [
        'users',
        value$946
    ]);
};