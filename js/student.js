// student.js
// -----------페이지 로딩시 자동으로 실행되는 함수------------------------
let student = [
  { studNo: "25-001", studName: "홍길동", score: 90 },
  { studNo: "25-002", studName: "김길동", score: 80 },
  { studNo: "25-003", studName: "박길동", score: 75 },
];
// 기존의 tbody의 hmtl 삭제
const target = document.querySelector("div.list tbody");
target.innerHTML = "";

makeList();

// ------------------------이벤트---------------------------------------
// 등록 버튼
document
  .querySelector('button[class $= "info"]')
  .addEventListener("click", (e) => {
    console.log(e);
    const studNo = document.querySelector("#studNo").value;
    const studName = document.querySelector("#studName").value;
    const score = document.querySelector("#score").value;
    // 항목입력 x -> 입력하세요
    if (!studNo || !studName || !score) {
      alert("입력하세요.");
      return;
    }
    // // 중복 값 체크
    // for (let student of students) {
    //   if (student.studNo == studNo) {
    //     alert("동일한 학생 번호가 존재합니다");
    //     return;
    //   }
    // }
    let exists = students.some((elem) => elem.studNo == studNo);
    if (exists) {
      alert("동일한 학생번호가 존재합니다");
      return;
    }
    student.push({ studNo, studName, score });
    makeList();
  });
// target.appendChild(makeTr({ studNo: sno, studName: name, score: score })); // 속성과 변수가 같으면 줄여서 사용가능 makeTr({ studNo,studname,score });
// ------------------------함수들---------------------------------------
function makeList() {
  // 학생수만큼 생성
  target.innerHTML = ""; // 기존목록 지우기
  for (let i = 0; i < student.length; i++) {
    let tr = makeTr(student[i]);
    //div.list tbody의 하위요소에 추가
    target.appendChild(tr);
  }
} // end of makeList

// 학생정보 -> tr 생성해주는 함수
function makeTr(student = {}) {
  // tr을 생성
  let tr = document.createElement("tr");
  for (let prop in student) {
    // prop in 반복하는 명령어 => 객체를 선언
    //td을 생성
    let td = document.createElement("td");
    td.innerText = student[prop];
    tr.appendChild(td);
  }
  // <td><button type = "button", class="btn btn-dark">삭제</button></td> 만들려고 하는 내용
  let td = document.createElement("td"); // <td></td> 를 만드는 과정
  let dleBtn = document.createElement("button"); // <button>삭제</button>
  // 삭제버튼의 이벤트
  dleBtn.addEventListener("click", deleteRowFnc);
  dleBtn.innerText = "삭제";
  dleBtn.className = "btn btn-dark"; //button의 class 테그 "btn btn-dark" 입력
  dleBtn.setAttridute("date-sno", student.studNo);
  td.appendChild(dleBtn); //<td>의 자식 button으로 지정해주는 방법
  tr.appendChild(td); // tr은 부모 td는 자식으로 생성

  // 반환
  return tr;
} // end of makeTr ( makeTr의 끝)

// 삭제버튼  이벤트 핸들러 (화면에서 삭제하는 방법 => 실제 내용만 화면에서 안보이게 하는 방법)
function deleteRowFnc(e) {
  let dleNo = this.dateset.son; // 삭제할 학생의 번호
  student.filter((elem) => elem, studNo != dleNo); // 조건을 만족하는 배열을 생성
  makeList();
}
