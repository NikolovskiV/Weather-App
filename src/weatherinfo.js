import React from 'react';
import ReactAnimatedWeather from 'react-animated-weather';
// import { Fragment } from 'react';
// import { Search } from 'react-search';


const defaults = {
    icon: 'CLEAR_DAY',
    color: 'white',
    size: 100,
    animate: true
};


function WeatherInfo(props) {
    var weatherIcon;
    switch (props.weatherName) {
        case "Clear":
            weatherIcon = 'CLEAR_DAY';
            break;
        case "Rain":
            weatherIcon = "RAIN";
            break;
        case "Rain":
            weatherIcon = "CLOUDY";
            break;
        default:
            weatherIcon = 'CLEAR_DAY'
    }
    return (
        <React.Fragment>
            <div className="col-4 side-bg text-center py-3">
                <ReactAnimatedWeather
                    icon={weatherIcon}
                    color={defaults.color}
                    size={defaults.size}
                    animate={defaults.animate}
                />
                <h2 className="text-white py-2">{props.weatherName}</h2>
                <div className="d-flex flex-wrap">
                    <div className="d-flex col-12 py-2">
                        <div className="text-white"><strong>Humidity</strong></div>
                        <div className="text-white ml-auto">{props.humidity}%</div>
                    </div>
                    <div className="d-flex col-12 py-1">
                        <div className="text-white"><strong>Visiblity</strong></div>
                        <div className="text-white ml-auto">{props.visibility} mi</div>
                    </div>
                    <div className="d-flex col-12 py-1">
                        <div className="text-white"><strong>Wind Speed</strong></div>
                        <div className="text-white ml-auto">{props.windSpeed} km/h</div>
                    </div>
                    <div className="d-flex col-12 py-1">
                        <div className="text-white"><strong>Feels Like</strong></div>
                        <div className="text-white ml-auto">{props.feelsLike} °C</div>
                    </div>
                    <div className="d-flex col-12 py-1">
                        <div className="text-white"><strong>Min Temp</strong></div>
                        <div className="text-white ml-auto">{props.minTemp} °C</div>
                    </div>
                    <div className="d-flex col-12 py-1">
                        <div className="text-white"><strong>Max Temp</strong></div>
                        <div className="text-white ml-auto">{props.maxTemp} °C</div>
                    </div>
                    <div className="d-flex col-12 py-1">
                        <div className="text-white"><strong>Sunrise</strong></div>
                        <div className="text-white ml-auto">{new Date(props.sunrise * 1000).toLocaleTimeString(
                            "sv-SE"
                        )} h</div>
                    </div>
                    <div className="d-flex col-12 py-1">
                        <div className="text-white"><strong>Sunset</strong></div>
                        <div className="text-white ml-auto">{new Date(props.sunset * 1000).toLocaleTimeString(
                            "sv-SE"
                        )} h</div>
                    </div>
                </div>
            </div>
            {/* <div>
                <Fragment>
                    <Search />
                </Fragment>
            </div> */}
        </React.Fragment>
    );
}

export default WeatherInfo;