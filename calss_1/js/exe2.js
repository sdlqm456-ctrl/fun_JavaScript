// exe2.js

// 가위바위보게임 1(가위), 2(바위),3(보)
// 시스템: 1~3, 사용자: 1~3
// You win! /You lost! / You Same! 구문을 출력
// Math.random(): 0부터 1미만의 수를 랜덤으로 지정 => Math.random() * 숫자: * 뒤 숫자 만큼 범위가 늘어남

// 가위바위보 게임
let x = Math.floor(Math.random() * 3);
let y = prompt("1(가위), 2(바위),3(보) 중에 값을 입력하세요:");

// 사용자가 값을 입력하지 않으면
if (myChoice == null || myChoice == "") {
  alert("값을 입력해주세요.");
} else {
  let diff = computer - myChoice;
}

// 비겼을때
if (computer == "0") {
  console.log("Draw!");
}
// 1 <= x < 2 => 'You lost!'
else if (computer == "1" || myChoice == "2") {
  console.log("You lost!");
}

// 2 <= x < 3 => 'You lost!'
else if (computer == "2" || myChoice == "3") {
  console.log("You lost!");
}


  

