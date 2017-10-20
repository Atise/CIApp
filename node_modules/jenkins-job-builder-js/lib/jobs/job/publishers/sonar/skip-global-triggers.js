'use strict';
var util$940 = require('../../../../misc/util.js');
var SkipGlobalTriggers$942 = function (upper$946, obj$947) {
    this.upper = upper$946;
    this.obj = obj$947;
};
SkipGlobalTriggers$942.prototype.up = function () {
    return this.upper;
};
SkipGlobalTriggers$942.prototype.and = SkipGlobalTriggers$942.prototype.up;
module.exports = SkipGlobalTriggers$942;
SkipGlobalTriggers$942.prototype[util$940.camelize('skip-when-scm-change')] = function (value$948) {
    return util$940.primitiveAccessor.apply(this, [
        'skip-when-scm-change',
        value$948
    ]);
};
SkipGlobalTriggers$942.prototype[util$940.camelize('skip-when-upstream-build')] = function (value$949) {
    return util$940.primitiveAccessor.apply(this, [
        'skip-when-upstream-build',
        value$949
    ]);
};
SkipGlobalTriggers$942.prototype[util$940.camelize('skip-when-envvar-defined')] = function (value$950) {
    return util$940.primitiveAccessor.apply(this, [
        'skip-when-envvar-defined',
        value$950
    ]);
};