'use strict';
var util$940 = require('../../../misc/util.js');
var JobPassword$941 = require('./inject-passwords/job-password.js');
var InjectPasswords$943 = function (upper$947, obj$948) {
    this.upper = upper$947;
    this.obj = obj$948;
};
InjectPasswords$943.prototype.up = function () {
    return this.upper;
};
InjectPasswords$943.prototype.and = InjectPasswords$943.prototype.up;
module.exports = InjectPasswords$943;
InjectPasswords$943.prototype[util$940.camelize('global')] = function (value$949) {
    return util$940.primitiveAccessor.apply(this, [
        'global',
        value$949
    ]);
};
InjectPasswords$943.prototype[util$940.camelize('mask-password-params')] = function (value$950) {
    return util$940.primitiveAccessor.apply(this, [
        'mask-password-params',
        value$950
    ]);
};
InjectPasswords$943.prototype[util$940.camelize('job-passwords')] = function (value$951) {
    return util$940.objectArrayAccessor.apply(this, [
        'job-passwords',
        JobPassword$941,
        value$951
    ]);
};