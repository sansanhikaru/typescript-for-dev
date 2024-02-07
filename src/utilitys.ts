export {};

type Profile = {
  name: string;
  age: number;
};
type PatialType = Partial<Profile>;
type RequiredType = Required<Profile>;

type PropertyType = keyof Profile;

type Optional<T> = {
  [P in keyof T]?: T[P];
};

type OptionalType = Optional<Profile>;

const me: Profile = {
  name: 'Ham',
  age: 43,
};

me.age++;

console.log(me);

type ProfileDataType = Readonly<Profile>;

const friend: ProfileDataType = {
  name: 'Ham',
  age: 43,
};

// friend.age++;

console.log(friend);

// Record<K, T>
type Prefectures = 'Tokyo' | 'Chiba' | 'Tottori' | 'Shiga';

type Covid19InfectionInfo = {
  kanji_name: string;
  confirmed_cases: number;
};

const cobid19Japan: Record<Prefectures, Covid19InfectionInfo> = {
  Tokyo: { kanji_name: '東京', confirmed_cases: 1960 },
  Chiba: { kanji_name: '千葉', confirmed_cases: 249 },
  Tottori: { kanji_name: '鳥取', confirmed_cases: 2 },
  Shiga: { kanji_name: '滋賀', confirmed_cases: 100 },
};
console.log(cobid19Japan);

type DebugType = () => void;
type SomeTypes = string | number | DebugType;

type FunctionType = Exclude<SomeTypes, string | number>;

type NonFunctionType = Exclude<SomeTypes, DebugType>;
type TypeExcludingFunction = Exclude<SomeTypes, Function>;

type FunctionTypeByExract = Extract<SomeTypes, DebugType>;
type NonFunctionTypeByExract = Extract<SomeTypes, string | number>;
type FunctionTypeByExracting = Extract<SomeTypes, Function>;

type NullableTypes = string | number | null | undefined;
type NonNullableTypes = NonNullable<NullableTypes>;

type MyExclude<T, U> = T extends U ? never : T;
type MyFunctionType = MyExclude<SomeTypes, string | number>;

type DetailedProfile = {
  name: string;
  height: number;
  weight: number;
  sex: boolean;
};

type SimpleProfile = Pick<DetailedProfile, 'name' | 'weight'>;
type SimpleProfile2 = Omit<DetailedProfile, 'name' | 'weight'>;

function add(a: number, b: number) {
  return a + b;
}

console.log(add(1, 2));

type ReturnTypeFromAdd = ReturnType<typeof add>;

type MyReturnType<T extends (...args: any) => any> = T extends (
  ...args: any
) => infer R
  ? R
  : any;

const debugProfile = (name: string, age: number) => {
  console.log({ name, age });
};
debugProfile('Ham', 29);

type Profile2 = Parameters<typeof debugProfile>;
const profile: Profile2 = ['Gloria', 76];

debugProfile(...profile);

class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}
let taro = new Person('Taro', 35);
console.log({ taro });

type Persontype = typeof Person;
type ProfileNew = ConstructorParameters<Persontype>;

const profileNew: ProfileNew = ['Ham', 43];
const ham = new Person(...profileNew);
console.log({ ham });
