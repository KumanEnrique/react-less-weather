import React from 'react'

function Card(props) {
    return (
        <div className="card text-center">
            <div className="card-header">
                <h3>name: {props.state.name}</h3>
                <h3>country: {props.state.sys.country}</h3>
                <h3>temperature: {props.state.main.temp}°C</h3>
            </div>
            <div className="card-body">
                <h3>temperature maximun: {props.state.main.temp_max}°C</h3>
                <h3>temperature minimun: {props.state.main.temp_min}°C</h3>
                <h3>sensations: {props.state.main.feels_like}°C</h3>
            </div>
        </div>
    )
}

export default Card
