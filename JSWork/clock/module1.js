class Module1 {
  constructor() {
  }

  bindTime() {
    let clockElem = document.getElementById('_clockHandle');
    clockElem.innerText = new Date().toLocaleTimeString();
  }
  removeTime() {
  }
}

let myModule = new Module1();
myModule.bindTime();

export {Module1};
