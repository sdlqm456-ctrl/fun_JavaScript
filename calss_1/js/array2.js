// array2.js
const nameAry = new Array ();
nameAry.push("홍길동");
nameAry.unshift("구자욱");
nameAry.splice(1, 0, "이재현", "김지찬","윤정빈");

nameAry.sort(); // 가,나, 다 순으로 내용을 정렬해 주는 명령어
nameAry.reverse();

// 윤정빈, 홍길동, 구자욱, 이재현, 김지찬

// 없는 요소를 index값에 넣을 경우 -1로 표시함
let idx = nameAry.indexOf("이호성"); // indexOf: 배열의 요소를 찾을때 사용 (있는지 없는지 확인 할 수 있음) => 찾는 값의 인덱스 반환 

nameAry.forEach((elem) => {
  console.log(elem);
});

// 홍길영, 홍길동, 구자욱, 이재현, 김지찬
// 입력을 받아서 친구의 이름을 목록에서 삭제
// 1. 삭제할 친구의 이름 입력하기
let delName = prompt("삭제할 이름을 입력하세요")
// 2. 이름을 찾기 (인덱스를 활용)
let ind = nameAry.indexOf(delName); // index로 이용해 이름 찾기 
// 3. 배열에서 삭제하기 만약 삭제할 이름이 없으면 warning 띄우기
if (idx == -1) {
  alert("찾는 이름이 없습니다");   
} else {
  nameAry.splice(idx, 1); // 대체할 값을 넣어주지 않으면 삭제함
}
// 목록확인
nameAry.forEach((elem) => {
  console.log(elem);
});




