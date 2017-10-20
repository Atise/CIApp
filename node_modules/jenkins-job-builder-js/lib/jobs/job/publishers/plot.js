'use strict';
var util$940 = require('../../../misc/util.js');
var Series$941 = require('./plot/series.js');
var Plot$943 = function (upper$955, obj$956) {
    this.upper = upper$955;
    this.obj = obj$956;
};
Plot$943.prototype.up = function () {
    return this.upper;
};
Plot$943.prototype.and = Plot$943.prototype.up;
module.exports = Plot$943;
Plot$943.prototype[util$940.camelize('title')] = function (value$957) {
    return util$940.primitiveAccessor.apply(this, [
        'title',
        value$957
    ]);
};
Plot$943.prototype[util$940.camelize('yaxis')] = function (value$958) {
    return util$940.primitiveAccessor.apply(this, [
        'yaxis',
        value$958
    ]);
};
Plot$943.prototype[util$940.camelize('group')] = function (value$959) {
    return util$940.primitiveAccessor.apply(this, [
        'group',
        value$959
    ]);
};
Plot$943.prototype[util$940.camelize('num-builds')] = function (value$960) {
    return util$940.primitiveAccessor.apply(this, [
        'num-builds',
        value$960
    ]);
};
Plot$943.prototype[util$940.camelize('style')] = function (value$961) {
    return util$940.primitiveAccessor.apply(this, [
        'style',
        value$961
    ]);
};
Plot$943.prototype[util$940.camelize('use-description')] = function (value$962) {
    return util$940.primitiveAccessor.apply(this, [
        'use-description',
        value$962
    ]);
};
Plot$943.prototype[util$940.camelize('exclude-zero-yaxis')] = function (value$963) {
    return util$940.primitiveAccessor.apply(this, [
        'exclude-zero-yaxis',
        value$963
    ]);
};
Plot$943.prototype[util$940.camelize('logarithmic-yaxis')] = function (value$964) {
    return util$940.primitiveAccessor.apply(this, [
        'logarithmic-yaxis',
        value$964
    ]);
};
Plot$943.prototype[util$940.camelize('keep-records')] = function (value$965) {
    return util$940.primitiveAccessor.apply(this, [
        'keep-records',
        value$965
    ]);
};
Plot$943.prototype[util$940.camelize('csv-file-name')] = function (value$966) {
    return util$940.primitiveAccessor.apply(this, [
        'csv-file-name',
        value$966
    ]);
};
Plot$943.prototype[util$940.camelize('series')] = function (value$967) {
    return util$940.objectArrayAccessor.apply(this, [
        'series',
        Series$941,
        value$967
    ]);
};