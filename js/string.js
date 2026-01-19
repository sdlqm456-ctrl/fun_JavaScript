// 문자열 메소드

// indexOf: 문자열에서 특정 문자열을 찾는 명령어 (문자열을 찾을 수 없으면 -1 반환)

let pos = "Hello world".indexOf("o");
console.log(pos);

// indexOf 인덱스 반환 / includes: 주어진 배열에 특정요소가 포함 여부확인하고 true, false 반환
// 찾는 요소가 문자열이면 대소문자 구분
const names = ["홍길동", "정길동", "배찬승"];
let cnt = 0;
for (let name of names) {
  // 길동이 없으면 -1 반환
  if (name.indexOf("길동") != -1) {
    cnt++; // 조건에 맞으면 카운트 증가
  }
}
console.log(`길동은 ${cnt}명 입니다`);

// filter(): 걸러주는 역활 (특정조건을 만족하는 새로운 배열을 필요할때 사용)
// 결과로 true, false를 반환
// const newNames = names.filter((elem) => elem.includes("길동") != -1);
const newNames = names.filter((elem) => elem.indexOf("길동") != -1);
console.log(newNames);

// 단어의 배열 자르기
// slice(): 주어진 배열에서 지정한 인덱스 범위를 잘라내 새로운 배열을 반환
// 매개값이 0이면 전체 배열을 가지고 옴, 뒤에 두개를 가지고 오고 싶으면 -2
console.log("Hello, world".slice(-2));

// 시간출력
const now = new Date(); // 시스탬 시간정보
console.log(now);

// 날짜 출력
const yyyy = now.getFullYear(); // 년도
now.setMonth(2); // 0 ~ 11월 정보
now.setDate(2);
const mm = now.getMonth() + 1; // 월
const dd = now.getDate(); // 일
console.log(`${yyyy}-${("0" + mm).slice(-2)}-${("0" + dd).slice(-2)}`);

