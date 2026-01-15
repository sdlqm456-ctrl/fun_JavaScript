// string.js

["LG 노트북", "삼성 노트북", "모니터", "마우스"].forEach((elem) => {
  if (elem.indexOf("노트북") >= 0) {
    console.log("elem");
  }
});

let str = "hello, world";
// 1. substring(start_index, end_index): 문자열의 특정부분을 자를때 사용
console.log(str.substring(7)); // 예시) (1,3): 1의 값만 포함 뒤에 단어는 제외 / (0,5): 단어만 가져옴 / (7) : 단어전체 가져오기
// 2. indexOf(찾을문자열) => 인덱스 반환 (문자를 끊어서 가져옴)
console.log(str.substring(0, str.indexOf(",")));
// 3. trim() => 공백제거.
console.log(" Hello, World   ".trim());
// 4. replace(a, b) => a문자열 => b문자열 변경 (소문자 => 대문자 변경)
console.log("hello, world".replace("world", "WORLD"));
// 5. split(구분자) => 배열
let strAry = "apple, banana, cherry".split(",");
console.log(strAry);
// 6. charAt(index) => 문자열 반환. (단어는 0,1,2...부터 시작)
console.log("welcome home".charAt(2));

// '980503-1453212', '030505-4567123', '9910122345123'
function checkGender(jumin) {
  // console에 출력(남자, 여자 입니다).
  let pos = 7;
  if (jumin.length == 13) {
    // 문자열 크기로 조건.
    pos = 6;
  }
  switch (jumin.charAt(pos)) {
    case "1":
    case "3":
      console.log("남자입니다");
      break;
    case "2":
    case "4":
      console.log("여자입니다");
      break;
    default:
      console.log("잘못된 값입니다");
  }
}
checkGender("9910122345123");
