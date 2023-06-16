import React from 'react'


function Calendar() {

    // 날짜
    let d = new Date();
    let day = d.getDay();//요일
    let year = d.getFullYear(); //년도
    let month = 1 + d.getMonth(); //월 0부터시작하기에 1을 더해줌
    let date = d.getDate(); //일

    // 아래와 같이 0을 넣으면 해당 달의 마지막 날짜 값이 나온다
    let lastDate = new Date(year, month, 0).getDate();
    // 시작일
    let startDate = new Date(year, month, 1).getDay();
    console.log(d);
    console.log(`year:${year}, month:${month}, date:${date}, lastDate:${lastDate}, startDate:${startDate}, day:${day}`);

    return (
        <div className="calender">
            <header>{year}년 {month}월 {date}일</header>
            <main>
                달력
            </main>
        </div>
    )
}

export default Calendar;