console.log('Hi, you remembered alright, lets start recursion');

// Challenge 2: isPalindrome
// Return true if Palindrome, false otherwise
// racecar is a palindrome, richa is not
let isPalindrome = function(str) {
  let strArray = Array.from(str);

  return false;
}


let myArray = [2,3];

// Problem: Recursive function that returns the sum of all
// elements in an array.
let sum = function(xyzArray) {
    if(!xyzArray || xyzArray.length==0 || !Array.isArray(xyzArray))
      return;
    if(xyzArray.length == 1 )
        return xyzArray[0];
    else {
        let last = xyzArray.pop();
        return sum(xyzArray) + last;
    }
};

console.log(`sum: ${sum(myArray)}`);
