console.log('Cardio3: I am ready');
// Refernce cardio problems from
// Starting Template- https://github.com/bradtraversy/javascript_cardio/blob/master/session3/index_start.js
// To run file: open browser http://localhost/JSWork/arrayCardio/cardio3/index.html
// make sure you have browser-refresh-on-save plugin installed in atom for auto refreshes

// CHALLENGE 1: ADD ALL NUMBERS
// Return a sum of all parameters entered regardless of the amount of numbers - NO ARRAYS
// ex. addAll(2,5,6,7) === 20

function addAll(...nums) {
  console.log(arguments);
  console.log(nums);
  return nums.reduce((sum, val) => sum = sum+ val);
}
console.log(addAll(2,5,6,7));


// CHALLENGE 2: SUM ALL PRIMES
// Pass in a number to loop up to and add all of the prime numbers.
// A prime number is a whole number greater than 1 whose only factors are 1 and itself
// ex. sumAllPrimes(10) == 17

function sumAllPrimes(num) {
  let primeNums=[];

  for(let i=2; i<=num; i++){
    if(isPrime(i))
      primeNums.push(i);
  }
  return primeNums.reduce((sum, val) => sum + val);
}

function isPrime(num) {
  if(num == 2)
    return true;
  for(let i = 2; i<num; i++){
    if(num % i == 0)
      return false;
  }
  return true;
}
console.log(sumAllPrimes(10));

// CHALLENGE 3: SEEK & DESTROY
// Remove from the array whatever is in the following arguments.
// Return the leftover numbers in an array
// ex. seekAndDestroy([2, 3, 4, 6, 6, 'hello'], 2, 6) == [3, 4, 'hello']
function seekAndDestroy() {

}

// CHALLENGE 4: SORT BY HEIGHT
// Some people are standing in a row in a park. There are trees between
// them which cannot be moved. Your task is to rearrange the people by their
// heights in a non-descending order without moving the trees.
// ex.
// a = [-1, 150, 190, 170, -1, -1, 160, 180]
// sortByHeight(a) == [-1, 150, 160, 170, -1, -1, 180, 190]

function sortByHeight(arr) {
  return arr.sort(function(first, second) {
    if(first == -1)
      return 0;
    return first < second ? -1 : 1;
  });
}
console.log(sortByHeight([-1, 150, 160, 170, -1, -1, 180, 190]));


// CHALLENGE 5: MISSING LETTERS
// Find the missing letter in the passed letter range and return it.
// If all letters are present, return undefined
// ex.
// missingLetters("abce") == "d"
// missingLetters("abcdefghjklmno") == "i"
// missingLetters("abcdefghijklmnopqrstuvwxyz") == undefined

function missingLetters() {}

// CHALLENGE 6: EVEN & ODD SUMS
// Take in an array and return an array of the sums of even and odd numbers
// ex.
// evenOddSums([50, 60, 60, 45, 71]) == [170, 116]

function evenOddSums() {}
