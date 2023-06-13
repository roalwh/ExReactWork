const titleId = document.getElementById("title");
console.log(titleId);

const containers = document.getElementsByClassName("container");
console.log(containers);

const titleEl = document.querySelector("#title");
console.log(titleEl);

const containersEl = document.querySelectorAll(".container");
console.log(containersEl);

//DOM 생성
// CreateElement('요소명') ---요소를 생성
// div 생성
const divEl = document.createElement("div");
console.log(divEl);
// p태그 생성
const pEl = document.createElement("p");

pEl.innerText="집 가고싶다"
console.log(pEl);
// div 안에 p 추가  -- appendChild(요소명)
divEl.appendChild(pEl);

// prepend -- 앞에 추가
const h2El = document.createElement("h2");
h2El.innerText="소원이있워요"
divEl.prepend(h2El);

console.log(divEl);
containersEl[1].append(divEl);

// 버튼 이름 추가(변경)
// botton 생성
const btnEl = document.createElement('button');

// 버튼명 변경
btnEl.textContent = '버튼';

// 첫번째 container 선택
const container1 = document.querySelector('.container');

// container1에 버튼 추가
container1.appendChild(btnEl);

// DOM 삭제
// container1 안의 h1 삭제
const h1El = document.querySelector("h1");
container1.parentElement.removeChild(h1El);