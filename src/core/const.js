console.log("App Running . . .");

function testConst() {
  const a = 10;
  function testLetInner() {
    const a = 20;
    console.log(a);
  }
  testLetInner();
  console.log(a);
}

testConst();
