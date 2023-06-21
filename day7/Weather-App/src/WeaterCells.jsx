import React, { useState } from 'react'

function WeaterCells() {
    const WeatKey = "444ff1ac9d32f9b2fabdcc913af5d1b5"

    const [location, setLocation] = useState('');
    const [weather, setWeather] = useState(null);
    const [icon, seticon] = useState('');

    const fetchWeather = () => {
        if (location === '') {
            alert("값이없습니다.");
            return;
        }
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${WeatKey}&lang=kr`;
        fetch(url)
            .then(res => res.json())
            .then(data => {
                // 결과가 없을때
                console.log(data);
                if (data.cod == "200") {
                    setWeather(data);
                    seticon(`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`);
                } else {
                    setWeather(data);
                }
            });


    }
    const handleLocationChange = (e) => {
        setLocation(e.target.value);
    }
    return (
        <div className='wearBox'>
            <div className="selectBox">
                <input type="search" onChange={handleLocationChange} placeholder='위치를 입력하세요' required />
                <button onClick={fetchWeather} >검색</button>
            </div>
            <div>
                {
                    //weather 값 체크
                    (weather) ?
                        //weather.cod가 404 인경우
                        (weather.cod == '404') ?
                            <div><p style={{ color: "red", fontWeight: "bold" }}>{weather.cod} "올바른 지역명이 아닙니다"</p></div>
                            : <div>
                                <h1><img src={icon} alt="icon" /> </h1>
                                <h2>{weather.name} </h2>
                                <p>현재온도: {(weather.main.temp / 10).toFixed(1)} °C</p>
                                <p>설명: {weather.weather[0].description}</p>
                            </div>
                        : <div><p>"검색해주세요"</p></div>}
            </div>
        </div>

    )
}
export default WeaterCells