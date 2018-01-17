import React, { Component } from 'react';
import CountdownPanel from './CountdownPanel';

class Countdown extends Component {
    state = {
        weeks: 0,
        days: 0,
        minutes: 0,
        hours: 0,
        seconds: 0
    };

    getTimeUntilDeadline(deadline) {
        const time = Date.parse(deadline) - Date.parse(new Date());
        const seconds = Math.floor((time/1000) % 60);
        const minutes = Math.floor((time/1000/60) % 60);
        const hours = Math.floor((time/(1000*60*60) % 24));
        const days = Math.floor((time/(1000*60*60*24) % 7));
        const weeks = Math.floor((time/(1000*60*60*24*7)));
        this.setState({ weeks, days, hours, minutes, seconds })
    }

    componentWillMount() {
        this.getTimeUntilDeadline(this.props.deadline);
    }

    componentDidMount() {
        setInterval(() => this.getTimeUntilDeadline(this.props.deadline), 1000);
    }

    addLeadingZero(num) {
        return num < 10 ? "0" + num : num;
    }

    render() {
        return (
            <div className="countdown">
                <CountdownPanel timer={this.addLeadingZero(this.state.weeks)} label="Weeks"/>
                <CountdownPanel timer={this.addLeadingZero(this.state.days)} label="Days"/>
                <CountdownPanel timer={this.addLeadingZero(this.state.hours)} label="Hours"/>
                <CountdownPanel timer={this.addLeadingZero(this.state.minutes)} label="Minutes"/>
                <CountdownPanel timer={this.addLeadingZero(this.state.seconds)} label="Seconds"/>
            </div>
        )
    }
};

export default Countdown;