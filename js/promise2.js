// promise2.js
// resolve: 성공, reject: 실패
// promise => 비동기 처리 방식을 동기처리로 처리되게 만들어주는 과정
function orderMenu(meun) {
  return new Promise((resolve, reject) => {
    console.log(`${meun}을 주문 받았습니다`);

    setTimeout(() => {
      if (meun == "라면") {
        resolve("라면 조리완료 했습니다");
      } else {
        reject("품절 입니다");
      }
    }, 1500);
  });
}

function delivery() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("전달완료");
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

// asyns, await (비동기 처리방식 => 동기처리 방식으로 처리)
async function orderFood() {
  await orderMenu("라면");
  let result = await delivery();
  console.log(result);
}
orderFood();
