
/* global module */

function mapit (f, o, thisArg) {
  for (var k in o)
    f.apply(thisArg || this, [k, o[k]]);
}

Object.prototype.mapit = mapit;

if (typeof module === 'object')
  module.exports = mapit;
