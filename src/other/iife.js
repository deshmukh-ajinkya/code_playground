// accessible within IIFE itself
(function (a) {
  var x = 10;
  console.log(x + a); // outputs 10
})(a);


// To make accessible return variable and function
var myModule = (function () {
  var x = 10;
  function foo() {
    console.log("foo");
  } 
  return {
    getX: function () {
      return x;
    },
    foo: foo,
  };
})();

console.log(myModule.getX()); // outputs 10
myModule.foo(); // outputs "foo"
