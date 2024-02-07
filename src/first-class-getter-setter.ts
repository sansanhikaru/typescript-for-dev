export {};

// * owner
//  * 所有者
//  * 初期化時に設定できる。
//  * 途中で変更できない。
//  * 参照できる。
// * owner
//  * 個人番号
//  * 初期化時に設定できる。
//  * 途中で変更できる。
//  * 参照できない。

class MyNumberCard {
  constructor(private _owner: string, private _sercretNumber: number) {}

  set sercretNumber(sercretNumber: number) {
    this._sercretNumber = sercretNumber;
  }

  get owner(): string {
    return this._owner;
  }

  // profile(): string {
  //   return `name: ${this.name}', age: ${this.age}`;
  // }
  debugPring() {
    return `servretNumber : ${this._sercretNumber}`;
  }
}

let meCard = new MyNumberCard('Sasa', 12345);
console.log(meCard.owner);
console.log(meCard.debugPring());
meCard.sercretNumber = 98765;
console.log(meCard.debugPring());
