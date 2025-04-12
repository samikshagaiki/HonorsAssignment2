function findLargest(arr) {
    let largest = arr[0];
    for (let num of arr) {
      if (num > largest) {
        largest = num;
      }
    }
    return largest;
  }
  
  console.log(findLargest([3, 9, 2, 15, 7])); // Output: 15
  