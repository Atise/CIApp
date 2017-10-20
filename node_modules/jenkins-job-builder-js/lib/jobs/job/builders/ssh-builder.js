'use strict';
var util$940 = require('../../../misc/util.js');
var SshBuilder$942 = function (upper$945, obj$946) {
    this.upper = upper$945;
    this.obj = obj$946;
};
SshBuilder$942.prototype.up = function () {
    return this.upper;
};
SshBuilder$942.prototype.and = SshBuilder$942.prototype.up;
module.exports = SshBuilder$942;
SshBuilder$942.prototype[util$940.camelize('ssh-user-ip')] = function (value$947) {
    return util$940.primitiveAccessor.apply(this, [
        'ssh-user-ip',
        value$947
    ]);
};
SshBuilder$942.prototype[util$940.camelize('command')] = function (value$948) {
    return util$940.primitiveAccessor.apply(this, [
        'command',
        value$948
    ]);
};