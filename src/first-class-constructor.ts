export {};

class Person {
  constructor(public name: string, protected age: number) {}

  // profile(): string {
  //   return `name: ${this.name}', age: ${this.age}`;
  // }
}

const me = new Person('Sasa', 35);
let taro = new Person('Taro', 30);
console.log(me);
console.log(taro);
