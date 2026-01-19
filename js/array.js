// 배열관련 매소드

const numAry = [];
for (let i = 1; i <= 6; i++) {
  numAry.push(Math.ceil(Math.random() * 100)); // 0 < x < 100 의 값을 생성 => 반올림 (1 <= x < 101)
}

// forEach 반복문
numAry.forEach((elem) => console.log(elem));

// map(): 여러개의 데이터를 받아 각 요소에 함수를 적용한 결과를 반환하는 함수
const mapResult = numAry.map((elem) => ({ score: elem })); // {score: 89}
console.log(mapResult);

// filter(): 조건을 만족하는 값을 담는다
const filResult = numAry.filter((elem) => elem > 90);
console.log(filResult);

console.clear(); // 콘솔에 출력된 내용을 지워줌
console.log(numAry);

// reduce (): 정의하는 방식에 따라 값이 달라짐
// ass: 이전 순번에서 넘어온 값을 누적하게 됨
// // 50보다 큰 값을 저장
let result = numAry.reduce((acc, elem, idx, ary) => {
  console.log(`acc => ${acc}, elem => ${elem}`);
  if (elem > 50) acc.push(elem); // 배열로 만들어 진 결과를 모두 담겠다
  return acc;
}, []); // 배열로 표시하기
console.log(`result => `, result); // 결과도 배열로 표시되어 출력됨

// reduce()
result = numAry.reduce((acc, elem) => {
  let li = document.createElement("li");
  li.textContent = elem;
  acc.appendChild(li); // <li>68</li>
  return acc;
}, document.querySelector("ul#list"));

// from ()
result = document.querySelectorAll("#list li");
console.log(result);
result = Array.from(result); // nodelost => Array로 변경

//Node.list는 forEach 사용가능
result.forEach((elem) => console.log(elem.innerText));
result.filter((elem) => elem.innerText < 50);
