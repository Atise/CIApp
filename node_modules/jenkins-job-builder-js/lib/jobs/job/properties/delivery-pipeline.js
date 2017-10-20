'use strict';
var util$940 = require('../../../misc/util.js');
var DeliveryPipeline$942 = function (upper$946, obj$947) {
    this.upper = upper$946;
    this.obj = obj$947;
};
DeliveryPipeline$942.prototype.up = function () {
    return this.upper;
};
DeliveryPipeline$942.prototype.and = DeliveryPipeline$942.prototype.up;
module.exports = DeliveryPipeline$942;
DeliveryPipeline$942.prototype[util$940.camelize('stage')] = function (value$948) {
    return util$940.primitiveAccessor.apply(this, [
        'stage',
        value$948
    ]);
};
DeliveryPipeline$942.prototype[util$940.camelize('task')] = function (value$949) {
    return util$940.primitiveAccessor.apply(this, [
        'task',
        value$949
    ]);
};
DeliveryPipeline$942.prototype[util$940.camelize('description')] = function (value$950) {
    return util$940.primitiveAccessor.apply(this, [
        'description',
        value$950
    ]);
};