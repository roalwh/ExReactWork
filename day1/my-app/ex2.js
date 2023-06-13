//app2.js

// for
const foods=["김밥","만두","순대"];
for(let i =0;i<foods.length;i++){
    console.log(foods[i]);
}

// map
// 반복+처리
foods.map(function(e){
    console.log(e);
})

let newFood = foods.map((e)=>{
    return "new"+e;
})
console.log(newFood);

// filter() - 일치하는 자료만 가져오기

let likeFood = foods.filter((food,i)=>{
    console.log(`${i} : ${food}`);
    return food==="순대";
});
console.log(likeFood);


const names=["둘리","길동","짱구"];
let _names = names.map((e)=>{
    return e+"님";
})
console.log(_names);


// 기존 방식의 객체 반환
function createPerson(name,age){
    return{
        name:name,
        age:age,
        greet: function(){
            console.log("hello,"+this.name);
        }
    };
}
// 객체 반환 함수
const person1 = createPerson("Jogn",30);
console.log(person1);
person1.greet();

// es6 방식
createPersion1=(name,age)=>{
    return{
        name,age,
        greet(){
            console.log(`hello, ${this.name}`);
        }
    };
}
// es6 리턴 생략
const person=(name,age) => ({
    name : name,
    age:age
})