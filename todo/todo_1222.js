// 객체 (odject) => 클레스, 실체 등
// 예시) 붕어빵 틀 (클래스: 규칙을 만듬) -> 실체 -> 붕어빵 (실체를 만드는것: 인스턴스)
class Pepole {
  // 속성 (속성자)
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  // 기능 (메소드)
  showInfo() {
    // => 객체
    console.log(`이름은 ${this.name}, 나이는 ${this.age}`);
  }
}
const person1 = new Pepole("홍길동", 20); // 인스턴트 생성

// 인스턴트 생성
const obj = {
  name: "hong",
  age: 20,
};
// 내장객체, DOM => 문서객체모델: Document Object Model  (Browser Object Model, 사용자 정의 객체)

// - class: 규칙을 만드는것, 틀에 해당하는 부분 => class 뒤에오는 건 객체에 해당, 대문자로 선언
// - property (프러프티) => 속성 = method 같은 표현
// - constructor: 속성
// 예시) const person1 (하나의 객체 생성)
// - new 객체명 (class 생성)
