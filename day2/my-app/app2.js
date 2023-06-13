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