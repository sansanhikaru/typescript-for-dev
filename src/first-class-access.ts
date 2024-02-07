export {};

class Person {
  public name: string;
  protected age: number;
  protected nationality: string;

  constructor(name: string, age: number, nationality: string) {
    this.name = name;
    this.age = age;
    this.nationality = nationality;
  }

  profile(): string {
    return `name: ${this.name}', age: ${this.age}`;
  }
}

class Android extends Person {
  constructor(name: string, age: number, nationality: string) {
    super(name, age, nationality);
  }

  profile(): string {
    return `name: ${this.name}', age: ${this.age}, nationality:  ${this.nationality}`;
  }
}

let taro = new Person('Taro', 30, 'Japan');
let hanako = new Person('hanako', 26, 'Japan');
console.log(taro.name);
console.log(taro.profile());
console.log(hanako.name);
console.log(hanako.profile());
// let hanako = new Person();
