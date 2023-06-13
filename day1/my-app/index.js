// date-fns 모듈을 추가 , 모듈의 format 함수를 사용(가져옴)
const {format} = require('date-fns');

console.log("hello");
const d = new Date();
console.log(d);

const formateD = format(d, 'yyyy-MM-dd');
console.log(formateD);
