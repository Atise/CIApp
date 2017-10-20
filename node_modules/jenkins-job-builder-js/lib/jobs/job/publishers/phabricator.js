'use strict';
var util$940 = require('../../../misc/util.js');
var Phabricator$942 = function (upper$948, obj$949) {
    this.upper = upper$948;
    this.obj = obj$949;
};
Phabricator$942.prototype.up = function () {
    return this.upper;
};
Phabricator$942.prototype.and = Phabricator$942.prototype.up;
module.exports = Phabricator$942;
Phabricator$942.prototype[util$940.camelize('comment-on-success')] = function (value$950) {
    return util$940.primitiveAccessor.apply(this, [
        'comment-on-success',
        value$950
    ]);
};
Phabricator$942.prototype[util$940.camelize('uberalls-enabled')] = function (value$951) {
    return util$940.primitiveAccessor.apply(this, [
        'uberalls-enabled',
        value$951
    ]);
};
Phabricator$942.prototype[util$940.camelize('comment-file')] = function (value$952) {
    return util$940.primitiveAccessor.apply(this, [
        'comment-file',
        value$952
    ]);
};
Phabricator$942.prototype[util$940.camelize('comment-size')] = function (value$953) {
    return util$940.primitiveAccessor.apply(this, [
        'comment-size',
        value$953
    ]);
};
Phabricator$942.prototype[util$940.camelize('comment-with-console-link-on-failure')] = function (value$954) {
    return util$940.primitiveAccessor.apply(this, [
        'comment-with-console-link-on-failure',
        value$954
    ]);
};