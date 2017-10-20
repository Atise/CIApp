'use strict';
var util$940 = require('../../../misc/util.js');
var Credential$941 = require('./credentials-binding/credential.js');
var CredentialsBinding$943 = function (upper$948, array$949) {
    this.upper = upper$948;
    this.array = array$949;
};
CredentialsBinding$943.prototype.up = function () {
    return this.upper;
};
CredentialsBinding$943.prototype.and = CredentialsBinding$943.prototype.up;
module.exports = CredentialsBinding$943;
CredentialsBinding$943.prototype[util$940.camelize('zip-file')] = function (value$950) {
    return util$940.keyedObjectElementAccessor.apply(this, [
        'zip-file',
        Credential$941,
        value$950
    ]);
};
CredentialsBinding$943.prototype[util$940.camelize('file')] = function (value$951) {
    return util$940.keyedObjectElementAccessor.apply(this, [
        'file',
        Credential$941,
        value$951
    ]);
};
CredentialsBinding$943.prototype[util$940.camelize('username-password')] = function (value$952) {
    return util$940.keyedObjectElementAccessor.apply(this, [
        'username-password',
        Credential$941,
        value$952
    ]);
};
CredentialsBinding$943.prototype[util$940.camelize('text')] = function (value$953) {
    return util$940.keyedObjectElementAccessor.apply(this, [
        'text',
        Credential$941,
        value$953
    ]);
};