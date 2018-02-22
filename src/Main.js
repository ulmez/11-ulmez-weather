import React from 'react';

export class Main extends React.Component {
    

    render() {
        return (
            this.props.weather.weather.length === 0 ?
                <h1>Loading...</h1>
            :
                <div weather={this.props.weather}>
                    {JSON.stringify(this.props.weather)}
                    <div>
                        <button onClick={this.props.onClick}>Celsius</button>
                    </div>
                    <div>
                        <h1>Weather Statistics</h1>
                    </div>
                    <div>
                        <h3>Place</h3>
                    </div>
                    <div>
                        {this.props.weather.weather.name}
                    </div>
                    <div>
                        <h3>Coordinates</h3>
                    </div>
                    <div>
                        <b>Longitude:</b> {this.props.weather.weather.coord.lon}, <b>latitude:</b> {this.props.weather.weather.coord.lat}
                    </div>
                    <div>
                        <h3>Temperature</h3>
                    </div>
                    <div>
                        {this.props.weather.weather.main.temp} °{this.props.weather.metric ? 'F' : 'C'}
                    </div>
                    <div>
                        <h3>Wind speed</h3>
                    </div>
                    <div>
                        {this.props.weather.weather.wind.speed} {this.props.weather.metric ? 'mph' : 'm/s'}
                    </div>
                    <div>
                        <h3>Humidity</h3>
                    </div>
                    <div>
                        {this.props.weather.weather.main.humidity} %
                    </div>
                    <div>
                        <h3>Sunrise</h3>
                    </div>
                    <div>
                        {this.props.weather.sunrise}
                    </div>
                    <div>
                        <h3>Sunset</h3>
                    </div>
                    <div>
                        {this.props.weather.sunset}
                    </div>
                </div>
        );
    }
}