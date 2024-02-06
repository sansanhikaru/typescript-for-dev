export {};

function bmi(height: number, weight: number): number {
  return weight / (height * height);
}

console.log(bmi(1.73, 59));

let bmi2: (height: number, weight: number) => number = function (
  height: number,
  weight: number
): number {
  return weight / (height * height);
};

console.log(bmi2(1.73, 59));

let bmi3: (height: number, weight: number) => number;
bmi3 = (height: number, weight: number): number => {
  return weight / (height * height);
};

console.log(bmi3(1.73, 59));

let bmi4: (height: number, weight: number) => number;
bmi4 = (height: number, weight: number): number => weight / (height * height);
console.log(bmi4(1.73, 59));

let bmi5: (height: number, weight: number, printable?: boolean) => number = (
  height: number,
  weight: number,
  printable?: boolean
): number => {
  const bmi: number = weight / (height * height);

  console.log(printable);
  if (printable) {
    console.log(bmi);
  }
  return bmi;
};
bmi5(1.73, 100, true);
bmi5(1.73, 100);

// bmi(身長,体重,console.logで出力するかどうか？)
// bmi5(1.73, 59, true);
// bmi5(1.73, 59, false);
// bmi5(1.73, 59);
const nextYearSalary = (currentSalary: number, rate: number = 1.1) => {
  return currentSalary * rate;
};

console.log(nextYearSalary(1000, 1.05));
console.log(nextYearSalary(1000));

const sum: (...values: number[]) => number = (...values: number[]): number => {
  console.log(values);

  const initialValue = 0;
  const sumWithInitial: number = values.reduce(
    (accumulator: number, currentValue: number) => accumulator + currentValue,
    initialValue
  );
  return sumWithInitial;
};
console.log(sum(1, 2, 3, 4, 5, 6, 100));

function double(value: number): number;
function double(value: string): string;

function double(value: any): any {
  if (typeof value === 'number') {
    return value * 2;
  } else {
    return value + value;
  }
}
// function double(value: string): string {
//   return value + value;
// }
console.log(double(100));
console.log(double('Go '));
// console.log(double(true));
