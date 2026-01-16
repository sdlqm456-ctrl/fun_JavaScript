let totalCnt = 167;
let realEnd = Math.ceil(totalCnt / 10);
let page = 1; // 현재 페이지
//------------------------함수들------------------------------------------------------
// 함수(member => tr> td: (id), td(fn), td(Ln), td(salary))
function makeTr(member) {
  const fields = ["id", "first_name", "last_name", "salary"];
  const trTag = document.createElement("tr");
  // td를 4번 생성
  for (let field of fields) {
    const tdTag = document.createElement("td");
    tdTag.innerText = member[field];
    // 부모 tr에 자식요소 추가
    trTag.appendChild(tdTag);
  }
  // tr 반환
  return trTag;
}

// 맴버 수 만큼 tr 생성
// 많은 양의 데이터를 페이지로 나누기
const target = document.querySelector("#target");
const pageSize = 6; // 페이지당 목록

// 페이지 별 목록을 보여주기
// 함수 옆에 들어오는 값에 따라 보여주는 정보를 변환
function showPageList(pg = 1) {
  // 기존목록 지우기
  target.innerHTML = "";
  let page = pg; // 페이지 정보
  let start = (page - 1) * 10; // 페이지 시작: 0
  let end = page * pageSize; // 페이지의 끝: 10
  let pageAry = memberAry.slice(start, end); // 페이지의 시작부터 끝부분까지 잘라온다

  // 배열의 건수만큼 화면에 출력
  for (let elem of pageAry) {
    const newTr = makeTr(elem);
    target.appendChild(newTr);
  }
} // end of showPageList
showPageList();

// 페이징 목록 생성
function generatePagingList() {
  // 기존목록 지우기
  let ulPagination = document.querySelector("ul.pagination");
  ulPagination.innerHTML = "";

  let realEnd = Math.ceil(totalCnt / pageSize); // 건수계산 마지막페이지.
  let startPage = 1, // 시작페이지
    endPage = 10; // 마지막페이지
  let prev = false, // 이전페이지
    next = false; // 이후페이지

  // 현재페이지 기준으로 계산
  endPage = Math.ceil(page / 10) * 10;
  startPage = endPage - 9;
  // 실제마지막 페이지보다 작음
  endPage = endPage > realEnd ? realEnd : endPage;
  // 이전, 이후 페이지 계산
  prev = startPage == 1 ? false : true;
  next = endPage < realEnd ? true : false;

  // 1 ~ 10 반복하면서 <li class="page-item"><a class="page-link" href="#">1</a></li> 만들기

  // 1. prev 생성
  let liTag = document.createElement("li");
  liTag.className = "page-item";
  let ahref = document.createElement("a");
  ahref.className = "page-link";
  ahref.setAttribute("href", "#");
  ahref.innerText = "Previous";
  ahref.setAttribute("data-page", startPage + 1);
  if (prev) {
    // href 속성 추가
    ahref.setAttribute("href", "#");
  } else {
    // class에 disabled 추가
    liTag.classList.add("disabled");
  }
  // 부모 자식관계 추가
  liTag.appendChild(ahref);
  ulPagination.appendChild(liTag);

  // 2. 페이지 수만큼 출력
  for (let p = startPage; p <= endPage; p++) {
    const liTag = document.createElement("li");
    liTag.className = "page-item";
    const ahref = document.createElement("a");
    ahref.className = "page-link";
    ahref.setAttribute("href", "#");
    ahref.innerText = p;
    ahref.setAttribute("data-page", p);
    if (p == page) {
      liTag.classList.add("active"); // li테그에 클레스 추가하기
      liTag.setAttribute("aria-current", "page"); // attribute 지정.
    }
    // 부모 자식관계 만들기
    liTag.appendChild(ahref);
    ulPagination.appendChild(liTag);
  }
  // 3. next 여부 <li class="page-item"><a class="page-link" href="#">Next</a></li> 만들기

  // next
  liTag = document.createElement("li");
  liTag.className = "page-item";
  ahref = document.createElement("a");
  ahref.className = "page-link";
  ahref.setAttribute("href", "#");
  ahref.innerText = "Next";
  ahref.setAttribute("data-page", endPage + 1);
  if (next) {
    ahref.setAttribute("href", "#");
  } else {
    liTag.classList.add("disabled");
  }
  liTag.appendChild(ahref);
  ulPagination.appendChild(liTag);
} // end of generatePagingList().
generatePagingList();

//----------------------------------------이벤트-------------------------------------------------------------
document.querySelector("ul.pagination").addEventListener("click", (e) => {
  // 클릭되는 대상 파악
  let selectPage = 1;
  if (e.target.tagName == "A") {
    selectPage = e.target.detaset.page; // <a data-page = "1">1<a> 데이터 속성을 가진 내용을 관리해주는 명렁어
    // 페이징 목록
    page = selectPage;
    generatePagingList();
    showPageList(selectPage);
  }
});
