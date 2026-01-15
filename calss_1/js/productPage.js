// productPage.js
console.log(products);

// category 중복제거
let categories = [];
for (let i = 0; i < products.length; i++) {
  // 카테고리가 없을때 추가
  if (categories.indexOf(products[i].category) == -1) {
    categories.push(products[i].category);
  }
}
// 화면에 카테고리 추가
const selectCategories = document.querySelector("select.categories");
categories.forEach((elem) => {
  // <option value='전자기기'>전자기기</option>
  let opt = document.createElement("option");
  opt.innerText = elem;
  opt.setAttribute("value", elem); // <option value ='전자기기'>를넣기
  selectCategories.appendChild(opt); // <select>하위요소등록.
});
// 목록출력.
const target = document.querySelector("#list"); // tbody의 dom정보.
showProductList(products); // 간편하게 할려면 이 명령어를 사용 (전체 내용을 다 보여달라는 명령어)
//------------------------------------이벤트------------------------------------
selectCategories.addEventListener("change", (e) => {
  const selectValue = e.target.value;
  // 같은 카테고리의 상품만 배열에 저장
  const filterProducts = products.filter(
    (elem) => elem.category == selectValue
  );
  // 함수를 호출
  showProductList(filterProducts);
});

// 조회버튼을 클릭했을 때 실행
// filter 메소드를 활용해서 목록만들기 [showProductList함수를 활용해서 출력]
let str = "selectCategories";

//------------------------------------함수들-------------------------------------
function showProductList(productAry = []) {
  // 기존목록을 비우기
  target.innerHTML = "";
  productAry.forEach((elem) => {
    // 매개값으로 들어오는 부분만 변환
    // elem.productCode, elem.productName.........
    // elem['productCode']
    let tr = document.createElement("tr");
    ["productCode", "productName", "purchasePrice", "category"] //
      .forEach((field) => {
        let td = document.createElement("td");
        td.innerText = elem[field]; //상품코드,상품명,가격,카테고리.
        tr.appendChild(td); // tr자식요소등록.
      });
    target.appendChild(tr); // tbody의 자식요소등록.
  });
}
