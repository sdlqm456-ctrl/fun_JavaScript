// exe1.js

// Math.random(): 0 이상 1 미만의 임의의 실수 값을 생성
//  0 <= X < 1
let X = Math.random() * 10;

// Matn.floor(): 4567845 => 4
// Math.ceil(): 4.56745 => 5

// 반올림 함수 => Math.ceil(): 4.56745 => 5
// 소수점이 없는 수라면 사용을 해도 그대로 출력이 됨
let Y = Math.ceil(X);

// console.log(Math.ceil(X));
// console.log(Math.floor(X));

// Y의 값을 Y => 값 의 형태로 출력
console.log("Y => " + Y);

// 임의의 값이 5보다 큰지 => true, false
// true, false 구문이 콘솔 출력
console.log(y > 5);

// 짝수인지 => true, false
// % : 나누기를 했을때 나온 나머지값
// y가 짝수인지 아닌지를 콘솔에 출력
console.log(y % 2 == 0);
