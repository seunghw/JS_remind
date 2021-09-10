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
let menu = {
  width: 200,
  height: 300,
  title: "My menu",
};

multiplyNumeric(menu);

// 함수 호출 후
menu = {
  width: 400,
  height: 600,
  title: "My menu",
};

//프로퍼티값 부풀리기
function multiplyNumeric(menu) {
  for (let data in menu) {
    if (typeof menu[data] == "number") {
      menu[key] += 2;
    }
  }
}

// 2. 참조에 의한 객체 복사

// 3. 가비지 컬렉션
