import React from 'react';
import { Main } from './Main';

export class App extends React.Component {
    // fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityname}&APPID=d87f99239bd5f3e1c122014b3df96724`)

    constructor() {
        super();
        this.state = {
            weather: [],
            sunrise: "",
            sunset: "",
            metric: true
        }
        this.test = this.test.bind(this);
        this.test();

        this.didYouClickMe = this.didYouClickMe.bind(this);
    }

    didYouClickMe(metric) {
        //this.props.weather.weather.metric = true;
        //this.state.metric ? this.setState({metric: false}) : this.setState({metric: true});
        //console.log(this.state.metric);
        this.test(metric);
    }

    /*componentDidMount() {
        this.test();
    }*/
    
    /*componentDidUpdate(prevProps, prevState) {
        if (this.state.weather !== prevState.weather) {
          this.test();  
        }
    }*/

    setMetric(celsius) {
        this.setState({metric: celsius}); 
    }

    test() {
        /*this.setState({weather: ['uno', 'doz', 'trez']}, () => {
            console.log(this.state.weather);
        });*/
        
        navigator.geolocation.getCurrentPosition((position) => {
            // this.setMetric(false);
            const unit = this.state.metric ? 'metric' : 'imperial';
            // fetch(`https://api.openweathermap.org/data/2.5/weather?id=2172797&units=metric&APPID=d87f99239bd5f3e1c122014b3df96724`)
            // fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&units=imperial&APPID=d87f99239bd5f3e1c122014b3df96724`)
            fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&units=${unit}&APPID=d87f99239bd5f3e1c122014b3df96724`)
            .then(res => res.json())
            .then(res => {
                // console.log(res);
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

                    this.state.metric ? this.setState({metric: false}) : this.setState({metric: true});
                });
            })
            .catch(err => {
                console.log(err);
            });

            /*// ddfgdfgdfgdfgdfg **************************
            // https://api.openweathermap.org/data/2.5/forecast/daily?lat=35&lon=139&cnt=10
            // api.openweathermap.org/data/2.5/forecast/daily?lat={lat}&lon={lon}&cnt={cnt}
            // https://api.openweathermap.org/data/2.5/forecast?lat=${position.coords.latitude}&lon=${position.coords.longitude}
            fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${position.coords.latitude}&lon=${position.coords.longitude}&APPID=d87f99239bd5f3e1c122014b3df96724`)
            // fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&units=metric&APPID=d87f99239bd5f3e1c122014b3df96724`)
            // fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&units=metric&APPID=d87f99239bd5f3e1c122014b3df96724`)
            .then(res => res.json())
            .then(res => {
                console.log(res);
            })
            .catch(err => {
                console.log(err);
            });*/
        });
    }

    render() {
        return <Main weather={this.state} onClick={this.didYouClickMe} />;
        /*return (
            this.state.weather.length === 0 ? <h1>Loading...</h1> : <div>
                <div>
                    <h1>Weather Statistics</h1>
                </div>
                <div>
                    <h3>Place</h3>
                </div>
                <div>
                    {this.state.weather.name}
                </div>
                <div>
                    <h3>Coordinates</h3>
                </div>
                <div>
                    <b>Longitude:</b> {this.state.weather.coord.lon}, <b>latitude:</b> {this.state.weather.coord.lat}
                </div>
                <div>
                    <h3>Temperature</h3>
                </div>
                <div>
                    {this.state.weather.main.temp}
                </div>
                <div>
                    <h3>Wind speed m/s</h3>
                </div>
                <div>
                    {this.state.weather.wind.speed}
                </div>
                <div>
                    <h3>Humidity %</h3>
                </div>
                <div>
                    {this.state.weather.main.humidity}
                </div>
                <div>
                    <h3>Sunrise</h3>
                </div>
                <div>
                    {this.state.sunrise}
                </div>
                <div>
                    <h3>Sunset</h3>
                </div>
                <div>
                    {this.state.sunset}
                </div> -->
            </div>
        );*/
    }
}