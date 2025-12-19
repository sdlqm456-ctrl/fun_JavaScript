// function3.js
// 함수표현식
const sum = function (a,b) {
  return a + b;
};
console.log(sum);
let result = sum(2,3);

const plus = sum;
result = plus(3,4);
  
// 즉시실행 함수
resuit = (function (x,y) {
  return x > y ? x : y;
}) (45,29);
console.log (result);

// 화살표 함수. (매개변수) => { 기능구현 }
const hi = (name) => {
  return `hello ! ${name}`;
};
console.log(hi('김민수'));
