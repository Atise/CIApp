'use strict';
var util$940 = require('../../../misc/util.js');
var Remote$941 = require('./git/remote.js');
var Merge$942 = require('./git/merge.js');
var ChangeLogAgainst$943 = require('./git/changelog-against.js');
var Clean$944 = require('./git/clean.js');
var Submodule$945 = require('./git/submodule.js');
var SparseCheckout$946 = require('./git/sparse-checkout.js');
var Git$948 = function (upper$985, obj$986) {
    this.upper = upper$985;
    this.obj = obj$986;
};
Git$948.prototype.up = function () {
    return this.upper;
};
Git$948.prototype.and = Git$948.prototype.up;
module.exports = Git$948;
Git$948.prototype[util$940.camelize('url')] = function (value$987) {
    return util$940.primitiveAccessor.apply(this, [
        'url',
        value$987
    ]);
};
Git$948.prototype[util$940.camelize('credentials-id')] = function (value$988) {
    return util$940.primitiveAccessor.apply(this, [
        'credentials-id',
        value$988
    ]);
};
Git$948.prototype[util$940.camelize('refspec')] = function (value$989) {
    return util$940.primitiveAccessor.apply(this, [
        'refspec',
        value$989
    ]);
};
Git$948.prototype[util$940.camelize('name')] = function (value$990) {
    return util$940.primitiveAccessor.apply(this, [
        'name',
        value$990
    ]);
};
Git$948.prototype[util$940.camelize('remotes')] = function (value$991) {
    return util$940.objectArrayAccessor.apply(this, [
        'remotes',
        Remote$941,
        value$991
    ]);
};
Git$948.prototype[util$940.camelize('branches')] = function (value$992) {
    return util$940.primitiveArrayAccessor.apply(this, [
        'branches',
        value$992
    ]);
};
Git$948.prototype[util$940.camelize('excluded-users')] = function (value$993) {
    return util$940.primitiveArrayAccessor.apply(this, [
        'excluded-users',
        value$993
    ]);
};
Git$948.prototype[util$940.camelize('included-regions')] = function (value$994) {
    return util$940.primitiveArrayAccessor.apply(this, [
        'included-regions',
        value$994
    ]);
};
Git$948.prototype[util$940.camelize('excluded-regions')] = function (value$995) {
    return util$940.primitiveArrayAccessor.apply(this, [
        'excluded-regions',
        value$995
    ]);
};
Git$948.prototype[util$940.camelize('local-branch')] = function (value$996) {
    return util$940.primitiveAccessor.apply(this, [
        'local-branch',
        value$996
    ]);
};
Git$948.prototype[util$940.camelize('merge')] = function (value$997) {
    return util$940.objectAccessor.apply(this, [
        'merge',
        Merge$942,
        value$997
    ]);
};
Git$948.prototype[util$940.camelize('basedir')] = function (value$998) {
    return util$940.primitiveAccessor.apply(this, [
        'basedir',
        value$998
    ]);
};
Git$948.prototype[util$940.camelize('skip-tag')] = function (value$999) {
    return util$940.primitiveAccessor.apply(this, [
        'skip-tag',
        value$999
    ]);
};
Git$948.prototype[util$940.camelize('shallow-clone')] = function (value$1000) {
    return util$940.primitiveAccessor.apply(this, [
        'shallow-clone',
        value$1000
    ]);
};
Git$948.prototype[util$940.camelize('prune')] = function (value$1001) {
    return util$940.primitiveAccessor.apply(this, [
        'prune',
        value$1001
    ]);
};
Git$948.prototype[util$940.camelize('fastpoll')] = function (value$1002) {
    return util$940.primitiveAccessor.apply(this, [
        'fastpoll',
        value$1002
    ]);
};
Git$948.prototype[util$940.camelize('use-author')] = function (value$1003) {
    return util$940.primitiveAccessor.apply(this, [
        'use-author',
        value$1003
    ]);
};
Git$948.prototype[util$940.camelize('git-tool')] = function (value$1004) {
    return util$940.primitiveAccessor.apply(this, [
        'git-tool',
        value$1004
    ]);
};
Git$948.prototype[util$940.camelize('reference-repo')] = function (value$1005) {
    return util$940.primitiveAccessor.apply(this, [
        'reference-repo',
        value$1005
    ]);
};
Git$948.prototype[util$940.camelize('scm-name')] = function (value$1006) {
    return util$940.primitiveAccessor.apply(this, [
        'scm-name',
        value$1006
    ]);
};
Git$948.prototype[util$940.camelize('ignore-notify')] = function (value$1007) {
    return util$940.primitiveAccessor.apply(this, [
        'ignore-notify',
        value$1007
    ]);
};
Git$948.prototype[util$940.camelize('browser')] = function (value$1008) {
    return util$940.primitiveAccessor.apply(this, [
        'browser',
        value$1008
    ]);
};
Git$948.prototype[util$940.camelize('browser-url')] = function (value$1009) {
    return util$940.primitiveAccessor.apply(this, [
        'browser-url',
        value$1009
    ]);
};
Git$948.prototype[util$940.camelize('browser-version')] = function (value$1010) {
    return util$940.primitiveAccessor.apply(this, [
        'browser-version',
        value$1010
    ]);
};
Git$948.prototype[util$940.camelize('project-name')] = function (value$1011) {
    return util$940.primitiveAccessor.apply(this, [
        'project-name',
        value$1011
    ]);
};
Git$948.prototype[util$940.camelize('choosing-strategy')] = function (value$1012) {
    return util$940.primitiveAccessor.apply(this, [
        'choosing-strategy',
        value$1012
    ]);
};
Git$948.prototype[util$940.camelize('git-config-name')] = function (value$1013) {
    return util$940.primitiveAccessor.apply(this, [
        'git-config-name',
        value$1013
    ]);
};
Git$948.prototype[util$940.camelize('git-config-email')] = function (value$1014) {
    return util$940.primitiveAccessor.apply(this, [
        'git-config-email',
        value$1014
    ]);
};
Git$948.prototype[util$940.camelize('changelog-against')] = function (value$1015) {
    return util$940.objectAccessor.apply(this, [
        'changelog-against',
        ChangeLogAgainst$943,
        value$1015
    ]);
};
Git$948.prototype[util$940.camelize('clean')] = function (value$1016) {
    return util$940.objectAccessor.apply(this, [
        'clean',
        Clean$944,
        value$1016
    ]);
};
Git$948.prototype[util$940.camelize('sparse-checkout')] = function (value$1017) {
    return util$940.objectAccessor.apply(this, [
        'sparse-checkout',
        SparseCheckout$946,
        value$1017
    ]);
};
Git$948.prototype[util$940.camelize('ignore-commits-with-messages')] = function (value$1018) {
    return util$940.primitiveArrayAccessor.apply(this, [
        'ignore-commits-with-messages',
        value$1018
    ]);
};
Git$948.prototype[util$940.camelize('force-polling-using-workspace')] = function (value$1019) {
    return util$940.primitiveAccessor.apply(this, [
        'force-polling-using-workspace',
        value$1019
    ]);
};
Git$948.prototype[util$940.camelize('submodule')] = function (value$1020) {
    return util$940.objectAccessor.apply(this, [
        'submodule',
        Submodule$945,
        value$1020
    ]);
};
Git$948.prototype[util$940.camelize('timeout')] = function (value$1021) {
    return util$940.primitiveAccessor.apply(this, [
        'timeout',
        value$1021
    ]);
};
Git$948.prototype[util$940.camelize('wipe-workspace')] = function (value$1022) {
    return util$940.primitiveAccessor.apply(this, [
        'wipe-workspace',
        value$1022
    ]);
};