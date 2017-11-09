export default class Person {
  constructor(name='Default person') {
    this.name = name;
  }

  sayHi() {
    console.log(`Hi ${this.name}`);
  }
}