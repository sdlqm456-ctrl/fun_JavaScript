// 문자열 메소드

// indexOf: 문자열이 있는지 확인 후 반환
let pos = "hello world".indexOf("ox");
console.log(pos);

// indexOf 인덱스 반환 / includes true,false 반환
const names = ["홍길동", "최형우", "박길동"];
let cnt = 0;
for (let name of names) {
  // if (name.indexOf("길동") != -1) {
  if (name.includes("길동")) {
    cnt++;
  }
}
console.log(`길동은 ${cnt}명 입니다`);

// filter() => 조건을 만족하는 값을 새로운 배열로 만들어 저장 (배열에 있는 수만큼 반복)
const newNames = names.filter((elem) => elem.indexOf("길동") != -1); // 길동이란 문자열이 없으면 -1
// const newNames = names.filter((elem) => elem.includes("길동") != -1);
console.log(newNames);

// 단어의 배열 자르기
// slice(): 원하는 범위를 잘라 새로운 배열 생성
// 매개값이  0이면 전체 배열을 가지고 옴, 뒤에 두개를 가지고 오고 싶으면 -2
console.log("Hello, world".slice(-2));

// 시간출력
const now = new Date(); // 시스탬의 시간정보
console.log(now);

// 날짜 출력
const yyyy = now.getFullYear(); // 년도
now.setMonth(2); // 0 ~ 11월 정보
now.setDate(2);
const mm = now.getMonth() + 1; // 월
const dd = now.getDate(); // 일
console.log(`${yyyy}-${("0" + mm).slice(-2)}-${("0" + dd).slice(-2)}`);
