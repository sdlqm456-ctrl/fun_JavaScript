// array2 .js
fetch("js/data3.json")
  .then((resp) => resp.json())
  .then((data) => {
    console.log(data);
    // 1. 회의용품 카테고리명 중 첫번째 상품과 가격
    const data = data.find((e) => e.상품카테고리 == "회의용품");
    console.log(`회의용품의 첫번째 상품명은 ${find.상품번호}, `);
  })
  .catch((err) => console.log(err));

// // 2. 판매자명이 펜스토어인 상품의 가격이 1000원 이상인지 판별

// // 3. 상품카테고리명이 필기구인 상품들의 평점이 4점을 넘는게 있는지 판별
