'use strict';
var util$940 = require('../../../misc/util.js');
var PostBuildScript$942 = function (upper$950, obj$951) {
    this.upper = upper$950;
    this.obj = obj$951;
};
PostBuildScript$942.prototype.up = function () {
    return this.upper;
};
PostBuildScript$942.prototype.and = PostBuildScript$942.prototype.up;
module.exports = PostBuildScript$942;
PostBuildScript$942.prototype[util$940.camelize('generic-script')] = function (value$952) {
    return util$940.primitiveArrayAccessor.apply(this, [
        'generic-script',
        value$952
    ]);
};
PostBuildScript$942.prototype[util$940.camelize('groovy-script')] = function (value$953) {
    return util$940.primitiveArrayAccessor.apply(this, [
        'groovy-script',
        value$953
    ]);
};
PostBuildScript$942.prototype[util$940.camelize('groovy')] = function (value$954) {
    return util$940.primitiveArrayAccessor.apply(this, [
        'groovy',
        value$954
    ]);
};
PostBuildScript$942.prototype.builders = function (value$955) {
    if (value$955 === undefined) {
        var // this is to avoid circular dependencies
        Builders$956 = require('../builders.js');
        // always create a fresh array to enforce declarative code style
        this.obj.builders = [];
        return new Builders$956(this, this.obj.builders);
    } else {
        throw 'TODO: setter is not implemented';
    }
};
PostBuildScript$942.prototype[util$940.camelize('script-only-if-succeeded')] = function (value$957) {
    return util$940.primitiveAccessor.apply(this, [
        'script-only-if-succeeded',
        value$957
    ]);
};
PostBuildScript$942.prototype[util$940.camelize('script-only-if-failed')] = function (value$958) {
    return util$940.primitiveAccessor.apply(this, [
        'script-only-if-failed',
        value$958
    ]);
};
PostBuildScript$942.prototype[util$940.camelize('execute-on')] = function (value$959) {
    return util$940.primitiveAccessor.apply(this, [
        'execute-on',
        value$959
    ]);
};
PostBuildScript$942.prototype[util$940.camelize('mark-unstable-if-failed')] = function (value$960) {
    return util$940.primitiveAccessor.apply(this, [
        'mark-unstable-if-failed',
        value$960
    ]);
};