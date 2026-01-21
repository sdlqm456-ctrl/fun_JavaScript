// promise 객체

// promise: 함수를 매개값으로 받는 객체
// 요청중 상태: 1. pending 2. fulfilled 3. rejected 상태
// resolve: 프로미스를 성공 상태로 만들고 결과를 전달
const promise = new Promise(function (resolve, reject) {
  console.log("Promise 생성");
  reject("OK"); // 프로미스 객체에서 비동기 작업의 실패를 알리고 오류 전달
});

// 비동기처리 (프로미스 결과처리)
promise
  // 비동기 작업이 성공하면 실행
  .then(function (data) {
    console.log(data);
  })
  // 비동기 작업이 실패하면 실행
  .catch(function (err) {
    console.error(err);
  });

// 2배 => +3 => -1 => 출력
let count = 1; // 시작값 (전역 변수)

// setTimeout: 일정시간이 지난 뒤 코드를 실행 (예약함수)
const p1 = new Promise(function (resolve, reject) {
  setTimeout(() => {
    count = count * 2; // 1초 기다렸다가 count = 1 * 2 = 2 실행
    resolve(count); // 성공상태 + 갑: 2 전달
  }, 1000); // 실행함수 / 인터벌
});

p1.then((data) => {
  // data: 위에서 resolve한 2
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      count = data;
      count = count + 3; // data (2) + 3 = 5
      resolve(count); // count: 5
    }, 1000); // 실행함수 / 인터벌
  });
}).then((data) => {
  // data: 5
  setTimeout(() => {
    count = data;
    console.log(`count는 ${count}`);
  }, 10); // 1)실행함수 2)인터벌
});
