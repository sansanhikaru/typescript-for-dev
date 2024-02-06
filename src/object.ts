export {};

let profile1: object = {name: 'Ham'}
profile1 = {birthdYear:1976};

let profile2: {
  name: string;
} = {name: 'Ham'}
//profile2 = {birthdYear:1976};
profile2 = {name:'Tom'};

console.log(profile1);
console.log(profile2);