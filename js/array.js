// 배열관련 매소드

// push: 배열의 맨 뒤에 값을 하나 추가
const numAry = [];
for (let i = 1; i <= 6; i++) {
  numAry.push(Math.ceil(Math.random() * 100)); // 0 < x < 100 의 값을 생성 => 반올림 (1 <= x < 101)
}

// forEach 반복문: 배열에 있는 요소들을 한개씩 확인해서 값을 담아 실행
numAry.forEach((elem) => console.log(elem));

// map(): 배열의 모든 요소를 하나씩 꺼내 새로운 배열을 만들어 반환
const mapResult = numAry.map((elem) => ({ score: elem })); // { }: 객체 => 화살표 함수에서 객체 반환시 반드시 감싸야 함
console.log(mapResult);

// filter(): 조건을 만족하는 값을 담는다
const filResult = numAry.filter((elem) => elem > 90);
console.log(filResult);

console.clear(); // 콘솔에 출력된 내용을 지워줌
console.log(numAry);

// reduce (): 정의하는 방식에 따라 값이 달라짐
// ass: 이전 순번에서 넘어온 값을 누적하게 됨
// idx: 현재요소 / ary: 원본 배열
// // 50보다 큰 값을 저장
let result = numAry.reduce((acc, elem, idx, ary) => {
  console.log(`acc => ${acc}, elem => ${elem}`);
  if (elem > 50) acc.push(elem); // 배열로 만들어 진 결과를 모두 담겠다
  return acc;
}, []); // 누적값 acc의 초기값을 빈 배열로 설정
console.log(`result => `, result); // 결과도 배열로 표시되어 출력됨

// reduce(): 배열에서 조건에 맞는 값만 모으기 (배열을 하나씩 순회하면서 누적값에 결과를 쌓음)
// reduce => 누적대상이 배열이 아니여도 누적이 됨
result = numAry.reduce((acc, elem) => {
  // 여기서 acc 는 <ul>
  let li = document.createElement("li");
  li.textContent = elem;
  acc.appendChild(li); // <li>68</li>
  return acc;
}, document.querySelector("ul#list")); // 여기 안에 <li> 들이 전부 만들어짐

// from ()
result = document.querySelectorAll("#list li"); // 결과값: NodeList (배열이 아님)
console.log(result);
result = Array.from(result); // Nodelost => Array로 변경

//Node.list는 forEach 사용가능
result.forEach((elem) => console.log(elem.innerText));
result.filter((elem) => elem.innerText < 50);
