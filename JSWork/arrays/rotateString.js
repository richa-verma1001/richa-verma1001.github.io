//Exercises at https://www.w3resource.com/javascript-exercises/javascript-basic-exercises.php

//Write a JavaScript program to rotate the string 'w3resource' in right
//direction by periodically removing one letter from the end of the string
//and attaching it to the front

console.log('Ready');

class Rotate {
  static rotate(){
    let inputArr = Rotate.input.split('');
    let lastChar = inputArr.pop();
    inputArr.unshift(lastChar);
    Rotate.input = inputArr.join('');
    console.log(Rotate.input);
  }
}

Rotate.input = 'w3resource';
let intervalId = setInterval(Rotate.rotate, 1000);
setTimeout(function(){
  clearInterval(intervalId);
},5000);

export {Rotate};
