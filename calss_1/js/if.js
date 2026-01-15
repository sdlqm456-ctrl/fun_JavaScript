// if.js

//Math.rendom() : 0 <= x < 1 범위의 값
// 1 ~10 임의의 정수값을 생성해서 변수에 저장
// x의 값이 "짝수입니다" / "홀수입니다" 판단
// x의 값이 홀수이면서 5보다 크거나 같은지 => "조건을 만족합니다/안합니다"

// Math.random()의 범위 0 이상 10 미만 Math.floor: 0~9의 정수를 만듬 + 1 때문에 그 범위가 1~10으로 늘어남
let x = Math.floor(Math.random() * 10) + 1;

console.log(x);

// x의 값이 홀수 이면서 5보다 크거나 작을때 => 조건을 만족, 만족을 안함
// x % 2 == 1: x를 2로 나눈 나머지가 1 (홀수의 의미)
// &&: 양족조건이 모두 ture일때 전체가 참이 됨 (두가지 조건을 동시에 검사)
if (x % 2 == 1 && x > 5) {
  console.log("조건을 만족 합니다");
} else {
  console.log("조건을 만족 안합니다");
}
console.log("----------------------");

// 3항 연산식
x % 2 == 1 && x > 5
  ? console.log("조건을 만족합니다")
  : console.log("조건을 만족 안합니다");

// 학생성적 출력 (0 <= x <= 100)
x = Math.floor(Math.random() * 101); // 0 <= x*101 < 101
console.log(x);
// 90 <= x <= 100 => A 학점
if (x >= 90) {
  console.log("A학점");
}
// 80 <= x < 90 => B학점
else if (x >= 80) {
  // 80 <= x < 90 => B학점
  console.log("B학점");
} else if (x >= 70) {
  // 70 <= x < 80 => C학점
  console.log("C학점");
  // 60 <= x < 70 => D학점
} else if (x >= 60) {
  console.log("D학점");
}
// 60 > x => F학점
else {
  console.log("F학점");
}
