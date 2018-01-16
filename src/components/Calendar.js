import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import CalendarInner from './CalendarInner';

class Calendar extends Component {
    render() {
        return (
            <Container fluid className="container--calendar">
                <div className="section-header">Calendar</div>
                <CalendarInner />
            </Container>
        )
    }
}

export default Calendar;