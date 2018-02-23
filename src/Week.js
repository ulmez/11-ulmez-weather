import React from 'react';

export class Week extends React.Component {
    /*componentDidMount() {
        this.fetchWeekWeather();
    }*/

    render() {
        //const data = this.props.week.list;
        //const listItems = data.map((d, i) => <li key={i}>{d.dt}</li>);
        const dayTexts = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        const MonthTexts = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];

        return (
            this.props.week.length === 0 ?
                <h1>Loading...</h1>
            :
                <div week={this.props.week}>
                    <h1>Week Component</h1>
                    <div>
                        <table className="table table-sm">
                            <thead className="table-info">
                                <tr>
                                    <th>DAY</th>
                                    <th>TIME</th>
                                    <th>DESCRIPTION</th>
                                    <th>HIGH/LOW</th>
                                    <th>WIND</th>
                                    <th>HUMIDITY</th>
                                </tr>
                            </thead>
                            {this.props.week.list.map((e, i) => {
                                let newDate = new Date();
                                newDate.setTime(e.dt * 1000);
                                let day = newDate.getDay();
                                let monthDay = newDate.getDate();
                                let month = newDate.getMonth();
                                let hour = newDate.getHours();
                                let minute = newDate.getMinutes();
                                // console.log(day);
                                hour = hour < 10 ? '0' + hour : hour;
                                minute = minute < 10 ? '0' + minute : minute;
                                return (
                                    <tbody key={i}>
                                        <tr>
                                            <td><ul style={{display: 'inline-block', listStyleType: 'none', padding: '0', margin: '0'}}><li>{dayTexts[day]}</li><li>{MonthTexts[month]} {monthDay}</li></ul> <img style={{verticalAlign: 'top'}} src={'https://openweathermap.org/img/w/' + e.weather[0].icon + '.png'} alt={e.weather[0].icon} /></td>
                                            <td>{hour}:{minute}</td>
                                            <td>{e.weather[0].description}</td>
                                            <td>{e.main.temp_max}/{e.main.temp_min} °C</td>
                                            <td>{e.wind.speed} m/s</td>
                                            <td>{e.main.humidity} %</td>
                                        </tr>
                                    </tbody>
                                );
                            })}
                        </table>
                    </div>
                </div>
        );
    }
}