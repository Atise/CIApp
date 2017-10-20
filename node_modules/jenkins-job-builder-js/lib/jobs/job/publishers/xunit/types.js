'use strict';
var util$940 = require('../../../../misc/util.js');
var Type$941 = require('./type.js');
var Types$943 = function (upper$959, array$960) {
    this.upper = upper$959;
    this.array = array$960;
};
Types$943.prototype.up = function () {
    return this.upper;
};
Types$943.prototype.and = Types$943.prototype.up;
module.exports = Types$943;
Types$943.prototype[util$940.camelize('aunit')] = function (value$961) {
    return util$940.keyedObjectElementAccessor.apply(this, [
        'aunit',
        Type$941,
        value$961
    ]);
};
Types$943.prototype[util$940.camelize('boosttest')] = function (value$962) {
    return util$940.keyedObjectElementAccessor.apply(this, [
        'boosttest',
        Type$941,
        value$962
    ]);
};
Types$943.prototype[util$940.camelize('checktype')] = function (value$963) {
    return util$940.keyedObjectElementAccessor.apply(this, [
        'checktype',
        Type$941,
        value$963
    ]);
};
Types$943.prototype[util$940.camelize('cpptest')] = function (value$964) {
    return util$940.keyedObjectElementAccessor.apply(this, [
        'cpptest',
        Type$941,
        value$964
    ]);
};
Types$943.prototype[util$940.camelize('cppunit')] = function (value$965) {
    return util$940.keyedObjectElementAccessor.apply(this, [
        'cppunit',
        Type$941,
        value$965
    ]);
};
Types$943.prototype[util$940.camelize('ctest')] = function (value$966) {
    return util$940.keyedObjectElementAccessor.apply(this, [
        'ctest',
        Type$941,
        value$966
    ]);
};
Types$943.prototype[util$940.camelize('embunit')] = function (value$967) {
    return util$940.keyedObjectElementAccessor.apply(this, [
        'embunit',
        Type$941,
        value$967
    ]);
};
Types$943.prototype[util$940.camelize('fpcunit')] = function (value$968) {
    return util$940.keyedObjectElementAccessor.apply(this, [
        'fpcunit',
        Type$941,
        value$968
    ]);
};
Types$943.prototype[util$940.camelize('junit')] = function (value$969) {
    return util$940.keyedObjectElementAccessor.apply(this, [
        'junit',
        Type$941,
        value$969
    ]);
};
Types$943.prototype[util$940.camelize('mstest')] = function (value$970) {
    return util$940.keyedObjectElementAccessor.apply(this, [
        'mstest',
        Type$941,
        value$970
    ]);
};
Types$943.prototype[util$940.camelize('nunit')] = function (value$971) {
    return util$940.keyedObjectElementAccessor.apply(this, [
        'nunit',
        Type$941,
        value$971
    ]);
};
Types$943.prototype[util$940.camelize('phpunit')] = function (value$972) {
    return util$940.keyedObjectElementAccessor.apply(this, [
        'phpunit',
        Type$941,
        value$972
    ]);
};
Types$943.prototype[util$940.camelize('tusar')] = function (value$973) {
    return util$940.keyedObjectElementAccessor.apply(this, [
        'tusar',
        Type$941,
        value$973
    ]);
};
Types$943.prototype[util$940.camelize('unittest')] = function (value$974) {
    return util$940.keyedObjectElementAccessor.apply(this, [
        'unittest',
        Type$941,
        value$974
    ]);
};
Types$943.prototype[util$940.camelize('valgrind')] = function (value$975) {
    return util$940.keyedObjectElementAccessor.apply(this, [
        'valgrind',
        Type$941,
        value$975
    ]);
};