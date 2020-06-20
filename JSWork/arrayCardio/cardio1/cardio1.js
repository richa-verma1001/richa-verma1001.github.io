console.log('Cardio1: I am ready');
// Refernce cardio problems from
// https://www.youtube.com/watch?v=M2bJBuaOeOQ&list=PLillGF-Rfqbb4ZOnsNCIB-DnLuUrQjS_G
// To run file: open browser http://localhost/JSWork/arrayCardio/index.html
// make sure you have browser-refresh-on-save plugin installed in atom for auto refreshes
let companies = [
  {name: 'IBM', established: 1978, size: 'big'},
  {name: 'Chevron', established: 1962, size: 'big'},
  {name: 'Google', established: 2001, size: 'big'},
  {name: 'Amazon', established: 2008, size: 'big'},
  {name: 'Facebook', established: 2002, size: 'medium'},
  {name: 'Apple', established: 1998, size: 'medium'},
  {name: 'slack', established: 2011, size: 'size'},
];

let people = ['Verma, Richa',
              'Bansal, Rishi',
              'Gupta, Kamlesh',
              'DeSouza, Claudio',
              'Smith, Jack',
              'Thomas, Nick',
            ];

// Filter companies after 2000
let getRecentCompanies = function(companies){
  return companies.filter(function(company) {
    return company.established > 2000 ? true : false;
  })
};

console.log(getRecentCompanies(companies));

//Challenge: Reverse String
// ex. reverseString('hello') === 'olleh'
let reverseString = function(string) {
  return string.split('').reverse().join('');
}
// string.split('') -- splits a strings into an array e.g.rat into ['r','a','t']
// array.join('') -- returns a string
console.log(reverseString('Akshay Verma'));
console.log(reverseString('Mr.Rakesh ; Bansal'));
console.log(reverseString('hello'));


/*******************************************************************/

// Challenge 2: isPalindrome
// Return true if Palindrome, false otherwise
// racecar is a palindrome, richa is not
let isPalindrome = function(str) {
  str = str.toLowerCase();
  //let strArray = str.split('');
  let strArray = Array.from(str);
  let revStr = strArray.reverse().join('');
  return str === revStr ? true : false;
}

console.log(`racecar: ${isPalindrome('racecar')}`);
console.log(`2020: ${isPalindrome('2020')}`);
console.log(`515: ${isPalindrome('515')}`);
console.log(`richa: ${isPalindrome('richa')}`);
console.log(`Ana: ${isPalindrome('Ana')}`);

// Challenge 3: Reverse an Integer
// e.g. reverseInt(125) ==> 521
let reverseInt = function(int) {
  return int.toString().split('').reverse().join('');
}

console.log(reverseInt(123));
console.log(reverseInt(515));
console.log(reverseInt(672));

//Challenge 4: Capitalize Letters
// Return a string with the first letter of every word capital
// e.g. i love javascript ==> I Love javascript
let capitalizeLetters = function(sentence) {
  let sentenceArray = sentence.split(' ');
  return sentenceArray.map( (word) => word.charAt(0).toUpperCase() + word.substr(1)).toString();

}
console.log(capitalizeLetters('i love javascript'));

// Challenge 5: Max Characters
// Return the character that is most common in a string
// e.g. maxCharacters('javascript' ==> a)
let maxCharacters = function(str) {
}

// Challenge 5: FizBuzz
// Write a program that prints all the numbers from 1 to 100
// For multiples of 3, instead of number, print 'Fizz', for multiples of 5
// print 'Buzz'. For numbers which are multiples of both 3 and 5, print
// FizzBuzz
function fizBuzz() {

  for(let i=0; i<=100; i++){
    if(i%3 == 0 && i%5 == 0)
      console.log('FizzBuzz');
    else if(i%3 == 0)
      console.log('Fizz');
    else if(i%5 == 0)
      console.log('Buzz');
    else
      console.log(i);
  }
}
fizBuzz();
