
var assert = require('assert');
var domify = require('domify');
var indexof = require('indexof');

describe('indexOf(arr, item)', function(){
  it('should return index of item in array', function(){
    assert(indexof([7,3,9],3) == 1);
  })

  it('should return -1 when item is not in array', function(){
    assert(indexof([7,3,9],5) == -1);
  })
})

describe('indexOf(el)', function(){
  it('should return index of element in children[]', function(){
    var dom = domify('<ul><li>a</li><li>b</li><li>c</li></ul>');
    var el = dom.children[2];
    assert(indexof(el) == 2);
  })

  it('should return -1 index when element has no parent', function(){
    var el = domify('<p>lorem</p>');
    assert(indexof(el) == -1);
  })

})