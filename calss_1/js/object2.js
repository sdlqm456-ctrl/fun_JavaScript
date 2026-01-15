// object2.js
// 객체 + 배열 활동
//  학생번호, 이름, 연락처, 점수
const studentAry = [
  {stdNO : "25-0001", stdName : "홍길동", phone: "010-1111-3333", score: 80},
  {stdNO : "25-0001", stdName : "김명수", phone: "010-2222-3333", score: 70},
  {stdNO : "25-0001", stdName : "최덕배", phone: "010-5555-3333", score: 60},
  {stdNO : "25-0001", stdName : "박우수", phone: "010-6666-3223", score: 95},
];
console.log(studentAry [1]. stdName);

let sum = 0; // 누적하기 위한 변수
let htmlstr = '<ul>';
for(let student of studentAry) {
  sum += student.score;
  htmlstr += `<li> ${student.stdName} (${student.score})</li>`; // 안에 넣으면 이름() 안에 입력이 됨
}
htmlstr += `<li> 합계점수 (${sum}) </li>`; // 반복문 밖에 넣어야 이름(점수) 밑에 합계점수가 나오게 됨
htmlstr +="</ul>"
document.writeln(htmlstr);
console.log (`반점수 합계: ${sum}, 평균: ${sum / studentAry.length}`);
// let sum = studentAry [0].score  + studentAry[1] .score  + studentAry[2] .score  + studentAry[3] 
