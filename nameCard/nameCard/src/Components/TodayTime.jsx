import React from 'react'
import { useState } from 'react';

function TodayTime() {
    let d = new Date();
    const day = d.getDay();
    const month = ((d.getMonth() + 1) < 10) ? "0" + (d.getMonth() + 1) : (String)(d.getMonth() + 1);
    const date = ((d.getDate()) < 10) ? "0" + (d.getDate()) : (String)(d.getDate());

    const daylist = [
        { "todayset": '일요일' },
        { "todayset": '월요일' },
        { "todayset": '화요일' },
        { "todayset": '수요일' },
        { "todayset": '목요일' },
        { "todayset": '금요일' },
        { "todayset": '토요일' }
    ]
    console.log(day, month, date);
    const kday = daylist[day].todayset;


    return (
        <>
            <ul>
                {kday}
                <li>{month}/{date}</li>
            </ul>
        </>
    )
}

export default TodayTime;
