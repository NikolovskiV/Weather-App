import React from 'react';
import DayCard from './DayCard';
import DegreeToggle from './DegreeToggle';


class WeekContainer extends React.Component {
    state = {
        fullData: [],
        dailyData: [],
        degreeType: "fahrenheit",
    }

    updateForecastDegree = event => {
        this.setState({
            degreeType: event.target.value
        }, () => console.log(this.state))
    }

    componentDidMount = () => {
        const weatherURL =
            'http://api.openweathermap.org/data/2.5/forecast?zip=10026&units=imperial&APPID=38ff886a4e3b7104f324a6067130ef6a'

        fetch(weatherURL)
            .then(res => res.json())
            .then(data => {
                const dailyData = data.list.filter(reading => reading.dt_txt.includes("18:00:00"))
                this.setState({
                    fullData: data.list,
                    dailyData: dailyData,

                }, () => console.log(this.state))
            })
    }

    formatDayCards = () => {
        return this.state.dailyData.map((reading, index) => <DayCard degreeType={this.state.degreeType} reading={reading} key={index} />)
    }

    render() {
        return (
            <div className="container">
                <DegreeToggle degreeType={this.state.degreeType} updateForecastDegree={this.updateForecastDegree} />
                <React.Fragment>
                    <h2 className="text-white m-0">{(this.state.locationName)}</h2>
                </React.Fragment>
                <div className="row justify-content-center">

                    {this.formatDayCards()}

                </div>
            </div>
        )
    }
}

export default WeekContainer;


const wait = time => new Promise((resolve) => setTimeout(resolve, time));

wait(3000).then(() => console.log('Hello!')); // 'Hello!'