// 함수

// 함수: function 명령어(매개값 = [])

// 함수정의 (sumArray)
function sumArray(ary = []) {
  // 배열 요소의 합을 반환
  let sum = 0;
  for (let num of ary) {
    sum += num;
  }
  return sum; // 반환
}
let result = sumArray([1, 2, 3, 4, 5]);
console.log(`결과값은 ${result}`);

// 정의: 함수표현식
const gatMax = function (ary = []) {
  // 배열요소에서 가장 큰값(max값)을 반환
  let max = 0;
  for (let elem of ary) {
    if (max < elem) {
      max = elem; // max 값보다 elem가 크면 max에 할당
    }
  }
  return max;
};
result = gatMax([45, 12, 33, 20, 5]);
console.log(`결과값은 ${result}`);

// 정의: 화살표함수
// 간략하게 표현: const getMin = (n1, n2) => (n1 > n2 ? n2 : n1);
const getMin = (n1, n2) => {
  // 3항 연산식: 두개의 조건을 ?로 비교를 해서 결과를 출력
  return n1 > n2 ? n2 : n1;
  // 배열요소에서 가장작은값 (Min값)을 반환
  if (n1 > n2) {
    return n2;
  } else {
    return n1;
  }
};
result = getMin(23, 17);
console.log(`결과값은 ${result}`);

// 책 P.39 ~ 40 내용
// increase: 증가하다, 더하기 개념
function greet(name) {
  console.log("Hello " + name);
}
greet("Alberto"); // 출력값은 Hello Alberto

let myInt = 1;
function increase(Value) {
  return (Value += 1);
}
// console.log(myInt); // 출력값은 1
console.log(increase(myInt)); // 출력값은 2

// 함수, 배열, 객체 => 평균나이를 구하는 함수
// 객체배열을 매개값으로 받아서 평균나이를 반환
function getAverageAge(person = []) {
  if (!Array.isArray(person)) {
    return 0;
  }
  let sum = 0;
  for (let elem of person) {
    sum += elem["age"];
  }
  const avg = sum / person.length; // 평균
  return avg;
}
const manyPeople = [
  { name: "최형우", age: 20 },
  { name: "박진만", age: 33 },
  { name: "최원태", age: 27 },
  { name: "강민호", age: 17 },
];
// 함수호출
result = getAverageAge(manyPeople);
console.log(`연령의 평균값은 ${result}`);

// json 문자열 데이터
const jsonData = `[{
  "id": 1,
  "first_name": "Duky",
  "last_name": "Greave",
  "email": "dgreave0@tamu.edu",
  "gender": "Male",
  "salary": 9065
}, {
  "id": 2,
  "first_name": "Say",
  "last_name": "Sclanders",
  "email": "ssclanders1@nsw.gov.au",
  "gender": "Male",
  "salary": 6170
}, {
  "id": 3,
  "first_name": "Nehemiah",
  "last_name": "Wagon",
  "email": "nwagon2@howstuffworks.com",
  "gender": "Male",
  "salary": 18015
}, {
  "id": 4,
  "first_name": "Ange",
  "last_name": "Gillmore",
  "email": "agillmore3@angelfire.com",
  "gender": "Male",
  "salary": 8871
}, {
  "id": 5,
  "first_name": "Manfred",
  "last_name": "Lade",
  "email": "mlade4@mapy.cz",
  "gender": "Male",
  "salary": 5266
}, {
  "id": 6,
  "first_name": "Jana",
  "last_name": "Krzyzowski",
  "email": "jkrzyzowski5@fda.gov",
  "gender": "Female",
  "salary": 11198
}, {
  "id": 7,
  "first_name": "Simeon",
  "last_name": "McClarence",
  "email": "smcclarence6@live.com",
  "gender": "Male",
  "salary": 16226
}, {
  "id": 8,
  "first_name": "Henryetta",
  "last_name": "Nixon",
  "email": "hnixon7@senate.gov",
  "gender": "Bigender",
  "salary": 15983
}, {
  "id": 9,
  "first_name": "Deny",
  "last_name": "Overill",
  "email": "doverill8@github.io",
  "gender": "Female",
  "salary": 2522
}, {
  "id": 10,
  "first_name": "Julieta",
  "last_name": "Koeppe",
  "email": "jkoeppe9@usa.gov",
  "gender": "Female",
  "salary": 3835
}, {
  "id": 11,
  "first_name": "Emerson",
  "last_name": "Brice",
  "email": "ebricea@1688.com",
  "gender": "Male",
  "salary": 13105
}, {
  "id": 12,
  "first_name": "Korella",
  "last_name": "Daunay",
  "email": "kdaunayb@nature.com",
  "gender": "Female",
  "salary": 14890
}, {
  "id": 13,
  "first_name": "Moreen",
  "last_name": "Haylett",
  "email": "mhaylettc@loc.gov",
  "gender": "Female",
  "salary": 2473
}, {
  "id": 14,
  "first_name": "Pearline",
  "last_name": "Esch",
  "email": "peschd@altervista.org",
  "gender": "Female",
  "salary": 3595
}, {
  "id": 15,
  "first_name": "Willem",
  "last_name": "Wherry",
  "email": "wwherrye@sbwire.com",
  "gender": "Male",
  "salary": 11467
}]`;

// 문자열 => 데이터 객체로 변환
const memberAry = JSON.parse(jsonData);
console.log(memberAry);
let sum = 0;
let avg = 0; // nemderAry 급여 합계
let sumOfMale = 0; // 남성의 평균
let cntOfMale = 0; // 남성이 몇명인지
let agvOfMale = 0; // 남성의 인원
for (let elem of memberAry) {
  sum += elem.salary;
  if (elem.gender == "Male") {
    sumOfMale += elem.salary;
    cntOfMale++;
  }
}
console.log(
  `급여 합계: ${sum}, 전체 평균의 합계: ${
    sum / memberAry.length
  }, 남성의 합계급여: ${sumOfMale}, 남자 평균급여 ${sumOfMale / cntOfMale} `
);
