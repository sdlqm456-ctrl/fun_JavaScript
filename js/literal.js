// lieral.js

// const (값을 한번만 저장할 수 있는 상수)
const n1 = 50;
const n2 = 30;

console.log(`n1값 ${n1}와  n2값 ${n2}의 합은 ${n1 + n2}`);

// 3항연산자: (조건) ? (참일 때 값) : (거짓일 때 값) => “n1이 크면 n1, 아니면 n2”
console.log(`n1값 ${n1}와  n2값 ${n2}의 큰값은 ${n1 > n2 ? n1 : n2}`);

// map: 배열의 각 요소를 새로운 값으로 변경 => 새 배열 반환
// .join: 배열을 문자열로 합쳐서 ""로 연결
const fruits = ["샤인머스캣", "딸기", "복숭아", "사과"];
const newAry = `${fruits.map((elem) => `<li>${elem}</li>`).join("")}`;
console.log(newAry);
// innerHtml: 브라우저 ul안에 넣어 출력
document.querySelector("ul").innerHTML = newAry;
