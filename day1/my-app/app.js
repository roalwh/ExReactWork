console.log(111);


const itileEl = document.getElementById('title');
console.log(itileEl);

const pi = 3.14159;
const _PI = Math.PI;

console.log(pi, _PI)

const animale = ["dog,", "cat"]; //String 형태일경우 변경가능하나 다른 혁식으로는 변경안됨
console.log(animale);
animale[0] = "bird";
console.log(animale);

const name = "john";
const age = 30;
//const greeting="안녕하세요, 저는 "+name+"이고 나이는 " + age+"입니다";
const greeting = `안녕하세요 저는 ${name} 이고 나이는 ${age}입니다.`;
console.log(greeting);

const contentEl = document.getElementById("content");
const title = "HTML 이란?"
const html =
    `<h1>${title}</h1>
    <p>UI를 동적으로 생성하고 컴포넌트ㅇ화 시켜 개발할 수 있는 라이브러리.프레임워크 입니다.</p>`;
contentEl.innerHTML = html;

const x = 3, y = 10;
let sum = `합계는 ${x + y}`;
console.log(sum);

function add(a, b) {
    return a + b;
}
console.log(add(3, 5));

// 화살표함수
const 인사 = (_name) => {
    return `안녕하세요 ${_name}`;
}
console.log(인사);

const sayhello = (inputname, age) => "Hello" +" "+ inputname +" "+"age:" + age;

console.log(sayhello("asdasdasd", 30))


const profile = (name,age) => {
    return `${name}의 나이는 ${age}`;
}
const profile2 = (name,age) => `${name}의 나이는 ${age}`;
console.log(profile("홍길동",100));
console.log(profile2("홍길동",100));

const pokemon = {
    name : "피카츄",
    skill:"전기"
};
let pname = pokemon.name;
let pskill = pokemon.skill;

console.log(`${pname}, ${pskill}`);

let arr=[10,20];
let a,b,rest;
[a,b]=arr;
console.log(a,b);

let arr2=[10,20,30,40,50];
[a,b,...rest]=arr2;
console.log(a,b,rest);

const student = {
    name: 'John Doe',
    age: 20,
    grade: 'A',
    major: 'Computer Science'
  };

 let {name2,age2,grade,major}=student;
  console.log(`이름 : ${name} 나이:${age}`);

//   name='피카츄' 별다른값이 없으면 기본값으로 처리가능
const sayPokemon=(name='피카츄')=>{

    console.log(`${name}님 안녕?`);
}
sayPokemon();
sayPokemon('파이리');

const square=(num=0)=>{
    return num*num;
}
console.log(square(5)); 
console.log(square()); 

// 배열 합치기
let myarr1=[1,2,3];
let myarr2=[4,5,6];
let myarr3=myarr1.concat(myarr2);
let myarr4=[...myarr1,4,5,6]
console.log(myarr3);
console.log(myarr4);



// 스프레드 연산자