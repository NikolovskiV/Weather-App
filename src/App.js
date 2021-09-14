// import logo from './logo.svg';
import React, { Component, useEffect, useState } from 'react';
import './App.css';
import Clock from 'react-live-clock';
import WeatherInfo from './weatherinfo';
import { getSunrise, getSunset } from 'sunrise-sunset-js';
import Navbar from './Navbar';
import Forecast from './Forecast';
import WeekContainer from './WeekContainer';
// import CitySelector from './components/CitySelector';
// import { Container } from 'react-bootstrap';
// import UseFetch from './hooks/UseFetch';
// import { API_KEY, API_BASE_URL } from './apis/config';

class App extends React.Component {

  state = {
    latitude: null,
    longitude: null,
    temp: null,
    locationName: null,
    country: null,
    humidity: null,
    visibility: null,
    windSpeed: null,
    feelsLike: null,
    minTemp: null,
    maxTemp: null,
    weatherName: null,
    sunrise: null,
    sunset: null,
    forecast: [],
    fahrenheit: null,
    celsius: null
  }

  componentDidMount() {
    if (navigator.geolocation) {
      this.getPostions()
        .then((position) => {
          console.log(position.coords.latitude);
          // this.setState({ latitude: position.coords.latitude })
          this.getWeather(position.coords.latitude, position.coords.longitude)
          this.getForecast(position.coords.latitude, position.coords.longitude);
        })
    }
  }

  // fetchLocationDay = async => {
  //   const today = new DateTime.now();
  //   for (let i = 0; i < 7; i++) {
  //     a
  //   }
  // }

  getPostions = () => {
    return new Promise(function (resolve, reject) {
      navigator.geolocation.getCurrentPosition(resolve, reject);
    });
  };
  // api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}
  getWeather = async (latitude, longitude) => {
    const api = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=38ff886a4e3b7104f324a6067130ef6a`
    );

    const data = await api.json();
    console.log(data);
    const sunset = getSunset(latitude, longitude);
    const sunrise = getSunrise(latitude, longitude);
    console.log(toString(sunset));
    this.setState(
      {
        temp: Math.round(data.main.temp),
        locationName: data.name,
        country: data.sys.country,
        humidity: data.main.humidity,
        visibility: data.visibility,
        windSpeed: data.wind.speed,
        feelsLike: Math.round(data.main.feels_like),
        minTemp: Math.round(data.main.temp_min),
        maxTemp: Math.round(data.main.temp_max),
        weatherName: data.weather[0].main,
        sunrise: data.sys.sunrise,
        sunset: data.sys.sunset
      }
    )
  }

  getForecast = async (latitude, longitude) => {
    const api = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&units=metric&appid=38ff886a4e3b7104f324a6067130ef6a`
    );

    const data = await api.json();
    console.log(data);
    this.setState(
      {
        forecast: data.list
      }
    )
  }

  render() {
    return (
      <React.Fragment>
        <Navbar />
        <div className="col-16 d-flex justify-content-center py-5">
          <div className="col-6 app-bg d-flex flex-wrap py-3">
            <div className="col-12">
              <h2 className="text-white m-0">{(this.state.locationName)}</h2>
              <p className="text-white">{(this.state.country)}</p>
            </div>
            <div className="col-12 mt-auto d-flex">
              <div className="my-auto">
                <h2 className="text-white m-0"><Clock format={'HH:mm:ss'} ticking={true} /></h2>
                <p className="text-white m-0">
                  <Clock date={''} format={'dddd, MMMM DD, YYYY'} />
                </p>
              </div>
              <div className="ml-auto">
                <h1 className="text-white">{(this.state.temp)}°C</h1>
              </div>
            </div>
          </div>
          <WeatherInfo humidity={this.state.humidity} visibility={this.state.visibility} windSpeed={this.state.windSpeed} feelsLike={this.state.feelsLike} minTemp={this.state.minTemp} maxTemp={this.state.maxTemp} weatherName={this.state.weatherName} sunrise={this.state.sunrise} sunset={this.state.sunset} />
        </div>

        <div>
          <Forecast />
        </div>

        <div className="App">
          <WeekContainer />
        </div>

        {/* <div>
          {this.state.forecast.map(item => item.main.temp)}
          {this.state.forecast.map(item => item.main.temp_max)}
          {this.state.forecast.map(item => item.main.temp_max)}
        </div> */}
        <div className="footer">
          Created by Vande Nikolovski
            </div>
      </React.Fragment>

    );
  }
}

export default App;
