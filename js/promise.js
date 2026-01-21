// promise 객체

// promise: 함수를 매개값으로 받는 객체
// 요청중 상태: 1. pending 2. fulfilled 3. rejected 상태
const Promise = new Promise(function (resolve, reject) {
  console.log("promise 생성");
  reject("OK");
});

Promise.then(function (data) {
  console.log(data);
}).catch(function (err) {
  console.error(err);
});
