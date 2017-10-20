'use strict';
var util$940 = require('../../../misc/util.js');
var XmlSummary$942 = function (upper$945, obj$946) {
    this.upper = upper$945;
    this.obj = obj$946;
};
XmlSummary$942.prototype.up = function () {
    return this.upper;
};
XmlSummary$942.prototype.and = XmlSummary$942.prototype.up;
module.exports = XmlSummary$942;
XmlSummary$942.prototype[util$940.camelize('files')] = function (value$947) {
    return util$940.primitiveAccessor.apply(this, [
        'files',
        value$947
    ]);
};
XmlSummary$942.prototype[util$940.camelize('shown-on-project-page')] = function (value$948) {
    return util$940.primitiveAccessor.apply(this, [
        'shown-on-project-page',
        value$948
    ]);
};