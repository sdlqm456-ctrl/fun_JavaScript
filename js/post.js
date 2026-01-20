// post.js
// 1. fetch를 활용해서 글 목록 출력하기
const fields = ["id", "title", "author"];
const target = document.querySelector("#postList");

// 2. 정보 가져오기
fetch("http://localhost:3000/posts")
  .then((resp) => resp.json())
  .then((data) => {
    console.log(data);
    // tr 생성
    data.forEach((elem) => {
      target.appendChild(makeTr(elem));
    });
  })
  .catch((err) => console.log(err));

// 등록이벤트
document
  .querySelector('form[name="addForm"]')
  .addEventListener("submit", (e) => {
    e.preventDefault();
    // title, author => 입력값 가져오기
    const title = document.querySelector("#title").value;
    const author = document.querySelector("#author").value;

    // fetch Post 요청처리
    fetch("http://localhost:3000/posts", {
      method: "post",
      Headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title: title, author: author }),
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
  const id = document.querySelector("#modalNo").textContent;
  const title = document.querySelector("#modalTitle").value;
  const author = document.querySelector("#modalAuthor").value;

  fetch(`http://localhost:3000/posts/${id}`, {
    method: "put",
    headers: { "content-Type": "application/json" },
    body: JSON.stringify({ title, author }),
  })
    .then((resp) => resp.json())
    .then((data) => {
      document.querySelector(".modal-overlay").style.display = "none";
    })
    .catch((err) => console.log(err));
}

// 3. 테그생성
function makeTr(post) {
  let trTag = document.createElement("tr");
  trTag.addEventListener("dblclick", (e) => {
    document.querySelector(".modal-overlay").style.display = "block";
    // 글번호
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
  const tdTag = document.createElement("td");
  const btn1 = document.createElement("button");
  btn1.innerText = "삭제";
  btn1.className = "btn btn-danger";
  btn1.setAttribute("data-no", post.id);
  btn1.addEventListener("click", function (e) {
    // btn의 data-no속성의 값 가져오기
    const no = this.dataset.no; // data-no의 속성값
    // fetch(삭제는 delete요청) 호출 start.
    fetch("http://192.168.0.26:3000/posts/" + no, {
      method: "delete",
    })
      .then((resp) => resp.json())
      .then((data) => {
        // 화면삭제를 해야하지만 화면이 refresh되면서 목록을 새로 가져옴.
        tr.remove();
      })
      .catch((err) => console.log(err));
    // fetch(삭제는 delete요청) 호출 end.
  }); // end of btn.addEventListener.
  tdTag.appendChild(btn1);
  trTag.appendChild(tdTag);
  return trTag;
}
