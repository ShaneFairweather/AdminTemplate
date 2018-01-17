import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Doughnut, Bar, Line, Pie, Radar } from 'react-chartjs-2';
import moment from 'moment';
import ChatBody from './ChatBody';
import ChatContactsList from './ChatContactsList';
import Countdown from './Countdown';
import QuickStat from './QuickStat';
import You from '../assets/images/avatars/user-19.png';
import contacts from '../data/contacts';
import { data1, data2, data3, data4 } from '../data/quickStatData';
const currentTime = Date.parse(new Date());
const deadline = new Date(currentTime + 21 * 7 * 24 * 60 * 60 * 1000);


class Dashboard extends Component {
    state = {
        activeContact: contacts.find(function (obj) { return obj.name === "Matt Cassel"; }),
        contacts: contacts
    };

    addPost = (name, message) => {
        contacts.find(function (obj) { return obj.name === name; }).chatHistory.push({
            author: "You",
            message: message,
            postId: Math.floor(Math.random() * 100000),
            avatar: You,
            time: moment().format('h:mm a').toUpperCase()
        });
        this.setState({
            contacts: contacts
        });
    };

    render() {
        return (
            <Container fluid>
                <div className="section-header">Dashboard</div>
                <Row>
                    <Col xs="12" sm="12" md="6" lg="3">
                        <QuickStat
                            number={"743,239"}
                            text={"Total Leads Received"}
                            data={data1}
                        />
                    </Col>
                    <Col xs="12" sm="12" md="6" lg="3">
                        <QuickStat
                            number={"289,153"}
                            text={"Total Website Clicks"}
                            data={data2}
                        />
                    </Col>
                    <Col xs="12" sm="12" md="6" lg="3">
                        <QuickStat
                            number={"$68,761"}
                            text={"Total Sales Orders"}
                            data={data3}
                        />
                    </Col>
                    <Col xs="12" sm="12" md="6" lg="3">
                        <QuickStat
                            number={"181"}
                            text={"Total Support Tickets"}
                            data={data4}
                        />
                    </Col>
                </Row>
                <Row>
                    <Col xs="12" sm="12" md="6">
                        <Countdown deadline={deadline}/>
                    </Col>
                    <Col xs="12" sm="12" md="6">
                        {/*<ChatBody activeContact={this.state.activeContact} addPost={this.addPost}/>*/}
                    </Col>
                </Row>
                <Row>
                    <ChatContactsList contacts={contacts}/>
                </Row>
            </Container>
        )
    }
};

export default Dashboard;