// array2.js

// 1. Array.find: 배열의 첫번째 값을 반환, 없으면 undefined 반환
// find: 여러개를 찾는 용도가 아니라 결과값도 한개 (둘다 출력하고 싶으면 filter 사용)
// 배열 중 3보다 큰 값을 반환하기
const array1 = [1, 2, 3, 4, 5];
const found = array1.find((e) => e > 3);
console.log(found); // 출력값: 4 (4,5 중 첫번째 값이기 때문)

// 2. Array.findindex(): 조건과 일치하는 첫번째 값의 인덱스 반환
// 조건 만족시 즉시 종료, 못찾으면 - 1
const greetings = ["Hello", "hi", "byebye", "goodbye", "hi"];
const foundIndex = greetings.findIndex((e) => e === "hi");
console.log(foundIndex); // 출력값: 1

// 3. Array.some(): 조건과 일치하는 값이 있는지 확인후 찾으면 종료
const array2 = [1, 2, 3, 4, 5, 6, 1, 2, 3, 1];
const arraySome = array2.some((e) => e > 2);
console.log(arraySome); // 출력값 true

// 3-1 Array.every(): 모든 요소가 주어진 조건과 일치하는지 확인
const arrayEvery = array2.every((e) => e > 2);
console.log(arrayEvery); // 출력값: false

// 각 주어진 조건으로 만들어보기 (data.3.json기준으로 만들기)

// 1. 회의용품 카테고리명 중 첫번째 상품과 가격
fetch("js/data3.json")
  .then((resp) => resp.json())
  .then((data) => {
    console.log("전체 데이터 확인:", data);

    // 1. 회의용품 카테고리 중 첫 번째 상품명과 가격
    const meetingItem = data.find((e) => e.상품카테고리 === "회의용품");
    console.log(
      `회의용품 첫 상품명: ${meetingItem.상품명}, 가격: ${meetingItem.가격}`,
    );
    // // 2. 판매자명이 펜스토어인 상품의 가격이 1000원 이상인지 판별
    const Item = data.some(
      (e) => e.판매자정보.판매자명 === "펜스토어" && e.가격 >= 1000,
    );
    console.log("펜스토어 상품 중 1000원 이상은", Item);
    // // 3. 상품카테고리명이 필기구인 상품들의 평점이 4점을 넘는게 있는지 판별
    const Writing = data.some((e) => e.상품카테고리 === "필기구" && e.평점 > 4);
    console.log("필기구 중 평점 4점이 넘는 상품은 ", Writing);
  })
  .catch((err) => console.log("에러 발생:", err));
