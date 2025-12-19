// object.js
// 객체 타임 = {속성: 값, 속성: 값} 
// 객체: 1)속성 : 값 2) 메소드 (함수) 
const obj = { // const 객체 
  name: "홍길동",
  stdNO: "25-0001",
  phone: "010-1111-2222",
  bloodType: "AB",
  showINfo: function(){
    console.log (`학번은 ${obj.stdNO}이고 이름은 ${obj.name}`);
  },
  friends: ["김길동", "박길동", "최길동" ]
}
obj.name = "박길동"; // 값을 변경하고 싶을때 사용 => 변수명. 속성 = "값" 
obj ["phone"] = "010-5555-3333"; // 변수명 [속성] = "값"
console.log(obj.name); 
console.log(obj.stdNO);
console.log(`첫번째 친구 이름 : ${obj.friends[0]}`);
obj.showINfo();

const numAry = [20, 17, 30, 25, 22, 38, "hello", true];
numAry[2] = 40;
// console.log(numAry)[2];
// 배열&반복문
// index값이 0부터 시작해서 []안에 0을 입력 => index (0,1,2....)
for (let i = 0; i < numAry.length; i++) {
  console.log(numAry[i]);
}
// 배열의 크기
console.log (numAry.length);

// 홍길동, 박길동, 최길동 => numAry
const nameAry = ["홍길동", "박길동", "최길동"];
nameAry[3] = "류길동";
// for..of..반복문 
for (let name of nameAry) { // const numAry = [내용]에서  for (let (내용) of 원하는 내용)을 입력하면 내용을 반복하겠다는것 
  console.log (name);
}

//  for.. in.. 반복문 => 객체
// 속성추가
odj ["hobbies"] = ["게임", "독서", "캠핑" ];
// 속성삭제
delete odj.bloodType; 

for(let prop in obj) { //odj라는 객체의 변수 만큼 반복하겠다는 뜻
  console.log(`속성 => ${prop}, 값 => ${obj[prop]}`); //obj라는 값을 가져올때 사용
}