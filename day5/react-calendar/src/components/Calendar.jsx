import React from 'react'

function Calendar(props) {
    console.log(props.year);
    // 날짜
    let d = new Date();
    // let day = d.getDay();//요일
    // let year = d.getFullYear(); //년도
    // let month = 1 + d.getMonth(); //월 0부터시작하기에 1을 더해줌
    // let date = d.getDate(); //일
    
    let {year, month, date} = props;


    // 아래와 같이 0을 넣으면 해당 달의 마지막 날짜 값이 나온다
    let lastDate = new Date(year, month, 0).getDate();
    // 시작일
    let startDate = new Date(year, month-1, 1).getDay();
  

    function tablelist() {
        console.log(Array(lastDate).fill().map((_, i) => i + 1));
    }

    return (
        <div className="calender">
            <header>
                <h1>{year}년</h1>
                <h2>{month}월</h2>
            </header>
            <main>
                <ul className="date">
                {
                    Array(startDate).fill().map((_,i)=>{
                        return(
                            <li key={i}></li>
                        )
                    })
                }
                    {
                        Array(lastDate).fill().map((_, i) => {
                            return (
                                date===i+1 ? <li style={{backgroundColor:'red'}} key={i}>{i + 1}</li> : <li key={i}>{i + 1}</li>
                                
                            )
                        })
                    }
                </ul>
            </main>
        </div>
    )
}

export default Calendar;