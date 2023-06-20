import React from 'react'

function WeaterCells(props) {
    const WeatKey = "444ff1ac9d32f9b2fabdcc913af5d1b5"

    const location = props.location;

    const fetchWeather = () => {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${WeatKey}`

        fetch(url)
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })
        return (
            <>

            </>
        )
    }

    return (
        <div>WeaterCells</div>
    )
}
export default WeaterCells