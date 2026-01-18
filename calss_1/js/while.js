// while.js

for (let i = 1; i <= 5; i += 1) {
  console.log(`i의 값은 ${i}`);
}

// while 조건문
let i = 1;
while (i <= 5) {
  console.log(`i의 값은 ${i}`, i++);
}

// 조건을 만족할때 실행
// Math.random(): 1 ~ 10미만 랜덤 숫자 생성
while (true) {
  let num = Math.ceil(Math.random() * 10);
  console.log(`num => ${num}`);
  // 생성된 수가 9면 반복문 종료 ( break: 반목문 종료 명령어)
  if (num == 9) {
    break;
  }
}

// 입력 받은 수의 합을 구하기
// parseInt: 문자열 => 정수로 변환
let sum = 0;
if (sum != 0) {
  while (true) {
    let yourValue = prompt("숫자를 입력하세요 종료할려면 quit입력 ");
    if (yourValue == "quit") {
      break;
    }
    yourValue = parseInt(yourValue);
    sum += yourValue;
  }
  console.log(`합계: ${sum}`);
}

// 학생의 점수 구하기
sum = 0;
let count = 0;
let maxScore = 0;
while (true) {
  let yourValue = prompt("학생의 점수를 입력하세요. 종료할려면 quit 입력");
  if (yourValue == "quit") {
    break;
  }
  yourValue = parseInt(yourValue);
  sum += yourValue;
  count++; // 점수가 1개씩 입력될때마다 1증가

  // 학생수, 최고점수 구하기
  // 조건: 현재 최고점수 / youVlaue 비교해서 현재값을 최고점수에 대입
  if (maxScore < yourValue) {
    maxScore = yourValue;
  }
}
console.log(`평균: ${sum / count}, 최고점수: ${maxScore}`);
