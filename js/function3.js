// function 3 (이전 function2의 내용을 참고하여 만들었음)

let page = 1; // 현재페이지
let totalCnt = memberAry.length;
let realEnd = Math.ceil(totalCnt / pageSize);

//---------------------------------------함수부분------------------------------------

// 함수(member => tr> td: (id), td(fn), td(Ln), td(salary))
function makeTr(member) {
  const fields = ["id", "first_name", "last_name", "salary"];
  const trTag = document.createElement("tr");
  // <td>테그 4번 생성
  for (let field of fields) {
    const tdTag = document.createElement("td");
    tdTag.innerText = member[field];
    // 부모 <tr>에 자식요소 추가
    trTag.appendChild(tdTag);
  }
  // tr 반환
  return trTag;
}

// 맴버 수 만큼 <tr>생성
// 많은 양의 데이터를 페이지로 나누기
const target = document.querySelector("#target");

const pageSize = 5; // 페이지당 목록

// 페이지 별 목록 보여주기
// 값에 따라 보여주는 정보 반환
function showPageList(pg = 1) {
  // 기존목록 지우기
  target.innerHTML = "";
  let page = pg; // 페이지 정보
  let start = (page - 1) * pageSize; // 페이지 시작: 0
  let end = page * pageSize; // 페이지 끝: 10
  let pageAry = memberAry.slice(start, end); // 페이지 시작 ~ 끝부분까지 자르기

  // 배열의 건수만큼 화면에 출력
  for (let elem of pageAry) {
    const newTr = makeTr(elem);
    target.appendChild(newTr);
  }
} // end of showPageList

// // insertAdjacementHTML을 사용하여 재구성
// tr 형태의 html로 만들어 화면에 출력
function showPageList2(page = 1) {
  let start = (page - 1) * pageSize; // 20
  let end = page * pageSize; // 30
  let pageAry = totalList.slice(start, end);

  const listStr = `${pageAry
    .map(
      (elem) => `<tr>
                   <td>${elem.id}</td>
                   <td>${elem.first_name}</td>
                   <td>${elem.last_name}</td>
                   <td>${elem.salary}</td>
                   <td><button onclick="deleteRow(${elem.id})" class="btn btn-danger">삭제</button></td>
                 </tr>`,
    )
    .join("")}`;
  // 목록 출력하기.
  target.innerHTML = listStr;
}
showPageList2();

// 페이징 목록 생성
function generatePaginList() {
  let ulPagination = document.querySelector("ul.pagination");
  ulPagination.innerHTML = "";

  let realEnd = Math.ceil(totalCnt / pageSize); // 마지막페이지
  let startPage = 1, // 시작 페이지
    endPage = 10; // 마지막 페이지
  let prev = false, // 이전 페이지
    next = false; // 이후 페이지

  // 현재 페이지 기준으로 계산
  endPage = Math.ceil(page / 10) * 10;
  startPage = endPage - 9;
  // 실제 마지막 페이지보다 작음
  endPage = endPage > realEnd ? realEnd : endPage;
  // 이전, 이후 페이지 계산
  prev = startPage == 1 ? false : true;
  next = endPage < realEnd ? true : false;

  // 1 ~ 10 반복하면서 <li class="page-item"><a class="page-link" href="#">1</a></li> 만들기

  // 1. previous 생성
  // setAttribute: 객체에 속성을 설정하거나 기존 속성값을 변경
  const prevStr = `b<li class="page-item ${prev ? "" : "disabled"}">
                     <a class="page-link" href="${
                       prev ? "#" : ""
                     }" data-page="${startPage - 1}">Previous</a>
                   </li>`;
  ulPagination.insertAdjacentHTML("beforeend", prevStr);

  // 2. 페이지 수만큼 출력
  for (let p = startPage; p <= endPage; p++) {
    const pageStr = `<li class="page-item ${p == page ? "active" : ""}"
                         aria-current=${p == page ? "page" : ""}
                     >
                       <a class="page-link" href="#" data-page="${p}">${p}</a>
                     </li>`;
    ulPagination.insertAdjacentHTML("beforeend", pageStr);
  }
  // 3. Next 부분 생성
  const nextStr = `<li class="page-item ${next ? "" : "disabled"}">
                     <a class="page-link" data-page="${endPage + 1}"
                        href="${next ? "#" : ""}"
                     >Next</a>
                   </li>`;
  ulPagination.insertAdjacentHTML("beforeend", nextStr);
} // end of generatePaginList
generatePaginList();

// 삭제기능
function deleteRow(id) {
  console.log(id);
  totalList = totalList.filter((elem) => elem.id != id);
  generatePaginList(page);
  showPageList(page);
}
// ----------------이벤트 목록---------------------------------------------

document.querySelector("ul.pagination").addEventListener("click", (e) => {
  // 클릭되는 대상 파악
  let selectPage = 1;
  if (e.target.tagName == "A") {
    selectPage = e.target.dataset.page; // <a data-page = "1">1<a> 데이터 속성을 가진 내용을 관리해주는 명렁어
    // 페이징 목록
    page = selectPage;
    generatePaginList();
    showPageList(selectPage);
  }
});

