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




// To make accessible using closure / object 
let outerVariable = 'outer';

(function () {
  let innerVariable = 'inner';

  function innerFunction() {
    console.log(outerVariable); // logs 'outer'
    console.log(innerVariable); // logs 'inner'
  }

  global.innerFunction = innerFunction; // exposing innerFunction to the global scope it can be any  object not restricted to GLOBAL
})();

innerFunction(); // logs 'outer' and 'inner'