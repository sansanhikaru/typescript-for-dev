export {};

class VisaCard {
  constructor(public readonly owner: string) {}
}

let meCard = new VisaCard('Sasa');
// meCard.owner = 'YAMA';
console.log(meCard.owner);
