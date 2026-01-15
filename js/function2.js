console.log(`function2 => ${result}`, result);

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
const target = document.querySelector("#target");
for (let elem of memberAry) {
  const newTr = makeTr(elem);
  target.appendChild(newTr);
}
