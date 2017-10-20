'use strict';
var util$940 = require('../../../misc/util.js');
var Repo$941 = require('./svn/repo.js');
var Svn$943 = function (upper$959, obj$960) {
    this.upper = upper$959;
    this.obj = obj$960;
};
Svn$943.prototype.up = function () {
    return this.upper;
};
Svn$943.prototype.and = Svn$943.prototype.up;
module.exports = Svn$943;
Svn$943.prototype[util$940.camelize('url')] = function (value$961) {
    return util$940.primitiveAccessor.apply(this, [
        'url',
        value$961
    ]);
};
Svn$943.prototype[util$940.camelize('basedir')] = function (value$962) {
    return util$940.primitiveAccessor.apply(this, [
        'basedir',
        value$962
    ]);
};
Svn$943.prototype[util$940.camelize('credentials-id')] = function (value$963) {
    return util$940.primitiveAccessor.apply(this, [
        'credentials-id',
        value$963
    ]);
};
Svn$943.prototype[util$940.camelize('repo-depth')] = function (value$964) {
    return util$940.primitiveAccessor.apply(this, [
        'repo-depth',
        value$964
    ]);
};
Svn$943.prototype[util$940.camelize('ignore-externals')] = function (value$965) {
    return util$940.primitiveAccessor.apply(this, [
        'ignore-externals',
        value$965
    ]);
};
Svn$943.prototype[util$940.camelize('workspaceupdater')] = function (value$966) {
    return util$940.primitiveAccessor.apply(this, [
        'workspaceupdater',
        value$966
    ]);
};
Svn$943.prototype[util$940.camelize('excluded-users')] = function (value$967) {
    return util$940.primitiveArrayAccessor.apply(this, [
        'excluded-users',
        value$967
    ]);
};
Svn$943.prototype[util$940.camelize('included-regions')] = function (value$968) {
    return util$940.primitiveArrayAccessor.apply(this, [
        'included-regions',
        value$968
    ]);
};
Svn$943.prototype[util$940.camelize('excluded-regions')] = function (value$969) {
    return util$940.primitiveArrayAccessor.apply(this, [
        'excluded-regions',
        value$969
    ]);
};
Svn$943.prototype[util$940.camelize('excluded-commit-messages')] = function (value$970) {
    return util$940.primitiveArrayAccessor.apply(this, [
        'excluded-commit-messages',
        value$970
    ]);
};
Svn$943.prototype[util$940.camelize('exclusion-revprop-name')] = function (value$971) {
    return util$940.primitiveAccessor.apply(this, [
        'exclusion-revprop-name',
        value$971
    ]);
};
Svn$943.prototype[util$940.camelize('ignore-property-changes-on-directories')] = function (value$972) {
    return util$940.primitiveAccessor.apply(this, [
        'ignore-property-changes-on-directories',
        value$972
    ]);
};
Svn$943.prototype[util$940.camelize('filter-changelog')] = function (value$973) {
    return util$940.primitiveAccessor.apply(this, [
        'filter-changelog',
        value$973
    ]);
};
Svn$943.prototype[util$940.camelize('repos')] = function (value$974) {
    return util$940.objectArrayAccessor.apply(this, [
        'repos',
        Repo$941,
        value$974
    ]);
};
Svn$943.prototype[util$940.camelize('viewvc-url')] = function (value$975) {
    return util$940.primitiveAccessor.apply(this, [
        'viewvc-url',
        value$975
    ]);
};