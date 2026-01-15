// switch.js

// promt: 사용자에게 입력값을 받는함수
// 화면에 메세지를 출력해 사용자가 직접 내용을 입력할수 있게 하는 함수
let msg = promt("A,B,C 중에 값을 입력하세요");
console.log(msg);

// 여러조건을 비교하는 조건문
// break: 조건문 종료하고 switch밖으로 나감
// default: 어떤 case에도 해당하지 않을때 실행
switch (msg) {
  case "A":
    console.log("A를 입력");
    break;
  case "B":
    console.log("B를 입력");
    break;
  case "C":
    console.log("C를 입력");
    break;
  default:
    console.log("A,B,C 중에 입력");
}
