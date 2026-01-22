// promise2. js

// promise: 비동기 처리 방식 => 동기처리방식
// resolve: 성공 / reject: 실패
function orderMenu(meun) {
  return new Promise((resolve, reject) => {
    console.log(`${meun}을 주문 받았습니다`);
    // setTimeout: 특정시간이 지난 다음 코드를 실행 (타이머 설정)
    setTimeout(() => {
      if (meun == "라면") {
        resolve("라면 조리 완료");
      } else {
        reject("품절 입니다");
      }
    }, 1500);
  });
}
function delivery() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("배달 완료");
    }, 2000);
  });
}
// orderMenu("라면") // 반환해주는 값이 promise 객체
//   .then((data) => {
//     console.log(data); // 로그출력
//     return delivery();
//   })
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.error(err); // 에러출력
//   });

// async, await: 비동기 처리 방식 => 동기처리방식
async function orderFood() {
  // async: 함수 앞에 붙이는 키워드 (비동기,Promise를 반환)
  await orderMenu("라면"); // await: 프라미스가 처리될 때 까지 함수실행을 기다림
  let result = await delivery();
  console.log(result);
}
orderFood();
