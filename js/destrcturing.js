// 구조분해 (객체, 배열)

const obj = {
  name: "Hong",
  age: 20,
};

// let name = obj.name;
// let age = obj.age;
let { name, age } = obj;
console.log(`1 name => ${name}, age => ${age}`);

// 객체 디스트럭처링
// fetch 함수: 비동기방식으로 처리 (가장 마지막에 처리) => ajex(Asynchronous JavaScript And XML)
// json을 이용해 문자열을 객체로 변경
fetch("js/data.json")
  .then((resp) => resp.json())
  .then(({ name, age }) => {
    console.log(`2 name => ${name}, age => ${age}`);
  })
  .catch((err) => {
    console.log(err);
  });

// 배열의 구조분해
// 동기처리방식
const names = ["hong", "hwang", "choi"];
// const fname = names[0];
const [name1, name2] = names;
console.log(name1, name2);
