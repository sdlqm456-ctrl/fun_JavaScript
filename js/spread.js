// spread(펼침) operator: 객체나 배열 등 값이나 인자를 한꺼번에 집어넣는 역활
// ...배열명(spread 문법): 배열안의 값을 하나하나 펼쳐서 꺼내는 역활
// 객체나 배열을 좀더 효과적으로 다룰수 있다는 장점

const friends = ["park", "Choi", "Kim"];
console.log(...friends);

// 배열안에 배열을 만드는 명령어
// 1차원 배열: [ 이름1, 이름2, 이름3 ]처럼 기본 배열 형태로 출력
const newAry = [...friends]; // 배열을 복사해서 새로운 배열을 만듬
console.log(newAry);

// clone: 배열복사
const clone = friends; // 같은 배열을 가리킴
const clone2 = [...friends]; // clone2과 friends는 서로 다른 배열
friends.push("Lee"); // 원본 배열 변경
console.log(clone2, friends);
const clone3 = [];
clone.push(...friends);

// 배열 (object)
console.log(clone3);
