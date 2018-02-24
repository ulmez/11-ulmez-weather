import React from 'react';

export class LinkBar extends React.Component {
    render() {
        return (
            <div>
                <button onClick={this.props.onClick} id='0'>Default diagnose</button>
                <button onClick={this.props.onClick} id='1'>5 day diagnose</button>
                <button onClick={this.props.onClick} id='2'>{this.props.metric ? 'Farenheit' : 'Celsius'}</button>
            </div>
        );
    }
}