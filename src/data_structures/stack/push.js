// For fixed number  of element
function pushFixElement() {
  let stack = [];

  let element = [10, 20, 30, 40, 50];

  for (let i = 0; i < element.length; i++) {
    stack[stack.length] = element[i];
    console.log(stack);
  }
}
pushFixElement();

// For dynamic number of element
function pushDynamicElement() {
  let stack = [];
  process.stdout.write('Enter the element (or "exit"): ');

  process.stdin.on("data", (element) => {
    element = element.toString().trim();

    if (element.toLowerCase() === "exit") {
      console.log(stack);
      process.exit();
    }

    stack[stack.length] = element;

    process.stdout.write('Enter the element (or "exit"): ');
  });
}
pushDynamicElement();

