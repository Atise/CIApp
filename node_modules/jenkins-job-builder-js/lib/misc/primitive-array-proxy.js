"use strict";

var acceptedTypes = ['number', 'string', 'boolean'];

var PrimitiveArrayProxy = function(upper, array) {
  this.upper = upper;
  this.array = array;
};

// can not require util.js, because this leads to circular dependencies
PrimitiveArrayProxy.prototype.up = function() {
  return this.upper;
};
PrimitiveArrayProxy.prototype.and = PrimitiveArrayProxy.prototype.up;
PrimitiveArrayProxy.prototype.add = function(element) {
  if (element !== undefined && element != null) {
    if (acceptedTypes.indexOf(typeof(element)) == -1) {
      throw new Error('PrimitiveArrayProxy does not support ' + typeof(element));
    }
    this.array.push(element);
    return this;
  }
};

module.exports = PrimitiveArrayProxy;
