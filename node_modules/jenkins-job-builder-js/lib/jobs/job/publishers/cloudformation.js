'use strict';
var util$940 = require('../../../misc/util.js');
var CreateStack$941 = require('./cloudformation/create-stack.js');
var DeleteStack$942 = require('./cloudformation/delete-stack.js');
var CloudFormation$944 = function (upper$947, obj$948) {
    this.upper = upper$947;
    this.obj = obj$948;
};
CloudFormation$944.prototype.up = function () {
    return this.upper;
};
CloudFormation$944.prototype.and = CloudFormation$944.prototype.up;
module.exports = CloudFormation$944;
CloudFormation$944.prototype[util$940.camelize('create-stacks')] = function (value$949) {
    return util$940.objectArrayAccessor.apply(this, [
        'create-stacks',
        CreateStack$941,
        value$949
    ]);
};
CloudFormation$944.prototype[util$940.camelize('delete-stacks')] = function (value$950) {
    return util$940.objectArrayAccessor.apply(this, [
        'delete-stacks',
        DeleteStack$942,
        value$950
    ]);
};