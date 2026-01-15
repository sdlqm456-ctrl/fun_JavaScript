// todo_1218.js
// Math.rendom() 활용31 ~ 100까지 생성
// 5번 실행 (for 명령어 활용)
// 합계, 평균, 최대값 => "합계는 480,  평균 96, 최대 99"
//  함수 : scoreInfo => scoreInfo()

// 추가로 더 하고싶으면 & 몇번 실행 (10 매개값으로 받아서 10번 실행)
// scoreInfo(10)
// git add .
// git commit -m "18일 숙제완료"
// git push origin main

function scoreInfo() {
  sum = 0;
  let average = 0;
  let maxScore = 0;
  let count = 5; //5번 반복

  for (let i = 0; i < count; i++) {
    let maxScore = Math.floor(Math.random() * 70) + 31;
    console.log(`생성된 점수 ${i + 1} : ${scoreInfo}`);
    sum += scoreInfo;
    if (scoreInfo > maxScore) {
      maxScore = scoreInfo;
    }
  }
  console.log(`합계는 ${sum}, 평균 ${average}, 최대 ${maxScore}`);
}

// 1 ~ 10까지의 정수를 합하는 반복문
// 홀수값만 누적
// 합계는 55
// 함수: oddSum
function scoreInfo() {
  let sum = 0;
  let oddSum = 0;
  for (let i = 1; i <= 10; i++) {
    sum += i;
    if (i % 2 == 1) {
      oddSum += i;
    }
  }
  console.log(`합계는 ${sum}`, `최종 홀수의 합계 ${oddSum}`);
}
