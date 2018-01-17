import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import moment from 'moment';
import Countdown from './Countdown'
const currentTime = Date.parse(new Date());
const deadline = new Date(currentTime + 21 * 7 * 24 * 60 * 60 * 1000);

const ComingSoon = () => {
    return (
        <div className="coming-soon">
            <div className="coming-soon__header">We are launching soon.</div>
            <div className="coming-soon__logo-main">SK</div>
            {/*<div className="coming-soon__logo-sub">Admin</div>*/}
            <Countdown deadline={deadline}/>
        </div>
    )
};

export default ComingSoon;