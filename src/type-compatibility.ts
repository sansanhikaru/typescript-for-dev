export {};

let fooCompatible: any;
let barCompatible: string = 'TypeScript';

console.log(typeof fooCompatible);

fooCompatible = 1;
fooCompatible = barCompatible;
barCompatible = fooCompatible;

console.log(typeof fooCompatible);

let fooInCompatible: string;
let barInCompatible: number = 1;
// fooInCompatible = barInCompatible;
// barInCompatible = fooInCompatible;

let fooString: string;
let barStrong: string = 'string';
fooString = barStrong;
barStrong = fooString;

let fooStringloteral: 'fooStringloteral' = 'fooStringloteral';
fooString = fooStringloteral;
// fooStringloteral = fooString;

let fooNumber: number;
let fooNumberloteral: 1976 = 1976;
fooNumber = fooNumberloteral;
// fooNumberloteral = fooNumber;
interface Animal {
  age: number;
  sex: number;
}

class Person {
  constructor(public age: number, public sex: number) {}
}
let me: Animal;
me = new Person(42, 0);
