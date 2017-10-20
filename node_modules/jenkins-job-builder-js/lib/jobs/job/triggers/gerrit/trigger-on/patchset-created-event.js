'use strict';
var util$940 = require('../../../../../misc/util.js');
var PatchsetCreatedEvent$942 = function (upper$946, obj$947) {
    this.upper = upper$946;
    this.obj = obj$947;
};
PatchsetCreatedEvent$942.prototype.up = function () {
    return this.upper;
};
PatchsetCreatedEvent$942.prototype.and = PatchsetCreatedEvent$942.prototype.up;
module.exports = PatchsetCreatedEvent$942;
PatchsetCreatedEvent$942.prototype[util$940.camelize('exclude-drafts')] = function (value$948) {
    return util$940.primitiveAccessor.apply(this, [
        'exclude-drafts',
        value$948
    ]);
};
PatchsetCreatedEvent$942.prototype[util$940.camelize('exclude-trivial-rebase')] = function (value$949) {
    return util$940.primitiveAccessor.apply(this, [
        'exclude-trivial-rebase',
        value$949
    ]);
};
PatchsetCreatedEvent$942.prototype[util$940.camelize('exclude-no-code-change')] = function (value$950) {
    return util$940.primitiveAccessor.apply(this, [
        'exclude-no-code-change',
        value$950
    ]);
};