// array3.js
// 배열.filter() => 배열 요소에 대해서 반복, 함수를 매개값으로 받음/ true 반환해 주는 요소를 새로운 배열에 추가
// 배열에 새로운 배열을 추가
// 1개의 값이 있으면 if문, return, {} 생략가능
// 간략하게 쓸려면 아래로 작성 하면 됨
 let filterAry = [10,20,30,40,50].filter((elem)=> {
  return elem >= 30;
 })
console.log(filterAry);

const friends = ["박상원", "장수연", "양현규", "정찬우", "서영준"];

// 삭제할 친구이름 입력 => 제거, 없으면 warning 띄우기

// 1. 이름을 입력하도록 propmt
let delName = prompt("삭제할 이름을 입력하세요");
// 2. 입력한 값을 friends 배열에서 찾아서 filter 메소드 활용
// 입력한 이름과 같은 값은 걸러내고 아닌 값만 새로운 배열에 담도록
let ixdx = friends.indexOf(delName);
if (ixdx == -1) {
  alert ("찾는 이름이 없습니다");
} else {
  const filterFriends = friends.filter((elem, idx) => { // elem: element(요소)의 줄임말 
    return ixdx != idx; // 찾는 인덱스를 기준으로 비교 (두 index값이 같은지 확인할 때 사용하는 명령어)
  });
  console.log(filterFriends);
}


