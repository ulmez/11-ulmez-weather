import React from 'react';
import { Main } from './Main';
import { LinkBar } from './LinkBar';
import { Week } from './Week';
import { ThreeHour } from './ThreeHour';

export class App extends React.Component {
    // fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityname}&APPID=d87f99239bd5f3e1c122014b3df96724`)

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
        //this.enAnnan = this.enAnnan.bind(this);

        //this.fetchDefaultWeather();
    }

    fetchMainWeather() {
        //this.props.weather.weather.metric = true;
        //this.state.metric ? this.setState({metric: false}) : this.setState({metric: true});
        //console.log(this.state.metric);
        this.fetchDefaultWeather();
    }

    componentDidMount() {
        this.fetchDefaultWeather();
    }
    
    /*componentDidUpdate(prevProps, prevState) {
        if (this.state.weather !== prevState.weather) {
          this.fetchDefaultWeather();  
        }
    }*/
    
    setMetric(celsius) {
        console.log('Clicked...');
        // this.setState({metric: celsius}); 
    }

    fetchDefaultWeather() {
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

                    /*if(metric || this.state.metric === '') {
                        this.state.metric || this.state.metric === '' ? this.setState({metric: false}) : this.setState({metric: true});
                    }*/
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

    getNavComponent(element) {
        //this.fetchWeekWeather();
        // console.log(element.target.id);
        // return <h1>Griskulting</h1>;
        // this.setState({component: <h1>Something else</h1>});

        if(element.target.id !== '2') {
            this.fetchWeekWeather(false);
            //console.log(element.target.id);
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
                <Week weather={this.state} week={this.state.week} />,
                <ThreeHour />
            ];
    }

    fetchWeekWeather() {
        navigator.geolocation.getCurrentPosition((position) => {
            const unit = this.state.metric ? 'metric' : 'imperial';

            // https://api.openweathermap.org/data/2.5/forecast/daily?lat=35&lon=139&cnt=10
            // api.openweathermap.org/data/2.5/forecast/daily?lat={lat}&lon={lon}&cnt={cnt}
            // https://api.openweathermap.org/data/2.5/forecast?lat=${position.coords.latitude}&lon=${position.coords.longitude}
            fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${position.coords.latitude}&lon=${position.coords.longitude}&units=${unit}&APPID=d87f99239bd5f3e1c122014b3df96724`)
            // fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&units=metric&APPID=d87f99239bd5f3e1c122014b3df96724`)
            // fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&units=metric&APPID=d87f99239bd5f3e1c122014b3df96724`)
            .then(res => res.json())
            .then(res => {
                this.setState({week: res}, () => {
                    console.log(this.state.week);
                });
                //let newDate = new Date();
                //let hours = '';
                //console.log(newDate.setTime(res.list[0].dt * 1000));
                
                //let day = newDate.setTime(res.list[0].dt * 1000);
                //day = newDate.getUTCDate();
                
                // console.log(day);
                // if(res.list.dt)
                /*res.list.map((e) => {
                    let newDate = new Date();
                    let day = newDate.setTime(e.dt * 1000);
                    const dayText = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
                    day = newDate.getDay();
                    console.log(dayText[day]);
                    //if()
                    return day;
                });*/
                //return res;
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
        // return <Main weather={this.state} onClick={this.fetchMainWeather} />;
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