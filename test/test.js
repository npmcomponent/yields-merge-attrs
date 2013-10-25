
describe('merge-attrs', function(){

  var merge = require('merge-attrs')
    , a = document.createElement('a')
    , assert = require('assert');

  it('should ignore class', function(){
    var o = a.cloneNode();
    var t = a.cloneNode();
    o.setAttribute('class', 'foo');
    merge(t, o);
    assert(!t.hasAttribute('class'));
  })

  it('should ignore id', function(){
    var o = a.cloneNode();
    var t = a.cloneNode();
    o.setAttribute('id', 'foo');
    merge(t, o);
    assert(!t.hasAttribute('id'));
  })

  it('should merge attributes', function(){
    var o = a.cloneNode();
    var t = a.cloneNode();
    o.setAttribute('baz', 'foo');
    o.setAttribute('foo', 'baz');
    merge(t, o);
    assert('baz' == t.getAttribute('foo'));
    assert('foo' == t.getAttribute('baz'));
  })

  it('should not override attributes', function(){
    var o = a.cloneNode();
    var t = a.cloneNode();
    o.setAttribute('baz', 'foo');
    o.setAttribute('foo', 'baz');
    t.setAttribute('baz', 'baz');
    merge(t, o);
    assert('baz' == t.getAttribute('baz'));
    assert('baz' == t.getAttribute('foo'));
  })

})
