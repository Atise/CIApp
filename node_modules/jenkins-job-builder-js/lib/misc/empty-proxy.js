var util = require('./util.js');

var Empty = function(upper) {
  this.upper = upper;
};
util.makeUppable(Empty.prototype, 'upper');

module.exports = Empty;
