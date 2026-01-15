
// for.js
let sum = 0; // 값을 누적

// 1~5 까지의 수를 sum에 누적

sum += 1;
sum += 2;
sum += 3;
sum += 4;
sum += 5;

sum += 0; // 초기화
for (let i = 1; i <= 100; i++) {
  sum += i;
  // console.log(`sum => ${sum}, i => ${i}`);
}
console.log(`최종합계: ${sum}`);

// 1 ~ 100까지의 정수 중에 홀수의 합: oddSum
// 짝수의 합 : evenSum에 누적

//홀수 값 누적
let oddSum = 0;

// 짝수값 누적
let evenSum = 0;

for (let i = 1; i <= 100; i++) {
  // 홀수값 누적
}
if (i % 2 == 1) {
  oddSum += i;
} else {
  evenSum += i;
}
console.log(`최종 홀수의 합계: ${oddSum}`, `최종 짝수의 합계: ${evenSum}`);




