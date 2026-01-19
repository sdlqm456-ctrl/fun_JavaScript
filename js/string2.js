// string2.js

const str = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus perspiciatis quas cumque quo nihil ex saepe, eligendi necessitatibus fugit magni dolor quidem id animi quam! Atque ut quae dolore eveniet.`;
const strAry = str.split(" "); // 공란을 기준으로 새로운 배열 생성
console.log(strAry);

// 문자열 생성
const container = document.querySelector("div.container");
for (let word of strAry) {
  let span = document.createElement("span");
  span.innerHTML = word;
  container.appendChild(span);
}

// 1. 입력창 옆 찾기버튼에 클릭 이벤트 등록하기
const btn = document.querySelector("button").addEventListener("click", (e) => {
  // 2. 사용자 입력값 체크
  let userinput1 = document.querySelector("#user_input").value;
  if (!userinput1) {
    alert("값을 입력하세요");
    return;
  }
  // 3. 화면의  span 요소를 가져와서 사용자 입력값과 비교 => if 구문사용 + remove()
  let spanTag = document.querySelectorAll("div.container>span");
  // console.log(spanTag);
  for (let span of spanTag) {
    if (span.textContent.indexOf(userinput1) != -1) {
      span.remove();
    }
  }
});
