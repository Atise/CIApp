'use strict';
var util$940 = require('../../../../../misc/util.js');
var CommentAddedContainsEvent$942 = function (upper$944, obj$945) {
    this.upper = upper$944;
    this.obj = obj$945;
};
CommentAddedContainsEvent$942.prototype.up = function () {
    return this.upper;
};
CommentAddedContainsEvent$942.prototype.and = CommentAddedContainsEvent$942.prototype.up;
module.exports = CommentAddedContainsEvent$942;
CommentAddedContainsEvent$942.prototype[util$940.camelize('comment-contains-value')] = function (value$946) {
    return util$940.primitiveAccessor.apply(this, [
        'comment-contains-value',
        value$946
    ]);
};