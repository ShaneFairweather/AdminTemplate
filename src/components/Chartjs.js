import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Doughnut, Bar, Line, Pie, Radar } from 'react-chartjs-2';

const Chartjs = () => {
    return (
        <Container fluid>
            <div className="section-header">Chart.js</div>
            <Row>
                <Col xs="12" md="6">
                    <div className="card chart-container">
                        <div className="chart__header">Donut Chart</div>
                        <Doughnut
                            responsive
                            legend={{
                                labels: {
                                    fontColor: 'rgba(255,255,255,.8)'
                                }
                            }}
                            data={{
                            labels: ["React", "Angular", "Vue", "Ember"],
                            datasets: [{
                                label: '# of Votes',
                                data: [19, 12, 3, 5],
                                legend: {
                                    labels: {
                                        fontColor: '#ffffff'
                                    }
                                },
                                defaultFontColor: "rgba(255,255,255,1)",
                                backgroundColor: [
                                    'rgba(255, 255, 255, 1)',
                                    'rgba(255, 255, 255, 0.7)',
                                    'rgba(255, 255, 255, 0.5)',
                                    'rgba(255, 255, 255, 0.2)',
                                ],
                                borderWidth: 0
                            }]}}
                        />
                    </div>
                </Col>
                <Col xs="12" md="6">
                    <div className="card chart-container">
                        <div className="chart__header">Bar Chart</div>
                        <Bar
                            responsive
                            legend={{
                                labels: {
                                    fontColor: 'rgba(255,255,255,.8)'
                                }
                            }}
                            data={{
                            labels: ["iPhone X", "Galaxy S8", "G6", "Pixel 2", "Mate 10"],
                            datasets: [{
                                label: '# of Votes',
                                data: [1200, 1100, 700, 900, 500],
                                backgroundColor: [
                                    'rgba(255, 255, 255, 1)',
                                    'rgba(255, 255, 255, 0.8)',
                                    'rgba(255, 255, 255, 0.6)',
                                    'rgba(255, 255, 255, 0.4)',
                                    'rgba(255, 255, 255, 0.2)'
                                ],
                                scales: {
                                    xAxes: [{
                                        ticks: {
                                            fontColor: "#CCC", // this here
                                        }
                                    }]
                                },
                                borderWidth: 0
                            }]}}
                            options={{
                                scales: {
                                    xAxes: [{
                                        ticks: {
                                            fontColor: "rgba(255,255,255,.8)"
                                        }
                                    }],
                                    yAxes: [{
                                        ticks: {
                                            fontColor: "rgba(255,255,255,.8)"
                                        }
                                    }]
                                }
                            }}
                        />
                    </div>
                </Col>
                <Col xs="12" md="6">
                    <div className="card chart-container">
                        <div className="chart__header">Line Chart</div>
                        <Line
                            responsive
                            legend={{
                                labels: {
                                    fontColor: 'rgba(255,255,255,.8)'
                                }
                            }}
                            data={{
                            labels: ["2013", "2014", "2015", "2016", "2017"],
                            datasets: [{
                                label: '# of Occurences',
                                data: [120, 180, 40, 110, 60],
                                backgroundColor: [
                                    'rgba(255, 255, 255,.4)',
                                ],
                                borderColor: [
                                    'rgba(255,255,255,1)'
                                ],
                                borderWidth: 0
                            }]}}
                            options={{
                                scales: {
                                    xAxes: [{
                                        ticks: {
                                            fontColor: "rgba(255,255,255,.8)"
                                        }
                                    }],
                                    yAxes: [{
                                        ticks: {
                                            fontColor: "rgba(255,255,255,.8)"
                                        }
                                    }]
                                }
                            }}
                        />
                    </div>
                </Col>
                <Col xs="12" md="6">
                    <div className="card chart-container">
                        <div className="chart__header">Pie Chart</div>
                        <Pie
                            responsive
                            legend={{
                                labels: {
                                    fontColor: 'rgba(255,255,255,.8)'
                                }
                            }}
                            data={{
                            labels: ["USA", "Germany", "UK", "France", "Canada"],
                            datasets: [{
                                label: 'Visitors by Country',
                                data: [12, 19, 3, 5, 2, 3],
                                backgroundColor: [
                                    'rgba(255, 255, 255, 1)',
                                    'rgba(255, 255, 255, 0.8)',
                                    'rgba(255, 255, 255, 0.5)',
                                    'rgba(255, 255, 255, 0.2)',
                                    'rgba(255, 255, 255, 0.2)',
                                    'rgba(255, 255, 255, 0.1)'
                                ],
                                borderColor: [
                                    'rgba(255,255,255,1)',
                                    'rgba(255, 255, 255, 1)',
                                    'rgba(255, 255, 255, 1)',
                                    'rgba(255, 255, 255, 1)',
                                    'rgba(255, 255, 255, 1)',
                                    'rgba(255, 255, 255, 1)'
                                ],
                                borderWidth: 0
                            }]}} />
                    </div>
                </Col>
            </Row>
        </Container>
    )
};

export default Chartjs;