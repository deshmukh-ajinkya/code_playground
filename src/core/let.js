console.log("App Running . . .");

function testLet() {
  let a = 10;
  function testLetInner() {
    a = 20;
    console.log(a);
  }
  console.log(a);
  testLetInner();
}

testLet();

// Output:
// 10
// 20