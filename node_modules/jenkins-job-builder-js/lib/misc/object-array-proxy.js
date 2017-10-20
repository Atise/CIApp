"use strict";

var ObjectArrayProxy = function(upper, array, ctor) {
  this.upper = upper;
  this.array = array;
  this.ctor = ctor;
};

// can not require util.js, because this leads to circular dependencies
ObjectArrayProxy.prototype.up = function() {
  return this.upper;
};
ObjectArrayProxy.prototype.and = ObjectArrayProxy.prototype.up;
ObjectArrayProxy.prototype.create = function() {
  var obj = {};
  this.array.push(obj);
  return new this.ctor(this, obj);
};

module.exports = ObjectArrayProxy;
