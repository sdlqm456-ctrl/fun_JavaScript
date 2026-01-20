// spread(펼침) operator

// 배열을 펼쳐서 보는 명령어
const friends = ["park", "Choi", "Kim"];
console.log(...friends);

// 배열 안에 배열을 만듬
const newAry = [...friends]; // 1차원 배열 => ([ 이름1, 이름2, 이름3 ]기본 배열 형태로 출력됨)
console.log(newAry);

// 배열 복사 clone :서로 같은 주소값을 참조하기 때문에 어느 한 배열을 바꿔도 내용을 바꿔서 출력
const clone = friends; // 참조하는 주소값이 같기 때문에 배열에 추가 되어 출력
const clone2 = [...friends];
friends.push("Lee");
console.log(clone2, friends);
const clone3 = [];
clone3.push(...friends); // [["park", "Choi", "Kim"]] => 배열안에 내용을 펼쳐 새로운 배열을 생성

// 배열 (object): 객체는 변수에 객체의 주소값을 참조하는 변수
console.log(clone3);
