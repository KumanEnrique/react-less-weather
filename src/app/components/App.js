import React, { Component } from 'react'
import Navigation from './Navigation'
import Form from './Form';
import Card from './Card';

const API_key = '40eb1ba27c4a8261b82f6c56048d0820'

export class App extends Component {
    constructor() {
        super();
        this.state = { 
            cityName:'',
            countryCode:'',
            weather:null
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleChange2 = this.handleChange2.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ cityName: event.target.value });
    }
    handleChange2(event) {
        this.setState({ countryCode: event.target.value });
    }

    handleSubmit(event) {
        event.preventDefault();
        // fetch(`https://api.openweathermap.org/data/2.5/weather?q=${'london'},${'uk'}&appid=${API_key}`)
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.state.cityName},${this.state.countryCode}&appid=${API_key}&units=metric`)
        .then((response)=>response.json())
        .then((data)=>{
            this.setState({weather:data})
        })
        this.setState({
            countryCode: "",
            cityName:""
        });
    }
    render() {
        return (
            <>
                <Navigation/>
                <div className="container mt-4">
                    <div className="row">
                        <div className="offset-lg-3 col-lg-4">
                            <Form state={this.state} onSubmit={this.handleSubmit} onChange={this.handleChange} onChange2={this.handleChange2}/>
                        </div>
                    </div>
                    <div className="row mt-4">
                        <div className="offset-lg-3 col-lg-4">
                            {
                                this.state.weather && <Card state={this.state.weather}/>
                            }
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default App
