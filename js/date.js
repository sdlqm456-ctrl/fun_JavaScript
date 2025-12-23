// date.js

// Dete 객체
let today = new Date("2025-02-04T10:00:00");
console.log(today.getMonth()); // 월 정보는 0(1월) ~ 11 (12월)까지 시작
console.log(today.getDay()); // 요일 정보를 가져옴 일(0) ~ 토 (6)에 해당함

today = new Date("2025-02-22");
today.setFullYear(2023); // 년도를 바꾸는 명령어 (setFullYear)
today.setMonth(0); // 달을 변경 (setMonth)

today.setFullYear(1970); //1970.01.01 기준으로 1초가 지날때 마다 1000씩 누적하는 값 UTC+ 기준 +9
today.setMonth(0); // 월
today.setDate(1); // 일
today.setHours(0); // 시간
today.getMinutes(0); // 분
today.getSeconds(0); //gatTime () 기준시간 + 1000 => 초
today = new Date();
const aday = new Date("Sun Dec 21 2025 16:27:00 GMT+0900"); // 수동으로 날짜를 지정해서 가져오는 방법
console.log(today.getTime()); // (시), 분, 초 단위 환산

const diff = (today.getTime() - aday.getTime()) / 1000;
// 계산: (시), 분, 초 단위 환산
const hours = Math.floor(diff / 60 / 60); // 시
const minutes = Math.floor((diff % (60 * 60)) / 60); // 분
const seconds = Math.floor(diff % 60); // 초
console.log(`${hours} 시간  ${minutes} 분 ${seconds} 초`);

let year = 2025;
let month = 12;

// 과제: 3월의 달력 만들기
today = new Date();
today.setFullYear(year);
today.setMonth(month - 1, +1); // 전날
today.setDate(1); // 0은 지난 달의 마지막 날을 말함 => 1일의 요일, 말일의 정보
today.getDay();
console.log(
  `${today.setMonth(
    month - 1
  )} 월, ${today.getDay()} 날짜, ${today.getDate()} 요일`
);
// 요일
switch (today.getDay()) {
  case 0:
    console.log("일요일");
    break;
  case 1:
    console.log("월요일");
    break;
  case 2:
    console.log("화요일");
    break;
  case 3:
    console.log("수요일");
    break;
  case 4:
    console.log("목요일");
    break;
  case 5:
    console.log("금요일");
    break;
  case 6:
    console.log("토요일");
    break;
}

// 계산
// 1일이 화요일
// let pritCalendar;
const spaces = 1; // 달력의 숫자를 앞당기고 싶을때 spaces를 0으로 하면 됨 spaces는 공란을 말함
// 배열
// 31일이 마지막날
function pritCalendar(yyyy, mm) {
  const lastDate = 31;
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  let htmlStr = `<table border = '2'><thead><tr>`;
  for (let day of days) {
    htmlStr += `<th>${day}</th>`;
  }
  htmlStr += "</tr></thead><tbody><tr>";
  // 공란
  for (let s = 0; s < spaces; s++) {
    htmlStr += `<td> </td>`;
  }
  // 날짜
  for (let d = 1; d <= lastDate; d++) {
    htmlStr += `<td>${d}</td>`;
    if ((d + spaces) % 7 == 0) {
      htmlStr += "</tr><tr>";
    }
  }
  htmlStl = `<input></input>`;
  document.querySelector("button").addEventListener("click", (e) => {
    if (e.target.button == "calender") {
      document.querySelector("button").forEach((elem) => {
        console.log(elem);
        elem.addEventListener("click", (e) => {});
      });
    }
  });
}
pritCalendar();

// 객체, 메소드 =>
// 콘솔에 요일 정보를 출력하는 함수
function printDay(now = new Date()) {
  // 매개변수 => function printDay(now = new Date()) {
  switch (now.getDay()) {
    case 0:
      console.log("일요일");
      break;
    case 1:
      console.log("월요일");
      break;
    case 2:
      console.log("화요일");
      break;
    case 3:
      console.log("수요일");
      break;
    case 4:
      console.log("목요일");
      break;
    case 5:
      console.log("금요일");
      break;
    case 6:
      console.log("토요일");
      break;
  }
}
printDay(today); // 매개값
console.log(today.getDate());

// // 달력생성
// function pritCalendar(yyyy, mm) {
//   let today = new Date(); // Date 객체선언 => 2025년 5월
//   today.setFullYear(yyyy); // 2025
//   today.setMonth(mm - 1); // 2025.05
//   today.setDate(1); // 2025.05.01

//   // 1일의 요일정보
// }
