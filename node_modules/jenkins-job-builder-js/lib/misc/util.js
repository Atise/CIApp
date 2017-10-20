"use strict";

var PrimitiveArrayProxy = require('./primitive-array-proxy.js');
var ObjectArrayProxy = require('./object-array-proxy.js');

exports.fancyDeepClone = function(object) {
  return JSON.parse(JSON.stringify(object));
};

/**
 * Attach to proxy object. Represents the "value" as in:
 *
 *  outer =
 *  {
 *    inner: "value"
 *  };
 *
 * Always assigns a new primitive value.
 */
exports.primitiveAccessor = function(property, value) {
  if (value === undefined) {
    throw "TODO: getter is not implemented. Have to decide on what is actually returned";
  } else {
    this.obj[property] = value;
    return this;
  }
};

/**
 * Attach to proxy object. Represents the {} as in:
 *
 *  outer =
 *  {
 *    inner: {}
 *  };
 *
 * Returns a proxy object created by `constructor`.
 */
exports.objectAccessor = function(property, constructor, value) {
  if (value === undefined) {
    // every time a fresh object is returned to enforce declarative coding
    // style
    this.obj[property] = {};
    return new constructor(this, this.obj[property]);
  } else {
    throw 'TODO: setter is not implemented';
  }
}

/**
 * Attach to proxy object. Represents the [] as in:
 *
 *    outer =
 *    {
 *      inner: []
 *    };
 *
 * Returns array proxy, which can store new primitive values.
 */
exports.primitiveArrayAccessor = function(property, value) {
  if (value === undefined) {
    // always create a fresh array to enforce declarative code style
    this.obj[property] = [];
    return new PrimitiveArrayProxy(this, this.obj[property]);
  } else {
    throw 'TODO: setter is not implemented';
  }
};

/**
 * Attach to a proxy object. Represents the [] as in:
 *    outer =
 *    {
 *      inner: []
 *    };
 *
 * Returns array proxy, which can store new objects. All objects are of the
 * same type and their proxies are instantiated with `constructor`.
 */
exports.objectArrayAccessor = function(property, constructor, value) {
  if (value === undefined) {
    // always create a fresh array to enforce declarative code style
    this.obj[property] = [];
    return new ObjectArrayProxy(this, this.obj[property], constructor);
  } else {
    throw 'TODO: setter is not implemented';
  }
};

exports.customArrayAccessor = function(property, constructor, value) {
  if (value === undefined) {
    // always create a fresh array to enforce declarative code style
    this.obj[property] = [];
    return new constructor(this, this.obj[property]);
  } else {
    throw 'TODO: setter is not implemented';
  }
};

/**
 * Attach to a proxy array to create a keyed object. Example:
 *
 *  array =
 *  [
 *    {"key": {}}
 *  ];
 *
 * The returned proxy can add more properties to the inner `{}`. It is instantiated
 * with `constructor`. Every invocation adds a new element
 *
 * Keyed object are defined in YAML with or without inner object properties:
 *
 *  - ansicolor
 *  - ansicolor:
 *      colormap: vga
 */
exports.keyedObjectElementAccessor = function(property, constructor, value) {
  if (value === undefined) {
    var obj = {};
    obj[property] = {};
    this.array.push(obj);
    return new constructor(this, obj[property]);
  } else {
    throw 'TODO: setter is not implemented';
  }
};

/**
 * Represents the following YAML:
 *
 * outer:
 *  - inner: value
 */
exports.keyedPrimitiveElementAccessor = function(property, value) {
  if (value === undefined) {
    throw 'TODO: getter is not implemented';
  } else {
    var obj = {};
    obj[property] = value;
    this.array.push(obj);
    return this;
  }
};

/**
 * Attach this to proxy as a method to create a keyed object with user-defined
 * property name. It does not follow a typical accessor contract, so it should
 * be named in a distinguished way
 */
exports.generateCustomKeyObjectElementAccessor = function(array, constructor) {
  return function(key) {
    var obj = {};
    obj[key] = {};
    this[array].push(obj);
    return new constructor(this, obj[key]);
  };
};

/**
 * Attach this to proxy to translate the following structure:
 *
 * outer:
 *  - key:
 *    - shell: |
 *      #!/bin/bash
 *      echo "Doing something cool"
 *    - shell: |
 *      #!/bin/bash
 *      echo "The end is near"
 *
 */
exports.keyedArrayElementAccessor = function(property, constructor, value) {
  if (value === undefined) {
    var obj = {};
    obj[property] = [];
    this.array.push(obj);
    return new ObjectArrayProxy(this, obj[property], constructor);
  } else {
    throw 'TODO: setter is not implemented';
  }
};

/**
 * Attach this to proxy to translate the following structure:
 *
 * outer:
 *  - property:
 *    - A
 *    - B
 */
exports.keyedPrimitiveArrayElementAccessor = function(property, value) {
  if (value === undefined) {
    var obj = {};
    obj[property] = [];
    this.array.push(obj);
    return new PrimitiveArrayProxy(this, obj[property]);
  } else {
    throw 'TODO: setter is not implemented';
  }
};

/**
 * Adds ability to ascend to the parent object for the prototype
 */
exports.generateUppable = function(fieldName) {
  return function() {
    return this[fieldName];
  };
};

exports.makeUppable = function(prototype, fieldName) {
  prototype.up = exports.generateUppable(fieldName);
  prototype.and = prototype.up;
};

exports.generateToDoMember = function(message) {
  return function() {
    throw 'TODO: ' + message;
  }
};

exports.camelize = function(str) {
  return str.replace(/-([a-z])/g, function (g) {
    return g[1].toUpperCase();
  });
};
