function popElementByIndex() {
  let stack = [10, 20, 30, 40, 50];

  for (let i = 0; i < stack.length; i++) {
    if (i === stack.length - 1) {
      console.log(`Popped ${stack[i]} from the stack`);
      stack[i] = undefined;
      return;
    }
    stack[i] = stack[i + 1];
    console.log(stack);
  }
  console.log("Stack is empty. Cannot pop.");
}

popElementByIndex();
popElementByIndex();

let stack = [10, 20, 30, 40, 50];
let index = stack.length;
let stdin = process.stdin;

function popElementByIndex() {
  if (index === 0) {
    console.log("No elements to pop, all elements have been popped!");
    return;
  }

  process.stdout.write("Do you want to pop an element? (yes/no): ");

  const dataHandler = (response) => {
    response = response.toString().trim().toLowerCase();

    if (response === "yes") {
      console.log(`Popped ${stack[--index]} from the stack`);
      console.log(stack.slice(0, index)); // Show updated array
    } else if (response === "no") {
      console.log("Operation cancelled.");
    } else {
      console.log("Invalid input. Please enter 'yes' or 'no'.");
    }

    stdin.removeListener("data", dataHandler); // Remove the listener
    popElementByIndex(); // Recursively call the function
  };

  stdin.on("data", dataHandler); // Add the listener
}

popElementByIndex();
