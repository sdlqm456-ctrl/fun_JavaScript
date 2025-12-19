// event.js
//  이벤트 - 이벤트핸들러
// 버튼(클릭) - 이벤트 핸들러 등록

// document.querySelector('선택자') => 화면요소를 찾아서 반환
console.dir (document.querySelector("button")); //.dir은 객체모양으로 보이게 하는 것  
document
  .querySelector("button") 
  .addEventListener('click', function(){ // addEventListener => 객체에 포함되어 있는 함수
    console.log(`클릭됨`) // 1. 이벤트 유형 2. 이벤트핸들러(함수) => this로 속성, 글자색, 배경색 등을 변경할 수 있음
    // 이벤트핸들러 (this는 이벤트를 받는 대상)
     this.style.backgroundColor = "red";
     this.style.color ="yellow"; 
     this.innerHTML = "Event"; //html의 값을 가지고 옴
  }); 

document
  .querySelector("button") //
  .addEventListener('mouseover', (e) => { // mouseover 마우스가 (e) 요소에 옯겨 지는 것
    // 이벤트핸들러 (this :window객체) mouseover(임의의 문자) 
    console.log(e.target); // target은 this와 같음
    e.target.style.color = "blue";
  }); 

    // li에 각 요소에 이벤트.
    let allList = document.querySelectorAll("#second>li");
    console.log(allList); //allList확인
    for (let i =0; i < allList,length; i++){
      allList[i].addEventListener("click",ilClockFnc);
      allList[i].addEventListener("mouseOver", mouseOverFnc);
      allList[i].addEventListener("mouseout", mouseOutFnc);
    }

    // 함수들
    function ilClockFnc(e) {
      console.log (e.target.innerHTML); // e.target 이벤트대상
    }
    function mouseOverFnc(e) {
      e.target.style.backgroundColor = "yelllow";
    }
    function mouseOverFnc(e){
      e.target.style.backgroundColor = "";
    }