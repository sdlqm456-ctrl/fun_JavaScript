// 화살표 함수(ES6)

// 데이터유형(객체, 배열)

// 이벤트
// 화면영역에서 키보드 마우스 => 동작 - 이벤트 - 이벤트 핸들러(함수)

// 친구정보 관리 => 친구 (이름, 연락처, 생일: '08-20-12', 키 : 163.5)가 나오도록 하기
// 4명의 친구정보를 생성 => friends 배열에 저장
// 친구 평균 키: 175.3 제일 큰 키: 184.2 (홍길동)
// 테이블 태그를 활용해서 document.weite(); 그리기

let friends = [
  {name: "홍길동", phone: "010-1111-2222", birthday: "90-01-01", height: 184.2},
  {name: "이재현", phone: "010-2222-7777", birthday: "03-02-04", height: 182},
  {name: "김지찬", phone: "010-3333-4444", birthday: "08-12-20", height: 163.5},
  {name: "이호성", phone: "010-5555-1111", birthday: "04-08-14", height: 180},
];
let sum = 0;
let maxScore = friends[0];
let html = `<table border = "1">
              <tr>
              <th>친구이름</th>
              <th>전화번호</th>
              <th>생일</th>
              <th>키</th>
              </tr>`;

for(let friends of height) {
  sum += friends.height;
}
if (friends.height > friends.maxfriends.height){
  maxfriends = friends;
}
html += `<tr>
        <td>${friends.name}</td>
        <td>${friends.phone}</td>
        <td>${friends.birthday}</td>
        <td>${friends.height}</td>
        </tr>`;
let avg = (sum/friends.length).toFixed(1);

html += `</table>
<p>평균 키: ${avg}</p>
<p>제일 큰 키: ${maxFriend.height} (${maxFriend.name})</p>`;
document.weite(html);