// for.js
let sum = 0; // 값을 누적

// 1~5 까지의 숫자를 sum에 누적

sum += 1;
sum += 2;
sum += 3;
sum += 4;
sum += 5;

sum = 0; // 초기화
// 위의 sum 규칙을 편하게 계산하는 방법
for (let i = 1; i <= 100; i++) {
  sum += i;
  //console.log(`sum => ${sum}, i => ${i}`);
}
console.log(`최종합계 : ${sum}`);

sum = 0; // 초기화
// 1 부터 100까지의 정수 홀수의 합을 sum 변수에 누적
for (let i = 1; i <= 100; i++) {
  // 홀수 i의 값
  if (i % 2 == 1);
    sum += i;
}
console.log(`최종홀수합계 => ${sum}`);

//  1 ~ 100까지의 정수 중에 홀수의 합 : oddSum, 짝수의 합 : evenSum에 누적
let oddSum = 0; //홀수의 값을 누적하기 위한 변수
let evenSum = 0; // 짝수의 값을 누적하기 위한 변수
for (let i = 1; i <= 100; i++) {
  //홀수의 값을 누적하기
  if (i % 2 == 1) {
  oddSum += i;
  } else { 
    evenSum += i;
  }
}
console.log(`최종홀수의 합계 : ${oddSum}`,`최종짝수의 합계 : ${evenSum}`);




