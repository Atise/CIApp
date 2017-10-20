'use strict';
var util$940 = require('../../../../../misc/util.js');
var CommentAddedEvent$942 = function (upper$945, obj$946) {
    this.upper = upper$945;
    this.obj = obj$946;
};
CommentAddedEvent$942.prototype.up = function () {
    return this.upper;
};
CommentAddedEvent$942.prototype.and = CommentAddedEvent$942.prototype.up;
module.exports = CommentAddedEvent$942;
CommentAddedEvent$942.prototype[util$940.camelize('approval-category')] = function (value$947) {
    return util$940.primitiveAccessor.apply(this, [
        'approval-category',
        value$947
    ]);
};
CommentAddedEvent$942.prototype[util$940.camelize('approval-value')] = function (value$948) {
    return util$940.primitiveAccessor.apply(this, [
        'approval-value',
        value$948
    ]);
};