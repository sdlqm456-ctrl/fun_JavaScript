// this 사용 P.42

// 지역변수: 특정영역(함수, 블록) 안에서만 사용가능
// 1. 객체: this (객체를 말함)
// obj의 name: "hong" 과 showThis의 name은 서로 다름
const obj = {
  name: "hong", // 객체의 속성
  showThis() {
    // 객체의 메서드 (함수)
    let name = "Hwang";
    console.log(this.name); // 변수와 구분
  },
}; //obj.showThis();

// 2. 함수: this(window 객체)
// this를 단독으로 호출 할때 의미가 달라짐 => 누가 호출한지에 따라 가리키는 대상이 달라짐
function thisFunc() {
  // 일반함수로 호출
  console.log(this);
}
// thisFunc();

// 3. 이벤트: this (event 대상을 가리킴) / 화살표함수 (window 객체)
document.querySelector("h3").addEventListener("click", function (e) {
  console.log(this);
});
console.log(this);

// var 과 let 비교

// 전역변수
var v1 = 10;

// 지역변수
function sum() {
  var v1 = 20;
  console.log(v1);
}
console.log(v1); // 전역번수 => sum 함수를 호출하지 않아 v1 = 20은 무시하게 됨

// 함수인수의 기본값
function max(n1 = 0, n2 = 0) {
  if (n1 > n2) {
    return n1;
  } else {
    return n2;
  }
}
let result1 = max();
let result2 = max(10, 11);
let result3 = max(result1, result2);
console.log(result3);
