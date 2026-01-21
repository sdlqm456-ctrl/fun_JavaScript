// resolve, reject

let orderMenu = "로제 떡볶이";

const p1 = new Promise((resolve, reject) => {
  if (orderMenu == "라면") {
    // 주문 메뉴가 라면이면 성공 / 아니면 실패
    resolve("주문 완료");
  } else {
    reject("주문 취소");
  }
});

p1.then((data) => {
  console.log(data);
}).catch((err) => {
  console.log(err);
});

const f1 = fetch("js/data.json"); // fetch는 프로미스를 리턴

fetch("js/data.json") // 서버 요청 (프로미스 반환)
  .then((data) => data.json()) // data(Response 객체) => 자바스크립트 객체로 변환
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });
