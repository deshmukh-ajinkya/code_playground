// Hoisted at top
function testVar() {
  a = 10;
  function testVarInner() {
    console.log(a);
  }
  console.log(a);
  var a;
  testVarInner();
}

testVar();

// Output
// 10
// 10

// Redeclaration
function testVar() {
  a = 10;
  function testVarInner() {
    a = 20;
    console.log(a);
  }
  testVarInner();
  console.log(a);
  var a;
}

testVar();

// Output
// App Running . . .
// 10
// 20
