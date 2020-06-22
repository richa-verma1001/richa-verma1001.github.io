//Exercises at https://www.w3resource.com/javascript-exercises/javascript-basic-exercises.php

//5. Write a JavaScript program to rotate the string 'w3resource' in right
//direction by periodically removing one letter from the end of the string
//and attaching it to the front

class Controller {
  static input = 'Initial';

  static rotate() {
    const inputArr = this.input.split('');
    const lastChar = inputArr.pop();
    inputArr.unshift(lastChar);
    this.input = inputArr.join('');
    return inputArr.join('');
  }
}
export {Controller};
