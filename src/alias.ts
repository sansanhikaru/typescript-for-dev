export {};

type Mojiretsu = string;

let profile1: string ='Ham1'
let profile2: Mojiretsu ='Ham2'

console.log(profile1);
console.log(profile2);


const example1 ={
  name:'Ham',
  age:43
};

type Profile = {
  name: string;
  age: number;
}

const example2:Profile ={
  name:'Ham',
  age:43
};

type Profile2 = typeof example1;

const example3:Profile2 ={
  name:'Ham',
  age:43
};