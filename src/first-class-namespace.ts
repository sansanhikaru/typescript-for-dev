export {};

namespace Japanese {
  export namespace Tokyo {
    export class Person {
      constructor(public name: string) {}
    }
  }
  export namespace Osaka {
    export class Person {
      constructor(public name: string) {}
    }
  }
}

namespace English {
  export class Person {
    constructor(
      public firstName: string,
      public middleName: string,
      public lastName: string
    ) {}
  }
}

let me = new Japanese.Tokyo.Person('Sasa');

console.log(me);

let me2 = new Japanese.Osaka.Person('Hamyan');

console.log(me2);

let micheal = new English.Person('Micheal', 'Joseph', 'Jackson');

console.log(micheal);
