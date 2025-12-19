//odject.3js
const studentAry = [{
    stdNO: "25-0001",
    stdName: "홍길동",
    phone: "010-1111-3333",
    score: 80
  },
  {
    stdNO: "25-0001",
    stdName: "김명수",
    phone: "010-2222-3333",
    score: 70
  },
  {
    stdNO: "25-0001",
    stdName: "최덕배",
    phone: "010-5555-3333",
    score: 60
  },
  {
    stdNO: "25-0001",
    stdName: "박우수",
    phone: "010-6666-3223",
    score: 95
  },
];
let sum = 0;
let htmlstr = `<table>
        <table border = "2">      
        <tr>
        <th>학생번호</th>
        <th>이름</th>
        <th>연락처</th>
        <th>점수</th>
      </tr>
      </thead>
      <tbody>`
// for (let student of studentAry) {
//   sum += student.score;
//   htmlstr += `<th> ${student.stdName} (${student.score}) </th>`;
// }
for (let student of studentAry) {
  htmlstr += `<tr>
          <td>${student.stdNO}</td>
          <td>${student.stdName}</td>
          <td>${student.phone}</td>
          <td>${student.score}</td>
          </tr>`;
}
htmlstr += `</tbody></table>;`
document.getElementById.innerhtml = htmlstr;