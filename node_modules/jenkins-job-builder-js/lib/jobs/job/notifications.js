'use strict';
var util$940 = require('../../misc/util.js');
var Http$941 = require('./notifications/http.js');
var Notifications$943 = function (upper$945, array$946) {
    this.upper = upper$945;
    this.array = array$946;
};
Notifications$943.prototype.up = function () {
    return this.upper;
};
Notifications$943.prototype.and = Notifications$943.prototype.up;
module.exports = Notifications$943;
Notifications$943.prototype[util$940.camelize('http')] = function (value$947) {
    return util$940.keyedObjectElementAccessor.apply(this, [
        'http',
        Http$941,
        value$947
    ]);
};