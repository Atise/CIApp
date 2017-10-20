'use strict';
var util$940 = require('../../../misc/util.js');
var CucumberReports$942 = function (upper$954, obj$955) {
    this.upper = upper$954;
    this.obj = obj$955;
};
CucumberReports$942.prototype.up = function () {
    return this.upper;
};
CucumberReports$942.prototype.and = CucumberReports$942.prototype.up;
module.exports = CucumberReports$942;
CucumberReports$942.prototype[util$940.camelize('json-reports-path')] = function (value$956) {
    return util$940.primitiveAccessor.apply(this, [
        'json-reports-path',
        value$956
    ]);
};
CucumberReports$942.prototype[util$940.camelize('file-include-pattern')] = function (value$957) {
    return util$940.primitiveAccessor.apply(this, [
        'file-include-pattern',
        value$957
    ]);
};
CucumberReports$942.prototype[util$940.camelize('file-exclude-pattern')] = function (value$958) {
    return util$940.primitiveAccessor.apply(this, [
        'file-exclude-pattern',
        value$958
    ]);
};
CucumberReports$942.prototype[util$940.camelize('plugin-url-path')] = function (value$959) {
    return util$940.primitiveAccessor.apply(this, [
        'plugin-url-path',
        value$959
    ]);
};
CucumberReports$942.prototype[util$940.camelize('skipped-fails')] = function (value$960) {
    return util$940.primitiveAccessor.apply(this, [
        'skipped-fails',
        value$960
    ]);
};
CucumberReports$942.prototype[util$940.camelize('pending-fails')] = function (value$961) {
    return util$940.primitiveAccessor.apply(this, [
        'pending-fails',
        value$961
    ]);
};
CucumberReports$942.prototype[util$940.camelize('undefined-fails')] = function (value$962) {
    return util$940.primitiveAccessor.apply(this, [
        'undefined-fails',
        value$962
    ]);
};
CucumberReports$942.prototype[util$940.camelize('missing-fails')] = function (value$963) {
    return util$940.primitiveAccessor.apply(this, [
        'missing-fails',
        value$963
    ]);
};
CucumberReports$942.prototype[util$940.camelize('no-flash-charts')] = function (value$964) {
    return util$940.primitiveAccessor.apply(this, [
        'no-flash-charts',
        value$964
    ]);
};
CucumberReports$942.prototype[util$940.camelize('ignore-failed-tests')] = function (value$965) {
    return util$940.primitiveAccessor.apply(this, [
        'ignore-failed-tests',
        value$965
    ]);
};
CucumberReports$942.prototype[util$940.camelize('parallel-testing')] = function (value$966) {
    return util$940.primitiveAccessor.apply(this, [
        'parallel-testing',
        value$966
    ]);
};