// // 1. 객체
// let user = {
//   name: "John",
//   surname: "Smith",
// };

// user.name = "Pete";
// delete user.name;

// let salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130,
// };

// let sum = 0;

// for (let name in salaries) {
//   sum += salaries[name];
// }

// 함수 호출 전
// let menu = {
//   width: 200,
//   height: 300,
//   title: "My menu",
// };

// multiplyNumeric(menu);

// // 함수 호출 후
// menu = {
//   width: 400,
//   height: 600,
//   title: "My menu",
// };

// //프로퍼티값 부풀리기
// function multiplyNumeric(menu) {
//   for (let data in menu) {
//     if (typeof menu[data] == "number") {
//       menu[key] += 2;
//     }
//   }
// }

// 2. 참조에 의한 객체 복사

// 3. 가비지 컬렉션

let calculator = {
  sum() {
    return this.a + this.b;
  },
  mul() {
    return this.a * this.b;
  },
  read() {
    this.a = +prompt("첫번째값:", 0);
    this.b = +prompt("두번째값:", 0);
  },
};

calculator.read();
alert(calculator.sum());
alert(calculator.mul());

// 5. 체이닝

// let ladder = {
//   step: 0,
//   up() {
//     this.step++;
//   },
//   down() {
//     this.step--;
//   },
//   showStep: function () {
//     // 사다리에서 몇 번째 단에 올라와 있는지 보여줌
//     alert(this.step);
//   },
// };

// ladder.up();
// ladder.up();
// ladder.down();
// ladder.showStep(); // 1

// ladder.up().up().down().showStep(); // 1
