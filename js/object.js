// object.js

// 객체 (object)
// 자동차 / 제네시스 gv80 123바 4567
// 학생(정의) / 1학년 1반 3번 학생 (실체)
// 학생의 속성: 학생의 번호, 이름, 반, 생년월일, 키, 몸무게 ...등

// class 객체명 { }: 객체를 정의하는 선언문
// constructor: 생성하다 (어떤 객체의 실체를 생성)
// 여기서 this는 생성된 인스턴스를 말함 => this.생성된 객체명;
class Student {
  constructor(sno, sname, birth) {
    this.sno = sno;
    this.sname = sname;
    this.birth = birth;
  }
  // 생성자
  showInfo() {
    console.log(`학번은 ${this.sno}, 이름은 ${this.sname}`);
  }
  showBirth() {
    console.log(`${this.sname}의 생일은 ${this.birth}`);
  }
}
// 인스턴스 생성하기
const hong = new Student("11-1", "홍길동", "2006-03-04"); //=> 인스턴스 생성
const hwang = new Student("11-3", "황길동", "2006-05-04"); //=> 인스턴스 생성

// 새로운 객체 생성
const park = {
  sno: "11-2",
  sname: "박진만",
  birth: "2006-07-09",
  showInfo: function () {
    console.log(`학번은 ${this.sno}, 이름은 ${this.sname}`);
  },
};

// class에 추가기능
// prototype: 객체들이 속성 메서드와 공유하고 상속받기 위한 원형객체
// 특징) 상속 메커니즘: 클래스 상속 대신 객체들이 서로를 참고하여 속성과 메소드를 공유하는 방식
Student.prototype.allInfo = function () {
  console.log(`학번은 ${this.sno}, 이름은 ${this.sname}, 생일은 ${this.birth}`);
};

// class => 객체
hong.showInfo();
hong.fullInfo = function () {
  console.log(`학번은 ${this.sno}, 이름은 ${this.sname}, 생일은 ${this.birth}`);
};
hong.allInfo();
// park.showInfo();

hwang.showInfo();
hwang.allInfo();

// prototype
const now = new Date();
console.log(now.toLocaleDateString());

// 날짜 출력하기
Date.prototype.toLocalFormat = function () {
  // 2026-04-02 13:22:34 포맷
  const yyyy = this.getFullYear();
  const mm = this.getMonth() + 1;
  const dd = this.getDate();
  const hh = this.getHours();
  const mi = this.getMinutes();
  const ss = this.getSeconds();

  return `${yyyy}-${("0" + mm).slice(-2)}-${dd}- ${hh}- ${mi}-${ss}`;
};
console.log(now.toLocalFormat());
