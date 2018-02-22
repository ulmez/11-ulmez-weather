import React from 'react';

export class App extends React.Component {
    // fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityname}&APPID=d87f99239bd5f3e1c122014b3df96724`)

    constructor() {
        super();
        this.state = {
            weather: [],
            sunrise: "",
            sunset: ""
        }
        this.test = this.test.bind(this);
        this.test();
    }

    /*componentDidMount() {
        this.test();
    }*/
    
    /*componentDidUpdate(prevProps, prevState) {
        if (this.state.weather !== prevState.weather) {
          this.test();  
        }
    }*/

    test() {
        /*this.setState({weather: ['uno', 'doz', 'trez']}, () => {
            console.log(this.state.weather);
        });*/
        
        navigator.geolocation.getCurrentPosition((position) => {
            // fetch(`https://api.openweathermap.org/data/2.5/weather?id=2172797&units=metric&APPID=d87f99239bd5f3e1c122014b3df96724`)
            // fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&units=imperial&APPID=d87f99239bd5f3e1c122014b3df96724`)
            /*fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&units=metric&APPID=d87f99239bd5f3e1c122014b3df96724`)
            .then(res => res.json())
            .then(res => {
                // console.log(res);
                this.setState({weather: res}, () => {
                    console.log(this.state.weather);

                    let newDateSunrise = new Date();
                    let newDateSunset = new Date();

                    newDateSunrise.setTime(this.state.weather.sys.sunrise * 1000);
                    newDateSunset.setTime(this.state.weather.sys.sunset * 1000);

                    this.setState({sunrise: newDateSunrise.toString()}, () => {
                        console.log(this.state.sunrise);
                    });

                    this.setState({sunset: newDateSunset.toString()}, () => {
                        console.log(this.state.sunset);
                    });
                });
            })
            .catch(err => {
                console.log(err);
            });*/

            // ddfgdfgdfgdfgdfg **************************
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
            });
        });
    }

    render() {
        return null;
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