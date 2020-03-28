console.log('Cardio2: I am ready');
// Refernce cardio problems from
// https://www.youtube.com/watch?v=FfchU1FS2IA&list=PLillGF-Rfqbb4ZOnsNCIB-DnLuUrQjS_G&index=2
// Starting Template- https://github.com/bradtraversy/javascript_cardio/blob/master/session2/index_extra.js
// To run file: open browser http://localhost/JSWork/arrayCardio/cardio2/index.html
// make sure you have browser-refresh-on-save plugin installed in atom for auto refreshes

// CHALLENGE 1: LONGEST WORD
// Return the longest word of a string
// ex. longestWord('Hi there, my name is Brad') === 'there,'
function longestWord(sen) {
  let splitSentence = sen.split(' ');
  let longestWord = [];

  splitSentence.forEach((item, i,splitSentence) => {
    if(!longestWord || !longestWord[0])
      longestWord.push(item);
    else if(longestWord[0] && item.length == longestWord[0].length){
      longestWord.push(item);
    } else if(longestWord[0] && item.length > longestWord[0].length){
      longestWord = [];
      longestWord[0] = item;
    }
  });
  return longestWord.length == 1 ? longestWord.toString() : longestWord;

  // SOLUTION 1 - Return a single longest word
  // SOLUTION 2 - Return an array and include multiple words if they have the same length
  // SOLUTION 3 - Only return an array if multiple words, otherwise return a string
}
// Call Function
const output = longestWord('Hello, my name is Brad');
console.log(output);

// CHALLENGE 2: ARRAY CHUNKING
// Split an array into chunked arrays of a specific length
// ex. chunkArray([1, 2, 3, 4, 5, 6, 7], 3) === [[1, 2, 3],[4, 5, 6],[7]]
// ex. chunkArray([1, 2, 3, 4, 5, 6, 7], 2) === [[1, 2],[3, 4],[5, 6],[7]]

function chunkArray(arr, len) {
  //return arr.splice(0, len);
  let result = [];
  while(arr.length!=0) {
    result.push(arr.splice(0,len));
  }
  return result;
}

console.log(chunkArray([1, 2, 3, 4, 5, 6, 7], 2));
console.log(chunkArray([1, 2, 3, 4, 5, 6, 7], 3));

// CHALLENGE 3: FLATTEN ARRAY
// Take an array of arrays and flatten to a single array
// ex. [[1, 2], [3, 4], [5, 6], [7]] = [1, 2, 3, 4, 5, 6, 7]

function flattenArray(arrays) {
  return arrays.flatMap(item => item);
}

console.log(flattenArray([[1, 2], [3, 4], [5, 6], [7]]));


// CHALLENGE 4: ANAGRAM
// Return true if anagram and false if not
// ex. 'elbow' === 'below'
// ex. 'Dormitory' === 'dirty room##'

function isAnagram(str1, str2) {}

// CHALLENGE 5: LETTER CHANGES
// Change every letter of the string to the one that follows it and capitalize the vowels
// Z should turn to A
// ex. 'hello there' === 'Ifmmp UIfsf'

function letterChanges(str) {


}
