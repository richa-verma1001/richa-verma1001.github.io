import {Controller} from './Controller.js';

class UI {
  static intervalId;

  static addListeners() {
    console.log('Listeners added');
    const rotateBtn = document.querySelector('#rotate button');
    rotateBtn.addEventListener('click',UI.rotate);

    const stopRotateBtn = document.querySelectorAll('#rotate button')[1];
    stopRotateBtn.addEventListener('click',UI.stopRotation);
  }

  static rotate(){
    console.log('Rotate the string');
    const input = document.querySelector('#rotate input').value;
    Controller.input = input;
    let result = input;
    UI.intervalId = setInterval(function() {
      result = Controller.rotate();
      document.querySelector('#rotate p').innerHTML = result;
    }, 1000);
  }

  static stopRotation(){
    clearInterval(UI.intervalId);
  }
}
UI.addListeners();
export {UI};
