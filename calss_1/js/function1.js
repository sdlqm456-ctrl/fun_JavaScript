// function1.js

//num = 0;
// doIt = function() { 기능실행}

// 두 수를 비교해서 큰 수를 출력
// 함수 선언
function showMax(A, B) {
  // 매개변수: 함수로 들어오는 값
  if (A > B) {
    console.log(`큰 값은 ${A}`);
  } else {
    console.log(`큰 값은 ${B}`);
  }
}

if (n1 > n2) {
  console.log(`큰 값은 ${n1}`);
} else {
  console.log(`큰 값은  ${n2}`);
}

// 매개변수가 2개일때 2개의 곱을 콘솔에 출력
// getMulti: 여러개의 데이터를 한번에 가져오기
function getMulti(a, b) {
  let result = a * b;
  console.log(`두 수의 곱은 ${result}`);
  return result; // 반환 (위의 계산결과를 밖으로 전달)
}
let result = getMulti(m1, 50);
result = getMulti(2, 3);
console.log(result); // 최종결과 출력
