console.log("App Running . . .");

// accessible within IIFE itself
(function () {
  var x = 100;
  console.log(x); // outputs 10
})();

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
