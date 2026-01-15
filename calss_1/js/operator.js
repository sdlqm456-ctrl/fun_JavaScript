// operator.js

console.log("최강삼성 히어로 누구 김영웅");

let result = 10 > 5;
result = 10 == 11;

let num1 = 10;
let num2 = 25;
let str = "10";
str1 = 10;
// 값과 데이터타입 비교

// >=: num1이 num2보다 크거나 같으면 true, 아니면 false
result = num1 >= num2;
// ===: num1과 str1이 값도 같고, 타입도 같으면 true, 아니면 false
result = num1 === str1;
// != : 같은지 비교 (num1과 num2가 다르면 true, 같으면 false)
result = num1 != num2;

// 논리연산자
// || : or 연산자 (둘중 하나라도 true 이면 true)
result = num1 > num2 || num1 == str1;

// &&: AND 연산자 (둘 다 true여야 true)
result = num1 > num2 && num1 == str1;
// !: NOT 연산자 (괄호 안 먼저 계산하고 not 적용)
result = !(num1 > num2 && num1 == str1);
result = !result;
result = !result; // 최종값
console.log(result);
