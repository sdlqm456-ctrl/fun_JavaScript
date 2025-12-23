// math.js

// 인스턴트를 반드시 가지고 있어야 하는 명령어
const ary = new Array(); // 인스턴스 마다 각기 다른 값
const today = new Date(); // 동일

// 정적 메소드 클래스, 메소드 호출
// console.log(Math.abs(-1)) // 절대값을 반환하기 때문에 -1을 가지게 됨
//console.log(Math.min(2,20,-1)) //최소값을 가짐
// console.log(Math.round(3.523)) // 소수점 이하 부분 반올림

function numberGame() {
  // 51 ~ 100 (포함) => 67 생성
  // 숫자맞추기 함수
  // 70입력 크다/작다 판별 => 60 입력 크다/작다 (여러번 시도) => 67 입력
  // 필요한 함수: 임의의 값을 담는 변수, 사용자 입력값 변수, while 반복문, break
  let myNumber = 0;
  let systemNumber = Math.random();
  let numberNo = Math.ceil(Math.random() * 50) + 50;

  // 사용자 입력값 (숫자 맞추기 함수)
  while (true) {
    myNumber = prompt("51~ 100 사이의 숫자를 입력하세요");
    if (myNumber == numberNo) {
      alert("정답");
      break;
    }
    // 60,70을 입력했을 때 큰지 작은지 비교
    if (myNumber > numberNo) {
      console.log(`큰 값은 ${myNumber}`);
    } else {
      console.log(`큰 값은 ${numberNo}`);
    }
  }
  console.log("end of gaem");
}
numberGame();
