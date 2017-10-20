'use strict';
var util$940 = require('./misc/util.js');
var Job$941 = require('./jobs/job.js');
var Jobs$942 = function () {
    this.array = [];
    return this;
};
Jobs$942.prototype[util$940.camelize('job')] = function (value$944) {
    return util$940.keyedObjectElementAccessor.apply(this, [
        'job',
        Job$941,
        value$944
    ]);
};
module.exports = Jobs$942;