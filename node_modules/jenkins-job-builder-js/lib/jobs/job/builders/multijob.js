'use strict';
var util$940 = require('../../../misc/util.js');
var Project$942 = require('./multijob/project.js');
var Multijob$943 = function (upper$947, obj$948) {
    this.upper = upper$947;
    this.obj = obj$948;
};
Multijob$943.prototype.up = function () {
    return this.upper;
};
Multijob$943.prototype.and = Multijob$943.prototype.up;
module.exports = Multijob$943;
Multijob$943.prototype[util$940.camelize('name')] = function (value$949) {
    return util$940.primitiveAccessor.apply(this, [
        'name',
        value$949
    ]);
};
Multijob$943.prototype[util$940.camelize('condition')] = function (value$950) {
    return util$940.primitiveAccessor.apply(this, [
        'condition',
        value$950
    ]);
};
Multijob$943.prototype[util$940.camelize('projects')] = function (value$951) {
    return util$940.objectArrayAccessor.apply(this, [
        'projects',
        Project$942,
        value$951
    ]);
};