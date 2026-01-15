// student.js

// -----------------페이지 로딩시 자동으로 실행되는 함수---------------------
let students = [
  { studNo: "25-001", studName: "홍길동", score: 90 },
  { studNo: "25-002", studName: "김길동", score: 80 },
  { studNo: "25-003", studName: "박길동", score: 70 },
];

// 기존의 tbody의 html 삭제 => 기존데이터와 새 데이터가 누적되어 표시되기 때문
const target = document.querySelector("div.list tbody");
target.innerHTML = "";

makeList();

// ------------------------이벤트---------------------------------------
// 등록버튼.
document
  .querySelector('button[class*="primary"]') // class 속성 값에 포함된 문자열을 찾는것
  .addEventListener("click", (e) => {
    const studNo = document.querySelector("#studNo").value;
    const studName = document.querySelector("#studName").value;
    const score = document.querySelector("#score").value;
    // 항목입력X -> 입력하세요.
    if (!studNo || !studName || !score) {
      // ! : 논리연산자 (값이 있으면 false, 값이없어나 공백 ture, ||: 셋 중 하나라도 공백인 경우 전체가 true)
      alert("내용을 입력하세요");
      return;
    }
    // 중복값체크.
    // for (let student of students) {
    //   if (student.studNo == studNo) {
    //     alert("동일한 학생번호 존재합니다.");
    //     return;
    //   }
    // }
    let exists = students.some((elem) => elem.studNo == studNo); // students 배열에 입력한 학번과 같은값이 하나라도 있으면 true/ 없으면 false
    if (exists) {
      alert("동일한 학생번호 존재합니다.");
      return;
    }
    students.push({ studNo, studName, score });
    makeList();
    // target.appendChild(makeTr({ studNo, studName, score })); // 속성 = 변수 => 줄여서 사용 가능
  });

// ------------------------함수들---------------------------------------
// 배열 => 화면에 출력.
function makeList() {
  target.innerHTML = ""; // 기존목록 지우기.
  // 학생수만큼 생성.
  for (let i = 0; i < students.length; i++) {
    // student 배열에 있는 학생들을 처음부터 끝까지 꺼내서 반복한다는 뜻
    let tr = makeTr(students[i]); // students [i]: 학생 한명의 정보를 받아 tr 생성
    // div.list tbody의 하위요소로 추가.
    target.appendChild(tr);
  }
} // end of makeList.

// 학생정보 -> tr 생성해주는 함수.
function makeTr(student = {}) {
  let fields = ["studNo", "studName", "score"];
  // tr 생성.
  let tr = document.createElement("tr"); // td요소를 만들어서 반환
  for (let prop of fields /*in student*/) {
    // prop in 반복하는 명령어 => 객체를 선언
    // td 생성.
    let td = document.createElement("td");
    td.innerText = student[prop];
    tr.appendChild(td);
  }
  // <td><button>삭제</button></td> => 삭제버튼 만들기
  let td = document.createElement("td"); // <td></td>를 만드는 과정
  let delBtn = document.createElement("button"); // <button>삭제</button>
  // 삭제버튼의 이벤트.
  delBtn.addEventListener("click", deleteRowFnc);
  delBtn.innerText = "삭제";
  delBtn.className = "btn btn-dark"; //  dleBtn.className = "btn btn-dark"; //button의 class 테그 "btn btn-dark" 입력
  delBtn.setAttribute("data-sno", student.studNo); // <button data-sno="25-001">..</button>
  td.appendChild(delBtn); // <td>의 자식을 지정해주는 방법
  tr.appendChild(td); //  tr은 부모 td는 자식으로 생성

  // 반환.
  return tr;
} // end of makeTr. (makeTr의 끝 표시)

// 삭제버튼에 이벤트핸들러: 브라우저 화면에서 삭제 => 내용만 화면에서 안보이게 함
function deleteRowFnc(e) {
  // this.parentElement.parentElement.remove();
  let delNo = this.dataset.sno; // 삭제할 학생번호
  students = students.filter((elem) => elem.studNo != delNo); // 조건을 만족하는 배열 생성.
  makeList();
}
