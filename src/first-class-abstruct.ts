export {};

abstract class Animal {
  abstract cry(): string;
}

class Lion extends Animal {
  cry() {
    return 'roar';
  }
}

class Tiger extends Animal {
  cry() {
    return 'gaor';
  }
}

console.log(new Lion().cry());
console.log(new Tiger().cry());
