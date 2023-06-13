let log = (msg) => {
    console.log(msg);
}

log("hello");

const car = {
    name: "차종은 소나타 입니다.",
    msg: (name) => {
        console.log(name);
    }
}
car.msg(car.name);

// 함수에 함수를 전달
const 요리 = (재료) => {
    return 재료();
}
const 재료 = () => {
    return '피자';
}

console.log(요리(재료));

setTimeout(() => {
    console.log('1초경과')
}, 1000);

// 숫자 배열에서 짝수만 필터링 하는 함수
const 짝수만 = (number) => {
    return number.filter(num => {
        return num % 2 === 0;
    })
}

const numbers1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const numbers2 = 짝수만(numbers1);
console.log(numbers2);


//  비동기 처리
function placeOrdar(meun, 주문) {
    let order;

    setTimeout(() => {
        order = `주문 완료 : ${meun}`;
        주문(order);
    }, 2000);
}

주문 = (order) => {
    console.log(order);
}
console.log(placeOrdar('치킨', 주문));


// 음식주문 (promise)
foodOrder = (food) => {
    // promise(resolve,reject)
    return new Promise((성공, 실패) => {
        // 비동기 처리문 
        setTimeout(() => {
            const 주문성공 = true; //응답메시지 
            if (주문성공) {
                성공(food + "주문완료!");
            } else {
                실패(food + "주문실패!");
            }
        }, 5000);
    })
}

foodOrder('돈까스')
    .then(결과 => console.log(결과))
    .catch(실패 => console.log(실패));