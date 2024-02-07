export {};

class Me {
  static isProgrammer: boolean = true;
  static firstName: string = 'Atsushi';
  static lastName: string = 'Ichida';

  constructor(public readonly owner: string) {}

  static work() {
    return `Hey, guys! ${this.lastName}!`;
  }
}

console.log(Me.isProgrammer);
console.log(Me.work());

let me = new Me('Sasa');
// meCard.owner = 'YAMA';
// console.log(me.isProgrammer);

console.log(me.owner);
