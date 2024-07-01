function binarySearch(list, target) {
    // Sort the list in ascending order
    list.sort((a, b) => a - b);
  
    let low = 0;
    let high = list.length - 1;
  
    while (low <= high) {
      let mid = Math.floor((low + high) / 2);
  
      if (list[mid] === target) {
        return mid; // Target element found, return its index
      } else if (list[mid] < target) {
        low = mid + 1; // Search in the right half
      } else {
        high = mid - 1; // Search in the left half
      }
    }
  
    return -1; // Target element not found
  }
  
  // Example usage:
  let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  let target = 7;
  
  let result = binarySearch(numbers, target);
  
  if (result !== -1) {
    console.log(`Element ${target} found at index ${result}`);
  } else {
    console.log(`Element ${target} not found in the list`);
  }
  