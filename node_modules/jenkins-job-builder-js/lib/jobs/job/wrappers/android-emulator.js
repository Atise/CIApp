'use strict';
var util$940 = require('../../../misc/util.js');
var HardwareProperties$942 = require('./android-emulator/hardware-properties.js');
var AndroidEmulator$943 = function (upper$959, obj$960) {
    this.upper = upper$959;
    this.obj = obj$960;
};
AndroidEmulator$943.prototype.up = function () {
    return this.upper;
};
AndroidEmulator$943.prototype.and = AndroidEmulator$943.prototype.up;
module.exports = AndroidEmulator$943;
AndroidEmulator$943.prototype[util$940.camelize('avd')] = function (value$961) {
    return util$940.primitiveAccessor.apply(this, [
        'avd',
        value$961
    ]);
};
AndroidEmulator$943.prototype[util$940.camelize('os')] = function (value$962) {
    return util$940.primitiveAccessor.apply(this, [
        'os',
        value$962
    ]);
};
AndroidEmulator$943.prototype[util$940.camelize('screen-density')] = function (value$963) {
    return util$940.primitiveAccessor.apply(this, [
        'screen-density',
        value$963
    ]);
};
AndroidEmulator$943.prototype[util$940.camelize('screen-resolution')] = function (value$964) {
    return util$940.primitiveAccessor.apply(this, [
        'screen-resolution',
        value$964
    ]);
};
AndroidEmulator$943.prototype[util$940.camelize('locale')] = function (value$965) {
    return util$940.primitiveAccessor.apply(this, [
        'locale',
        value$965
    ]);
};
AndroidEmulator$943.prototype[util$940.camelize('target-abi')] = function (value$966) {
    return util$940.primitiveAccessor.apply(this, [
        'target-abi',
        value$966
    ]);
};
AndroidEmulator$943.prototype[util$940.camelize('sd-card')] = function (value$967) {
    return util$940.primitiveAccessor.apply(this, [
        'sd-card',
        value$967
    ]);
};
AndroidEmulator$943.prototype[util$940.camelize('wipe')] = function (value$968) {
    return util$940.primitiveAccessor.apply(this, [
        'wipe',
        value$968
    ]);
};
AndroidEmulator$943.prototype[util$940.camelize('show-window')] = function (value$969) {
    return util$940.primitiveAccessor.apply(this, [
        'show-window',
        value$969
    ]);
};
AndroidEmulator$943.prototype[util$940.camelize('snapshot')] = function (value$970) {
    return util$940.primitiveAccessor.apply(this, [
        'snapshot',
        value$970
    ]);
};
AndroidEmulator$943.prototype[util$940.camelize('delete')] = function (value$971) {
    return util$940.primitiveAccessor.apply(this, [
        'delete',
        value$971
    ]);
};
AndroidEmulator$943.prototype[util$940.camelize('startup-delay')] = function (value$972) {
    return util$940.primitiveAccessor.apply(this, [
        'startup-delay',
        value$972
    ]);
};
AndroidEmulator$943.prototype[util$940.camelize('commandline-options')] = function (value$973) {
    return util$940.primitiveAccessor.apply(this, [
        'commandline-options',
        value$973
    ]);
};
AndroidEmulator$943.prototype[util$940.camelize('exe')] = function (value$974) {
    return util$940.primitiveAccessor.apply(this, [
        'exe',
        value$974
    ]);
};
AndroidEmulator$943.prototype[util$940.camelize('hardware-properties')] = function (value$975) {
    return util$940.objectAccessor.apply(this, [
        'hardware-properties',
        HardwareProperties$942,
        value$975
    ]);
};