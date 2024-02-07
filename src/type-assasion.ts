export {};

let name: any = 'Ham';

// let length1 = name.length as number;
// let length2 = (name as string).length;
let length3 = (<string>name).length;

// length1 = 'foo';
// length2 = 'foo';
// length3 = 'foo';

console.log({ length3 });
