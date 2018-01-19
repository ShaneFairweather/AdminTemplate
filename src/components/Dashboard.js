import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Line } from 'react-chartjs-2';
import moment from 'moment';

import ChatContactsList from './chat/ChatContactsList';
import Countdown from './countdown/Countdown';
import QuickStat from './QuickStat';

import You from '../assets/images/avatars/user-19.png';
import contacts from '../data/contacts';
import { data1, data2, data3, data4 } from '../data/quickStatData';
import { dashboardChartData, dashboardChartOptions } from '../data/chartjsData';
import todoItems from '../data/todoData';
import TodoListInner from "./todolist/TodoListInner";
import CalendarInner from "./calendar/CalendarInner";

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
            <Container fluid className="dashboard">
                <div className="section-header">Dashboard</div>
                <Row className="stat-row">
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
                        <div className="card chart-container">
                            <div className="chart__header">Sales Statistics</div>
                            <Line
                                responsive
                                legend={{
                                    labels: {
                                        fontColor: 'rgba(255,255,255,.8)'
                                    }
                                }}
                                data={dashboardChartData}
                                options={dashboardChartOptions}
                            />
                        </div>
                        <Countdown deadline={deadline}/>
                    </Col>
                    <Col xs="12" sm="12" md="6">
                        <TodoListInner items={todoItems.slice(0, 5)} />
                    </Col>
                </Row>
                <Row>
                    <Col xs="12" sm="12" md="5">
                        <ChatContactsList contacts={contacts}/>
                    </Col>
                    <Col xs="12" sm="12" md="7">
                        <CalendarInner />
                    </Col>
                </Row>
            </Container>
        )
    }
};

export default Dashboard;