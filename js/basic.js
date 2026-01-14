 // basic.js 연습

// 변수선언, 연산자 활용
// 변수: 값을 저장할 수 있는 공간
// let: 변수선언 명령어 / 같은 변수를 재선언을 할 수 없다
// 변수를 담는 상자에는 숫자, 문자 상관없이 뭐든 담을 수 있음

let myname = "장수연";
myname = "장수연";

// 혈액형 지정하기 (AB, O,B, Ph-)
let bloodType = "O형";

// 키 선언하기
let myheight = 185;

// 성인, 미성년자 구분하기 (true 또는 false)
let isAdult = true;

// 더하기
let sum = 10 + 20;
console.log("내 이름은" + nyname + "입니다");

// 사칙연산 (더하기,빼기,곱하기,나누기)

// 1. 값 설정하기 (변수선언)
let num1 = 10;
let num2 = 5;
let result = 0;

// 계산식 정하기
result = num1 + num2; // 값: 15
result = num1 - num2; // 값: 5
result = num1 * num2; // 곱하기 => 값: 50
result = num1 / num2; // 나누기 => 값: 2
result = (result + num1) % num2; // ()안에서 나온 결과를 num2 로 나누기 => 값: 2

result += 2; // result에서 +2 하기
result *= 2; // result에서 곱하기 2
result %= 5; // result에 있는 값을 5로 나눈값을 다시 result에 저장
result = result > 10;
result = "hello" * 3; //NaN
result = result - 3;
console.log("현재 result 값은 " + result);
