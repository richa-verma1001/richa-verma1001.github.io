class Human {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  getName() {
    return `Name: ${this.name}`;
  }  
  getInfo() {
    return `This record is for ${this.name}, Age: ${this.age} `;
  }
}

export {Human};
