// dom1.js
console.log(document.querySelectorAll("div #detail> ul > li")); // 특정 요소를 찾을때 사용, querySelectorAll는 전체 요소를 가지고 옴
// 1. element node, 2. text node <li id = "first">Apple</li> 3. attridute

// element node를 만드는 메소드 createElement()
let liTag = document.createElement("li"); // ()안에 대소문자 상관없이 입력가능 => <li></li> 사이에 텍스트가 들어감
console.log(liTag);
let txt = document.createTextNode("Apple"); // "Apple"이라는 텍스트를 추가
console.log(txt);
liTag.appendChild(txt); // <li>Apple</li>
liTag.innerTag = "Apple";
console.log(liTag);

// ul에 자식요소로 등록 => <ul>....<li>apple</li></ul>
document.querySelector("div#detail>ul").appendChild(liTag);
