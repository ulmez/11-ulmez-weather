import React from 'react';

export class LinkBar extends React.Component {
    render() {
        return (
            <div className="row">
                <div className="row btn-group" role="group" style={{margin: '0 auto'}}>
                    <button onClick={this.props.onClick} id='0' type="button" className="btn btn-info">Default diagnose</button>
                    <button onClick={this.props.onClick} id='1' type="button" className="btn btn-info">5 day diagnose</button>
                    <button onClick={this.props.onClick} id='2' type="button" className="btn btn-info">{this.props.metric ? 'Farenheit' : 'Celsius'}</button>
                </div>
            </div>
        );
    }
}