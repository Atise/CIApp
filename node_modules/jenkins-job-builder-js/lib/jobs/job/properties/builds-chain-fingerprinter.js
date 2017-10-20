'use strict';
var util$940 = require('../../../misc/util.js');
var BuildsChainFingerprinter$942 = function (upper$945, obj$946) {
    this.upper = upper$945;
    this.obj = obj$946;
};
BuildsChainFingerprinter$942.prototype.up = function () {
    return this.upper;
};
BuildsChainFingerprinter$942.prototype.and = BuildsChainFingerprinter$942.prototype.up;
module.exports = BuildsChainFingerprinter$942;
BuildsChainFingerprinter$942.prototype[util$940.camelize('per-builds-chain')] = function (value$947) {
    return util$940.primitiveAccessor.apply(this, [
        'per-builds-chain',
        value$947
    ]);
};
BuildsChainFingerprinter$942.prototype[util$940.camelize('per-job-chain')] = function (value$948) {
    return util$940.primitiveAccessor.apply(this, [
        'per-job-chain',
        value$948
    ]);
};