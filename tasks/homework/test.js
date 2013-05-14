tasks.module("homework");

tasks.add("test", {
  instruction: "Write a function `f` with takes argument `n` and `1!`. For incorrect arument return `-1`.",
  js: "var f = function(n){\n\n}",
  tests: function(){
    test('test f', function(){
      // for testing functions see: http://api.qunitjs.com/category/assert/
      notStrictEqual(f, undefined, 'f is defined');
      strictEqual(typeof f, 'function', 'f is a function');

      for(var i = 0; i < 5; i++){
          for(var j = 0; j < 5; j++){
              strictEqual(f(i, j), i+j, 'calc f('+i+','+j+')');
          }
      }
    });
  }
});
