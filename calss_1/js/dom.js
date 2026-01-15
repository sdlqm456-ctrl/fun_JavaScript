//dom.js

// id를 기준으로 선택
document.querySelector("#view").addEventListener("click", (e) => {
  console.log(e.target);
  // 기능 구현
  if (e.target.innerText == "상세설명 보기") {
    document.querySelector("#detail").style.display = "block";
  } else if (e.target.innerText == "상세설명 닫기") {
    document.querySelector("#detail").style.display = "none";
  } else if (e.target.innerText == "상세설명 보기");
});

// 이미지를 클릭하면 큰 이미지로 보여주기
document.querySelectorAll(".small").forEach((elem) => {
  elem.addEventListener("click", (e) => {
    console.log(e.target.src); // 클릭한 이미지의 src 속성 (attribute)
    // 큰 이미지
    document.querySelector("#cup").src = e.target.src;
  });
});
console.log(document.querySelectorAll("button")); // 버튼 2개의 배열
document.querySelectorAll("button").forEach((elem) => {
  console.log(elem); // forEach(elem)를 꼭 파악하기
  elem.addEventListener("click", (e) => {
    e.target.style.coler = "red";
  });
});
// 여기에선 .querySelectorAll("button")안에 button을 말하는 것
// 사용하는 .querySelectorAll("내용입력")에 따라 elem의 뜻은 달라짐
//document.querySelectorAll("button").addEventListener("click", (e) => {
// 구현하려는 기능
// e.target.style.backgrondcolor = "yellow";});
