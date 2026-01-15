// 변수선언

// ES6(2025) 이전
// var: 변수 => 중복선언 ok (window 객체에 속성됨)
var name = "Hong";
var name = "Hwang";

// ES6 이후
// let: 변수 => 중복선언 X (재할당 가능)
// let name = "Hong";
let age = 10;
age = 20;

// const: 상수변수 => 재할당 불가 (값이 한번 정해지면 변경 X)
// myAge = 31;
const myAge = 30;

// 대소문자 구분 O  => 같은 변수 라도 대문자를 사용하지 않아 다른값으로 인식
// 변수의 두번째 세번째 글자에는 대문자를 사용해야 구분하기 좋음
// createElement: 새로운 테그를 만들때 사용 (동적으로 추가) / !=: 비교연산자 (true / false)
// createElement () != createElement
let my_age = 10;

// window 객체 (브라우저) 출력구문
// console.log(window);

// createElement: 객체를 반환하는 명령어
let liTag = document.createElement("li"); // <li></li> 테그 만들기
liTag = {};

// 자바
// int myAge = 10;

// 자료형 (Date Type) => 원시자료형 (값이 단순)
let loginID = 10; // 타입명: number
loginID = "user01"; // 타입명: string
loginID = true; // 타입명: boolean
loginID = null; // 타입명: odject

let loginPw; // 타입명: undifined (값이 없음)
// loginPw = new Symbol(); => 똑같은 값을 다르게 처리
console.log(typeof loginID);

// 객체선언 => 복합자료형 (값이 다양)
// const 객체 = {} => 빈객체 생성
// const myinfo = new Object(); 객체선언방식
const myInfo = {
  name: "Hong",
  phone: "010-1234-4678",
  showInfo: function () {
    console.log(`이름은 ${this.name}, 연락처는 ${this.phone}`);
  },
};

// 객체 리터럴

// 객체의 속성
// 비교 document.createElement()
console.log(myInfo.name);
console.log(myInfo["phone"]);
myInfo.showInfo(); // myInfo.showInfo() => 메소드 (입력한 값의 정보를 가짐)

// 속성값 변경
myInfo["name"] = "Hwang";
myInfo.phone = "010-2222-3333";
myInfo.showInfo();

// 객체 복사

// 원시유형
let hisAge = 20;
let yourAge = myAge; // 실제값 저장
hisAge = 21;
yourAge = 21;
console.log(yourAge);

// 객체
let hisInfo = hisInfo; // 객체의 주소값 참고

// hisInfo 값 변경
// hisInfo.name = "Choi";
// hisInfo.age = 30;
// console.log(yourInfo == hisInfo); yourInfo 와 hisInfo의 값이 동일하기 때문에 true로 출력됨

// 새로운 객체 할당
// 새로운 객체를 할당하게 되어서 다른 객체로 인식하기 때문에 새로운 객체의 주소값을 참조하고 있어 false로 출력하게 됨
// console.log(yourInfo == hisInfo);
hisInfo = {
  name: "park",
  age: 20,
};

// 값을 복사하는 명령어
// assign({}, 객체명): 새로운 객체를 만들어서 복사하기 => 내용을 바꿔도 서로다른 객체로 인식해서 원래 저장했던 값으로 콘솔 출력
yourInfo = Object.assign({}, hisInfo);
hisInfo.name = "choi";
hisInfo.age = 30;
// yourInfo = hisInfo;
console.log(yourInfo); // 타입명: false

// for .. in: 객체의 속성을 가져옴
console.log("객체의 속성/ 값.....");
for (let prop in hisInfo) {
  console.log(prop, hisInfo[prop]);
}

// 배열
const fruitBasket = ["Apple", "Banana", "Melon"];
console.log(fruitBasket[0]); // N번째 위치의 값을 가져온다
fruitBasket[0] = "사과"; // 배열에 값 이름 변경
fruitBasket[3] = "cherry"; // 배열에 값을 추가하기

// 메소드
fruitBasket.push("Grape"); // 배열명.push() 배열에 마지막에 추가
fruitBasket.unshift("Corn"); // 배열의 시작부분에 추가
fruitBasket.pop(); // 배열의 마지막 값을 제거
fruitBasket.shift(); // 배열의 시작에서 첫번째 값을 제거
console.log(fruitBasket);

// 원래 배열 = [사과, Banana, Melon, Cherry]에 바나나와 멜론사이 Grape 추가하기
fruitBasket.splice(2, 0, "Grape"); // 인덱스, 크기, 대체할 값을 넣기
fruitBasket.splice(3, 1); // index값의 3번째 위치 Melon을 지우기
fruitBasket.splice(0, 2, "Banana", "사과"); // 배열 위치 변경: [배열명].splice([삭제위치], [삭제갯수], [추가할 항목])

// for .. of: 배열의 각각 내용을 하나하나 출력
// elem: for 반복문에서 값을 하나하나 받아오는 명령어
for (let elem of fruitBasket) {
  console.log(elem);
}
