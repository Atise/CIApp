'use strict';
var util$940 = require('../../../misc/util.js');
var Redis$941 = require('./logstash/redis.js');
var LogStash$943 = function (upper$946, obj$947) {
    this.upper = upper$946;
    this.obj = obj$947;
};
LogStash$943.prototype.up = function () {
    return this.upper;
};
LogStash$943.prototype.and = LogStash$943.prototype.up;
module.exports = LogStash$943;
LogStash$943.prototype[util$940.camelize('use-redis')] = function (value$948) {
    return util$940.primitiveAccessor.apply(this, [
        'use-redis',
        value$948
    ]);
};
LogStash$943.prototype[util$940.camelize('redis')] = function (value$949) {
    return util$940.objectAccessor.apply(this, [
        'redis',
        Redis$941,
        value$949
    ]);
};