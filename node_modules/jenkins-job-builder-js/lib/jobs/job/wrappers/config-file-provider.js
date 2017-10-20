'use strict';
var util$940 = require('../../../misc/util.js');
var ConfigFile$941 = require('./config-file-provider/config-file.js');
var ConfigFileProvider$943 = function (upper$945, obj$946) {
    this.upper = upper$945;
    this.obj = obj$946;
};
ConfigFileProvider$943.prototype.up = function () {
    return this.upper;
};
ConfigFileProvider$943.prototype.and = ConfigFileProvider$943.prototype.up;
module.exports = ConfigFileProvider$943;
ConfigFileProvider$943.prototype[util$940.camelize('files')] = function (value$947) {
    return util$940.objectArrayAccessor.apply(this, [
        'files',
        ConfigFile$941,
        value$947
    ]);
};