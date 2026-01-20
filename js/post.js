// post.js

// 1. fetch를 활동해서 글 목록 출력하기
const fields = ["id", "title", "author"]; // 출력할 데이터의 항목 이름 (테이블 컬럼기준)
const target = document.querySelector("#postList"); // fetch에서 받은 결과를 이 구문에 추가

// 2. 정보 가져오기
fetch("http://localhost:3000/posts") // 브라우저가 서버에게 데이터를 달라고 요청 (비동기처리)
  .then((resp) => resp.json()) // resp: 서버가 준 응답 / json 문자열 => 객체 (배열)로 변환
  .then((data) => {
    // data: 가져온 데이터
    console.log(data);
    // <tr> 생성
    data.forEach((elem) => {
      // forEach: 값이 여러개일때 하나로 묶음
      // makeTr: 가져온 데이터를 화면에 출력할수 있도록 HTML요소 <tr>로 변경
      target.appendChild(makeTr(elem));
    });
  })
  .catch((err) => console.log(err)); // fetch 실행시 에러의 위치를 확인하기 위해 사용

// 등록이벤트
document
  .querySelector('form[name = "addForm"]') // name="addForm" 인 <form> 찾기
  .addEventListener("submit", (e) => {
    // 등록버튼을 눌렀을때 submit실행 (폼 전송을 감지하기 위해)
    e.preventDefault();
    // title, author 입력값 가져오기 (폼에 사용자가 입력한 값)
    const title = document.querySelector("#title").value;
    const author = document.querySelector("#author").value;

    // fetch Post 요청처리
    fetch("http://localhost:3000/posts", {
      method: "post",
      headers: { "Content-Type": "application/json" }, // 서버에게 json 형식이라고 말하는것
      body: JSON.stringify({ title: title, author: author }), // JSON.stringify: 문자열(json)로 변경해야 서버로 보낼수 있음
    })
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data);
      })
      .catch((err) => console.log(err));
  });

// 저장버튼 이벤트 (저장버튼을 누르면 화면이 닫히는 이벤트 생성)
// 저장버튼을 눌러 수정을 하면 내용이 업데이트 되게 만들기
function closeModal() {
  document.querySelector(".modal-overlay").style.display = "none";
  // 수정할 데이터 가져오기
  const id = document.querySelector("#modalNo").textContent;
  const title = document.querySelector("#modalTitle").value;
  const author = document.querySelector("#modalAuthor").value;
  // id가 ${id}인 게시글을 title, author 값으로 수정
  fetch(`http://localhost:3000/posts/${id}`, {
    method: "put",
    headers: { "content-Type": "application/json" },
    body: JSON.stringify({ title, author }),
  })
    .then((resp) => resp.json())
    .then((data) => {
      // 수정결과 처리
      document.querySelector(".modal-overlay").style.display = "none";
    })
    .catch((err) => console.log(err));
}

// 3. <tr> 테그생성
function makeTr(post) {
  let trTag = document.createElement("tr");
  // 행을 더블틀릭하면 modal창이 열림
  trTag.addEventListener("dblclick", (e) => {
    document.querySelector(".modal-overlay").style.display = "block";
    // modla에 기존 값 채워넣기 (기존 값을 채워넣어야 수정이 가능함)
    document.querySelector("#modalNo").textContent = post.id;
    document.querySelector("#modalTitle").value = post.title;
    document.querySelector("#modalAuthor").value = post.author;
  });
  // tr테그 만들기
  for (let field of fields) {
    const tdTag = document.createElement("td");
    tdTag.innerText = post[field];
    // tr에 자식요소 추가
    trTag.appendChild(tdTag);
  }
  // 삭제버튼 만들기 (동적으로 만드는 과정)
  const tdTag = document.createElement("td");
  const btn1 = document.createElement("button");
  btn1.innerText = "삭제";
  btn1.className = "btn btn-danger";
  btn1.setAttribute("data-no", post.id); // 버튼에 글 번호를 숨겨서 저장
  btn1.addEventListener("click", function (e) {
    // btn의 data-no속성의 값 가져오기
    const no = this.dataset.no; // data-no 값 가져오기
    // delete (내용삭제요청)
    fetch("http://192.168.0.26:3000/posts/" + no, {
      // no번 게시글 삭제
      method: "delete",
    })
      .then((resp) => resp.json())
      .then((data) => {
        // 화면에서도 해당 행 삭제하기
        tr.remove();
      })
      .catch((err) => console.log(err));
    // fetch(삭제는 delete요청) 호출 end.
  }); // end of btn.addEventListener.
  // 버튼을 <td> 안에 넣기
  tdTag.appendChild(btn1); // <button>삭제</button>
  trTag.appendChild(tdTag); // <td>
  return trTag; // 완성된 <tr>을 바깥으로 돌려줌 (tr태그가 반환되서 화면에 아무것도 붙이지 못해서 사용)
}

