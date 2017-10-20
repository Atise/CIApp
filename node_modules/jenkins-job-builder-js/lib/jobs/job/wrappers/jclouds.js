'use strict';
var util$940 = require('../../../misc/util.js');
var Instances$941 = require('./jclouds/instances.js');
var JClouds$943 = function (upper$946, obj$947) {
    this.upper = upper$946;
    this.obj = obj$947;
};
JClouds$943.prototype.up = function () {
    return this.upper;
};
JClouds$943.prototype.and = JClouds$943.prototype.up;
module.exports = JClouds$943;
JClouds$943.prototype[util$940.camelize('single-use')] = function (value$948) {
    return util$940.primitiveAccessor.apply(this, [
        'single-use',
        value$948
    ]);
};
JClouds$943.prototype[util$940.camelize('instances')] = function (value$949) {
    return util$940.customArrayAccessor.apply(this, [
        'instances',
        Instances$941,
        value$949
    ]);
};