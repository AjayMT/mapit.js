
/* global module */

function mapit (f, o) {
  for (var k in o)
    f(k, o[k]);
}

module.exports = mapit;

