'use strict';
var util$940 = require('../../../misc/util.js');
var WebAccess$941 = require('./tfs/web-access.js');
var Tfs$943 = function (upper$951, obj$952) {
    this.upper = upper$951;
    this.obj = obj$952;
};
Tfs$943.prototype.up = function () {
    return this.upper;
};
Tfs$943.prototype.and = Tfs$943.prototype.up;
module.exports = Tfs$943;
Tfs$943.prototype[util$940.camelize('server-url')] = function (value$953) {
    return util$940.primitiveAccessor.apply(this, [
        'server-url',
        value$953
    ]);
};
Tfs$943.prototype[util$940.camelize('project-path')] = function (value$954) {
    return util$940.primitiveAccessor.apply(this, [
        'project-path',
        value$954
    ]);
};
Tfs$943.prototype[util$940.camelize('login')] = function (value$955) {
    return util$940.primitiveAccessor.apply(this, [
        'login',
        value$955
    ]);
};
Tfs$943.prototype[util$940.camelize('use-update')] = function (value$956) {
    return util$940.primitiveAccessor.apply(this, [
        'use-update',
        value$956
    ]);
};
Tfs$943.prototype[util$940.camelize('local-path')] = function (value$957) {
    return util$940.primitiveAccessor.apply(this, [
        'local-path',
        value$957
    ]);
};
Tfs$943.prototype[util$940.camelize('workspace')] = function (value$958) {
    return util$940.primitiveAccessor.apply(this, [
        'workspace',
        value$958
    ]);
};
Tfs$943.prototype[util$940.camelize('web-access')] = function (value$959) {
    return util$940.objectArrayAccessor.apply(this, [
        'web-access',
        WebAccess$941,
        value$959
    ]);
};