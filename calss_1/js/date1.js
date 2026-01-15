// 현재 날짜를 생성
let calendarDate = new Date();

function pritCalendar() {
  const monthYearDisplay = document.getElementById("current-month-year");
  // getMonth()는 0부터 시작하므로 1을 더해줍니다.
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth() + 1;
  monthYearDisplay.textContent = `${year}년 ${month}월`;
}

// 이전 달로 이동하는 함수
function goToPreviousMonth() {
  // setMonth()를 사용하여 현재 월에서 1을 뺍니다.
  // 자바스크립트 Date 객체는 월이 0 미만이 되면 자동으로 전년도 마지막 달로 변경해줍니다.
  currentDate.setMonth(currentDate.getMonth() - 1);
  renderMonthYear();
  // 실제 달력의 날짜를 다시 그리는 renderCalendar 함수 호출 (예시)
  // renderCalendar();
}

// 다음 달로 이동하는 함수
function goToNextMonth() {
  // setMonth()를 사용하여 현재 월에서 1을 더합니다.
  // 월이 11을 초과하면 자동으로 다음 연도 첫 달로 변경해줍니다.
  currentDate.setMonth(currentDate.getMonth() + 1);
  renderMonthYear();
  // 실제 달력의 날짜를 다시 그리는 renderCalendar 함수 호출 (예시)
  // renderCalendar();
}

// 버튼 요소에 이벤트 리스너를 추가합니다.
document
  .getElementById("prev-month")
  .addEventListener("click", goToPreviousMonth);
document.getElementById("next-month").addEventListener("click", goToNextMonth);

// 초기 로드 시 현재 월을 표시합니다.
document.addEventListener("DOMContentLoaded", (event) => {
  renderMonthYear();
});
pritCalendar();
