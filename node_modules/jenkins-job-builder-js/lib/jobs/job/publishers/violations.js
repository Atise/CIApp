'use strict';
var util$940 = require('../../../misc/util.js');
var System$941 = require('./violations/system.js');
var Violations$943 = function (upper$960, obj$961) {
    this.upper = upper$960;
    this.obj = obj$961;
};
Violations$943.prototype.up = function () {
    return this.upper;
};
Violations$943.prototype.and = Violations$943.prototype.up;
module.exports = Violations$943;
Violations$943.prototype[util$940.camelize('checkstyle')] = function (value$962) {
    return util$940.objectAccessor.apply(this, [
        'checkstyle',
        System$941,
        value$962
    ]);
};
Violations$943.prototype[util$940.camelize('codenarc')] = function (value$963) {
    return util$940.objectAccessor.apply(this, [
        'codenarc',
        System$941,
        value$963
    ]);
};
Violations$943.prototype[util$940.camelize('cpd')] = function (value$964) {
    return util$940.objectAccessor.apply(this, [
        'cpd',
        System$941,
        value$964
    ]);
};
Violations$943.prototype[util$940.camelize('cpplint')] = function (value$965) {
    return util$940.objectAccessor.apply(this, [
        'cpplint',
        System$941,
        value$965
    ]);
};
Violations$943.prototype[util$940.camelize('csslint')] = function (value$966) {
    return util$940.objectAccessor.apply(this, [
        'csslint',
        System$941,
        value$966
    ]);
};
Violations$943.prototype[util$940.camelize('findbugs')] = function (value$967) {
    return util$940.objectAccessor.apply(this, [
        'findbugs',
        System$941,
        value$967
    ]);
};
Violations$943.prototype[util$940.camelize('fxcop')] = function (value$968) {
    return util$940.objectAccessor.apply(this, [
        'fxcop',
        System$941,
        value$968
    ]);
};
Violations$943.prototype[util$940.camelize('gendarme')] = function (value$969) {
    return util$940.objectAccessor.apply(this, [
        'gendarme',
        System$941,
        value$969
    ]);
};
Violations$943.prototype[util$940.camelize('jcreport')] = function (value$970) {
    return util$940.objectAccessor.apply(this, [
        'jcreport',
        System$941,
        value$970
    ]);
};
Violations$943.prototype[util$940.camelize('jslint')] = function (value$971) {
    return util$940.objectAccessor.apply(this, [
        'jslint',
        System$941,
        value$971
    ]);
};
Violations$943.prototype[util$940.camelize('pep8')] = function (value$972) {
    return util$940.objectAccessor.apply(this, [
        'pep8',
        System$941,
        value$972
    ]);
};
Violations$943.prototype[util$940.camelize('perlcritic')] = function (value$973) {
    return util$940.objectAccessor.apply(this, [
        'perlcritic',
        System$941,
        value$973
    ]);
};
Violations$943.prototype[util$940.camelize('pmd')] = function (value$974) {
    return util$940.objectAccessor.apply(this, [
        'pmd',
        System$941,
        value$974
    ]);
};
Violations$943.prototype[util$940.camelize('pylint')] = function (value$975) {
    return util$940.objectAccessor.apply(this, [
        'pylint',
        System$941,
        value$975
    ]);
};
Violations$943.prototype[util$940.camelize('simian')] = function (value$976) {
    return util$940.objectAccessor.apply(this, [
        'simian',
        System$941,
        value$976
    ]);
};
Violations$943.prototype[util$940.camelize('stylecop')] = function (value$977) {
    return util$940.objectAccessor.apply(this, [
        'stylecop',
        System$941,
        value$977
    ]);
};