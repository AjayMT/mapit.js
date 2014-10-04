
/* global require */

var should = require('should');
var mapit = require('./mapit.js');

var app = {
  opts: {},
  set: function (k, v) {
    app.opts[k] = v;
  }
}

app.mapit(app.set, {
  'abc': 'xyz',
  'foo': true
});

app.opts.abc.should.eql('xyz');
app.opts.foo.should.be.true;

mapit(app.set, {
  'baz': 'bar',
  'quux': {}
});

app.opts.baz.should.eql('bar');
app.opts.quux.should.eql({});
