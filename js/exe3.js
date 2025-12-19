// exe3.js
// 콘솔에 출력
// 50보다 크거나 같은 값만 출력
// 홀수번째 출력
// 큰값
const numAry = [10, 30, 50];
numAry[1] = 20;
numAry[numAry.length] = 20;
numAry[numAry.length] = 60;
numAry[numAry.length] = 80;

// 50보다 크거나 같은 값만 출력

for (let i = 0; i < numAry.length; i++) { 
  if (numAry[i] >= 50) {
    console.log(`numAry[${i}]의 값 : ${numAry[i]}`);
  }
}
// 홀수값을 출력
let oddSum = 0;
for (let i = 1; i < numAry.length; i++) { //length: 변수에 들어있는 정보의 갯수를 나타내는 값 => 데이터 개수가 바뀌어도 직접 수를 입력하지 않기 위해 사용
if (i % 2 ==1) 
  oddSum += numAry[i];
}
console.log(`홀수번째 위치의 값의 합  + ${oddSum}`);

// 회원정보 (회원아이디, 이름, 포인트)
let members = [{id: "user01", name: "홍길동", point: 800},
               {id: "user01", name: "홍길동", point: 700},
               {id: "user01", name: "홍길동", point: 900},
];

// 포인트의 합게를 구하고 최고 포인트가 얼마인지 확인

let sum = 0;
let maxScore = 0;
function scoreInfo(){
  for (let i = 0; i < members.length; i++) {
    sum += members[i].point;
    if (members[i].point > maxScore ) {
      maxScore = members[i].point;
    }
  }
}
scoreInfo();
console.log(`포인트의 합계는 ${sum}, 최고 포인트 ${maxScore}`);

// 표로 작성

