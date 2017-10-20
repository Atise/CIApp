'use strict';
var util$940 = require('../../../misc/util.js');
var File$941 = require('./scp/file.js');
var Scp$943 = function (upper$946, obj$947) {
    this.upper = upper$946;
    this.obj = obj$947;
};
Scp$943.prototype.up = function () {
    return this.upper;
};
Scp$943.prototype.and = Scp$943.prototype.up;
module.exports = Scp$943;
Scp$943.prototype[util$940.camelize('site')] = function (value$948) {
    return util$940.primitiveAccessor.apply(this, [
        'site',
        value$948
    ]);
};
Scp$943.prototype[util$940.camelize('files')] = function (value$949) {
    return util$940.objectArrayAccessor.apply(this, [
        'files',
        File$941,
        value$949
    ]);
};