export {};

let name: string = 'Atsushi';
name = 'Ham';

let nickname = 'Ham' as const;
nickname = 'Ham';

console.log({ name });

let profile = {
  name: 'Atsushi',
  height: 178,
} as const;

// profile.name = 'Ham';
// profile.height = 180;
