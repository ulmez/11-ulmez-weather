import React from 'react';

export class Main extends React.Component {
    render() {
        return (
            this.props.weather.weather.length === 0 ?
                <h1>Loading...</h1>
            :
                <div>
                    <div>
                        <h1>Main Weather Statistics</h1>
                    </div>
                    <div weather={this.props.weather}>
                        <table className="table table-sm">
                            <thead className="table-info">
                                <tr>
                                    <th>Icon</th>
                                    <th>Description</th>
                                    <th>Place</th>
                                    <th>Coordinates</th>
                                    <th>Temperature</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><img src={'https://openweathermap.org/img/w/' + this.props.weather.weather.weather[0].icon + '.png'} alt={this.props.weather.weather.weather[0].icon} /></td>
                                    <td>{this.props.weather.weather.weather[0].description}</td>
                                    <td>{this.props.weather.weather.name}</td>
                                    <td><table><tbody><tr><td style={{padding: '0', margin: '0', border: '0'}}><b>Long:</b> {this.props.weather.weather.coord.lon}</td></tr><tr><td style={{padding: '0', margin: '0', border: '0'}}><b>lat:</b> {this.props.weather.weather.coord.lat}</td></tr></tbody></table></td>
                                    <td>{this.props.weather.weather.main.temp} °{this.props.weather.metric ? 'C' : 'F'}</td>
                                </tr>
                            </tbody>
                        </table>
                        <table className="table table-sm">
                            <thead className="table-info">
                                <tr>
                                    <th>Wind speed</th>
                                    <th>Humidity</th>
                                    <th>Sunrise</th>
                                    <th>Sunset</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>{this.props.weather.weather.wind.speed} {this.props.weather.metric ? 'm/s' : 'mph'}</td>
                                    <td>{this.props.weather.weather.main.humidity} %</td>
                                    <td>{this.props.weather.sunrise}</td>
                                    <td>{this.props.weather.sunset}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
        );
    }
}