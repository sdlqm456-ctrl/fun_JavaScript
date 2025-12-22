// function1.js
// 값 /기능
//num = 0;
// doIt = function() {
//         기능실행
//}

// 두 수를 비교해서 큰 수를 출력가능
// 함수 선언
function showMax(a, b) {
  //paramater (매개변수)
  if (a > b) {
    console.log(`큰 값은 ${a}`);
  } else {
    console.log(`큰 값은 ${b}`);
  }
} // end of showMax(a,b) 

let n1 = 10,
  n2 = 20;
// 함수 호출
showMax(n1, n2); // arguement 매개값

let m1 = 30,
  m2 = 40;
showMax(n1, n2); // arguement 매개값

if (n1 > n2) {
  console.log(`큰값은 ${n1}`);
} else {
  console.log(`큰값은 ${n2}`);
}

// 매개변수 2개, 2개의 곱을 콘솔에 출력하는 함수 getMulti 함수

function getMulti(a,b) {
  let result = a * b;
  console.log (`두 수의 곱은 ${a}`);
  return result; // 반환
}
let result = getMulti(m1, 50);
result = getMulti(2,3);
console.log(result);
