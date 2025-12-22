// array.js

const numAry = [10, 20, 30]; // new Array () 배열선언 / Array는 class 
const chrAry = ["a", "b", "c"];
const str = "hello";

const newAry = numAry.concat(chrAry); 
console.log(`newAry => ${newAry.join (",")}`); // join: 배열 => 문자열로 만들어 주는 명령어 join() 안에는 , - / 를

// 추가, 삭제
numAry.push(40); // 맨 뒤에 추가
numAry.unshift(50); // 배열에 추가시 맨앞에 추가됨
numAry.pop();// 젤 뒤에 요소를 삭제 시킴
numAry.shift(); // 맨 앞 삭제

// [10, 20, 30] 대체
numAry.splice(0, 2, 1, 2, 3, 4, 5); // 첫번째: 위치, 수정할 대상의 크기 (대체할 값의 크기), 대체할 값 => 대체할 값을 넣어주지 않으면 삭제가 됨
console.log (`numAry => ${numAry}`, numAry);

// [1, 2, 3, 4, 5, 30]
console.log (numAry.slice(1)); // 1~3까지의 값을 잘라서 새로운 배열을 생성해 주는 명령어 / 1만 넣을 경우 1 제외 2~30까지의 수를 가지고 오게 됨 
// str.push("world"); // 배열일 경우에만 문자열을 사용할 수 있음

// [2, 3, 4, 5, 30] // for: 반복문 
numAry.forEach((elem, idx, ary) => { 
   // a는 요소의 값, b는 index 
  console.log(`첫번째: ${elem}, 두번째: ${idx}, 세번째: ${ary}` 
  );
}); 

// [1, 2, 3, 4, 5, 30]
// 각 요소들 값 중에서 짝수만 콘솔에 출력 
// ?는 맞는지 물어보고 뒤에 오는 조건을 실행하겠다는 의미
numAry.forEach((elem, idx) => (idx < 3 ? console.log(elem) : ""));

