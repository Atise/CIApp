'use strict';
var util$940 = require('../../../misc/util.js');
var Tags$941 = require('./git/tags.js');
var Branches$942 = require('./git/branches.js');
var Notes$943 = require('./git/notes.js');
var Git$945 = function (upper$951, obj$952) {
    this.upper = upper$951;
    this.obj = obj$952;
};
Git$945.prototype.up = function () {
    return this.upper;
};
Git$945.prototype.and = Git$945.prototype.up;
module.exports = Git$945;
Git$945.prototype[util$940.camelize('push-merge')] = function (value$953) {
    return util$940.primitiveAccessor.apply(this, [
        'push-merge',
        value$953
    ]);
};
Git$945.prototype[util$940.camelize('push-only-if-success')] = function (value$954) {
    return util$940.primitiveAccessor.apply(this, [
        'push-only-if-success',
        value$954
    ]);
};
Git$945.prototype[util$940.camelize('tags')] = function (value$955) {
    return util$940.customArrayAccessor.apply(this, [
        'tags',
        Tags$941,
        value$955
    ]);
};
Git$945.prototype[util$940.camelize('branches')] = function (value$956) {
    return util$940.customArrayAccessor.apply(this, [
        'branches',
        Branches$942,
        value$956
    ]);
};
Git$945.prototype[util$940.camelize('notes')] = function (value$957) {
    return util$940.customArrayAccessor.apply(this, [
        'notes',
        Notes$943,
        value$957
    ]);
};