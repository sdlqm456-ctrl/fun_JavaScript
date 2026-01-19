// 구조분해 (객체, 배열)

// 객체 구조분해: 값을 꺼내는 단축어, 순서 상관 x (한줄로 요약해서 사용)
// let name = obj.name;
// let age = obj.age;

const obj = {
  name: "Hong",
  age: 20,
};

let { name, age } = obj;
console.log(`1 name => ${name}, age => ${age}`);

// 객체 디스트럭처링 (요청 → 응답 받음 → JSON으로 변환 → 값 사용)
// fetch 함수: 서버에서 데이터를 요청하는 함수, 비동기방식으로 처리 (가장 마지막에 처리)
// 요청을 보내고 결과를 기다리지 않고 다음코드 실행
// json을 이용해 문자열을 객체로 변경
fetch("js/data.json")
  .then((resp) => resp.json()) // .then((resp) 서버가 보내준 객체 (문자열)  => resp.json(): 자바스크립트 객체로 변경)
  .then(({ name, age }) => {
    console.log(`2 name => ${name}, age => ${age}`);
  })
  // fetch 중 에러발생시 err 실행
  .catch((err) => {
    console.log(err);
  });

// 배열의 구조분해
// 동기처리방식
const names = ["hong", "hwang", "choi"];
// const fname = names[0];
const [name1, name2] = names;
console.log(name1, name2);
