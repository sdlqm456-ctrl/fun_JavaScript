// function3.js

// 함수표현식
const sum = function (a, b) {
  return a + b;
};

console.log(sum);
let result = sum(2, 3);

// 함수를 다른 변수에 담아서 호출
// 함수를 값처럼 쓰기위해 변수에 담아서 표현
const plus = sum; // 함수 실행결과를 저장하는 것
result = plus(3, 4);

// 즉시실행 함수(함수를 만들고 바로 실행)
// 여기서 function => 함수 표현식
result = (function (x, y) {
  // 3항 연산식 (x가 y보다 크면 x 또는 y 출력)
  return x > y ? x : y;
})(45, 29);
console.log(result);

// 화살표 함수. (매개변수) => { 기능구현 }
const hi = (name) => {
  return `hello ! ${name}`;
};
console.log(hi("김민수"));
