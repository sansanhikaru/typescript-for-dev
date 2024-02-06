export {};

let numbers:number[] = [1,2,3];

console.log({numbers});

let numbers2:Array<number> = [1,2,3]

console.log({numbers2});

let strings:string[] = ['Tokyo','Osaka','Kyoto']

console.log({strings});

let strings2:string[][] = [['Tokyo','Osaka','Kyoto'],['ichi','ni']]

console.log({strings2});


let hairetsu: (string | number | boolean)[] = [1,false,'Japan']

console.log({hairetsu});