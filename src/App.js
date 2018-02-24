import React from 'react';
import { Main } from './Main';
import { LinkBar } from './LinkBar';
import { Week } from './Week';

export class App extends React.Component {
    constructor() {
        super();

        this.state = {
            weather: [],
            sunrise: "",
            sunset: "",
            metric: true,
            component: 0,
            week: []
        }

        this.fetchDefaultWeather = this.fetchDefaultWeather.bind(this);
        this.fetchMainWeather = this.fetchMainWeather.bind(this);
        this.getNavComponent = this.getNavComponent.bind(this);
        this.fetchWeekWeather = this.fetchWeekWeather.bind(this);
    }

    fetchMainWeather() {
        this.fetchDefaultWeather();
    }

    componentDidMount() {
        this.fetchDefaultWeather();
    }

    fetchDefaultWeather() {
        navigator.geolocation.getCurrentPosition((position) => {
            const unit = this.state.metric ? 'metric' : 'imperial';
            
            fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&units=${unit}&APPID=d87f99239bd5f3e1c122014b3df96724`)
            .then(res => res.json())
            .then(res => {
                this.setState({weather: res}, () => {
                    console.log(this.state.weather);

                    let newDateSunrise = new Date();
                    let newDateSunset = new Date();
                    var hour = '';
                    var minute = ';'

                    newDateSunrise.setTime(this.state.weather.sys.sunrise * 1000);
                    newDateSunset.setTime(this.state.weather.sys.sunset * 1000);

                    hour = newDateSunrise.getHours()<10 ? '0' + newDateSunrise.getHours() : newDateSunrise.getHours();
                    minute = newDateSunrise.getMinutes() < 10 ? '0' + newDateSunrise.getMinutes() : newDateSunrise.getMinutes();

                    newDateSunrise = hour + ':' + minute;

                    hour = newDateSunset.getHours()<10 ? '0' + newDateSunset.getHours() : newDateSunset.getHours();
                    minute = newDateSunset.getMinutes() < 10 ? '0' + newDateSunset.getMinutes() : newDateSunset.getMinutes();

                    newDateSunset = hour + ':' + minute;

                    this.setState({sunrise: newDateSunrise}, () => {
                        console.log(this.state.sunrise);
                    });

                    this.setState({sunset: newDateSunset}, () => {
                        console.log(this.state.sunset);
                    });
                });
            })
            .catch(err => {
                console.log(err);
            });
        });
    }

    getNavComponent(element) {
        if(element.target.id !== '2') {
            this.fetchWeekWeather(false);
            this.setState({component: element.target.id}, () => {
                console.log(this.state.component);
            });
        } else {
            this.setState({metric: this.state.metric ? false : true}, () => {
                console.log(this.state.metric);
                this.fetchMainWeather();
                this.fetchWeekWeather();
            });
        }
    }

    listOfComponents() {
        return [
                <Main weather={this.state} onClick={this.fetchMainWeather} />,
                <Week weather={this.state} week={this.state.week} />
            ];
    }

    fetchWeekWeather() {
        navigator.geolocation.getCurrentPosition((position) => {
            const unit = this.state.metric ? 'metric' : 'imperial';

            fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${position.coords.latitude}&lon=${position.coords.longitude}&units=${unit}&APPID=d87f99239bd5f3e1c122014b3df96724`)
            .then(res => res.json())
            .then(res => {
                this.setState({week: res}, () => {
                    console.log(this.state.week);
                });
            })
            .catch(err => {
                console.log(err);
            });
        });
    }

    render() {
        return (
                <div>
                    <LinkBar metric={this.state.metric} onClick={this.getNavComponent} />
                    {this.listOfComponents()[this.state.component]}
                </div>
            );
    }
}