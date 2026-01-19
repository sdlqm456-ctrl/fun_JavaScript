// function 3 (이전 function2의 내용을 참고하여 만들었음)

let page = 1; // 현재페이지
let totalCnt = memberAry.length;
const pageSize = 5; // 페이지당 목록
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

// insertAdjacementHTML을 사용하여 재구성
// 표(tr) 형태의 html로 만들어 화면에 출력하는 명령어
// showPageList2 : 페이지별 목록을 보여주는 함수
// page = 1: 함수 호출시 페이지 번호를 주지 않으면 자동으로 1페이지
function showPageList2(page = 1) {
  // 배열에서 잘라낼 범위
  let start = (page - 1) * pageSize; // 20
  let end = page * pageSize; // 30
  // 전체 목록에서 현제 페이지 데이터 추춯
  // slice: 일부분
  let pageAry = memberAry.slice(start, end);
  // 배열 => <tr>형태 문자열 변경
  const listStr = `${pageAry
    .map(
      (elem) => `<tr>
                   <td>${elem.id}</td>
                   <td>${elem.first_name}</td>
                   <td>${elem.last_name}</td>
                   <td>${elem.salary}</td>
                   <td><button onclick="deleteRow(${elem.id})" class="btn btn-danger">삭제</button></td>
                 </tr>`
    )
    .join("")}`; // 배열을 하나의 문자열로 합하기
  // 목록 출력하기.
  target.innerHTML = listStr; // 현재 페이지에 해당하는 데이터만 테이블에 표시
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
  endPage = Math.ceil(page / 10) * 10; // 현재 페이지가 속한 페이지 묶음의 끝 번호
  startPage = endPage - 9;
  // 실제 마지막 페이지보다 작음: endPage가 realEnd 보다 크면 realEnd 까지만 보여주기
  endPage = endPage > realEnd ? realEnd : endPage;
  // 이전, 이후 페이지 계산
  prev = startPage == 1 ? false : true;
  next = endPage < realEnd ? true : false;

  // 1 ~ 10 반복하면서 <li class="page-item"><a class="page-link" href="#">1</a></li> 만들기

  // 1. previous 생성
  // setAttribute: 객체에 속성을 설정하거나 기존 속성값을 변경
  const prevStr = `<li class="page-item ${prev ? "" : "disabled"}">
                     <a class="page-link" href="${
                       prev ? "#" : ""
                       // Previous 클릭 시 이전페이지 묶음의 마지막페이지로 이동
                     }" data-page="${startPage - 1}">Previous</a>
                   </li>`;
  ulPagination.insertAdjacentHTML("beforeend", prevStr); // <ul> 테그 끝에 추가

  // 2. 페이지 수만큼 출력
  // for문 부분: 페이지 번호버튼생성: 현재페이지 묶음에 해당하는 번호만 반복
  for (let p = startPage; p <= endPage; p++) {
    const pageStr = `<li class="page-item ${p == page ? "active" : ""}" 
                         aria-current=${p == page ? "page" : ""}
                     >
                       <a class="page-link" href="#" data-page="${p}">${p}</a>
                     </li>`;
    ulPagination.insertAdjacentHTML("beforeend", pageStr);
  }
  // 3. Next 부분 생성 (disabled: 비활성화)
  const nextStr = `<li class="page-item ${next ? "" : "disabled"}">
                     <a class="page-link" data-page="${endPage + 1}"
                        href="${next ? "#" : ""}"
                     >Next</a>
                   </li>`;
  ulPagination.insertAdjacentHTML("beforeend", nextStr);
} // end of generatePaginList
generatePaginList();

// 삭제기능
// deleteRow(id): id 기준 행 삭제
function deleteRow(id) {
  console.log(id);
  totalList = totalList.filter((elem) => elem.id != id); // totalList 중에서 id가 삭제하려는 id와 다른 것들만 새 배열로 만든다
  generatePaginList(page);
  showPageList(page); // 현재 페이지 기준 삭제된 데이터 재외하고 다시 그리기
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
