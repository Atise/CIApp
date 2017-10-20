'use strict';
var util$940 = require('../../../misc/util.js');
var Rbenv$942 = function (upper$951, obj$952) {
    this.upper = upper$951;
    this.obj = obj$952;
};
Rbenv$942.prototype.up = function () {
    return this.upper;
};
Rbenv$942.prototype.and = Rbenv$942.prototype.up;
module.exports = Rbenv$942;
Rbenv$942.prototype[util$940.camelize('ruby-version')] = function (value$953) {
    return util$940.primitiveAccessor.apply(this, [
        'ruby-version',
        value$953
    ]);
};
Rbenv$942.prototype[util$940.camelize('ignore-local-version')] = function (value$954) {
    return util$940.primitiveAccessor.apply(this, [
        'ignore-local-version',
        value$954
    ]);
};
Rbenv$942.prototype[util$940.camelize('preinstall-gem-list')] = function (value$955) {
    return util$940.primitiveAccessor.apply(this, [
        'preinstall-gem-list',
        value$955
    ]);
};
Rbenv$942.prototype[util$940.camelize('rbenv-root')] = function (value$956) {
    return util$940.primitiveAccessor.apply(this, [
        'rbenv-root',
        value$956
    ]);
};
Rbenv$942.prototype[util$940.camelize('rbenv-repo')] = function (value$957) {
    return util$940.primitiveAccessor.apply(this, [
        'rbenv-repo',
        value$957
    ]);
};
Rbenv$942.prototype[util$940.camelize('rbenv-branch')] = function (value$958) {
    return util$940.primitiveAccessor.apply(this, [
        'rbenv-branch',
        value$958
    ]);
};
Rbenv$942.prototype[util$940.camelize('ruby-build-repo')] = function (value$959) {
    return util$940.primitiveAccessor.apply(this, [
        'ruby-build-repo',
        value$959
    ]);
};
Rbenv$942.prototype[util$940.camelize('ruby-build-branch')] = function (value$960) {
    return util$940.primitiveAccessor.apply(this, [
        'ruby-build-branch',
        value$960
    ]);
};