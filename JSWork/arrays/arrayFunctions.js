
console.log('ArrayFunctions');

// array.reduce (callback(accumulator, initialValue), accumulator_initializer)
// OR
// array.reduce()
const sum = function(...nums){
  return nums.reduce(function(accumulator, currentValue){
    return accumulator = accumulator + currentValue;
  },0);
};

const sumES6 = function(...nums) {
  return nums.reduce( (total, num) => (total += num), 0);
};

const printES6 = function(...nums) {
  return nums.forEach( num => console.log(num));
};

// reduce
console.log('Print sumES6: ' + sumES6(1, 2, 3, 4));

// forEach
//printES6(1,2,3,4,5,);

export {
  sum,
  sumES6,
  printES6
};
