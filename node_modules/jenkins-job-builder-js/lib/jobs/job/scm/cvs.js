'use strict';
var util$940 = require('../../../misc/util.js');
var Repo$941 = require('./cvs/repo.js');
var Cvs$943 = function (upper$951, obj$952) {
    this.upper = upper$951;
    this.obj = obj$952;
};
Cvs$943.prototype.up = function () {
    return this.upper;
};
Cvs$943.prototype.and = Cvs$943.prototype.up;
module.exports = Cvs$943;
Cvs$943.prototype[util$940.camelize('repos')] = function (value$953) {
    return util$940.objectArrayAccessor.apply(this, [
        'repos',
        Repo$941,
        value$953
    ]);
};
Cvs$943.prototype[util$940.camelize('use-update')] = function (value$954) {
    return util$940.primitiveAccessor.apply(this, [
        'use-update',
        value$954
    ]);
};
Cvs$943.prototype[util$940.camelize('prune-empty')] = function (value$955) {
    return util$940.primitiveAccessor.apply(this, [
        'prune-empty',
        value$955
    ]);
};
Cvs$943.prototype[util$940.camelize('skip-changelog')] = function (value$956) {
    return util$940.primitiveAccessor.apply(this, [
        'skip-changelog',
        value$956
    ]);
};
Cvs$943.prototype[util$940.camelize('show-all-output')] = function (value$957) {
    return util$940.primitiveAccessor.apply(this, [
        'show-all-output',
        value$957
    ]);
};
Cvs$943.prototype[util$940.camelize('clean-checkout')] = function (value$958) {
    return util$940.primitiveAccessor.apply(this, [
        'clean-checkout',
        value$958
    ]);
};
Cvs$943.prototype[util$940.camelize('clean-copy')] = function (value$959) {
    return util$940.primitiveAccessor.apply(this, [
        'clean-copy',
        value$959
    ]);
};