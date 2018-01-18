import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Doughnut, Bar, Line, Pie, Radar, defaults } from 'react-chartjs-2';
import { donut, bar, line, pie, radar, options } from '../data/chartjsData';
defaults.global.defaultFontColor = 'rgba(255,255,255,.4)';

const Charts = () => {
    console.log(defaults);
    return (
        <Container fluid>
            <div className="section-header">Charts</div>
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
                            data={donut}
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
                            data={bar}
                            options={options}
                        />
                    </div>
                </Col>
                <Col xs="12" md="6">
                    <div className="card chart-container">
                        <div className="chart__header">Radar Chart</div>
                        <Radar
                            responsive
                            legend={{
                                labels: {
                                    fontColor: 'rgba(255,255,255,.8)'
                                }
                            }}
                            data={radar}
                            options={{
                                scale: {
                                    labels: {
                                        color: "rgba(255,255,255,.8)"
                                    },
                                    ticks: {
                                        display: false
                                    },
                                    gridLines: {
                                        color: "rgba(255,255,255,.3)"
                                    }
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
                            data={pie} />
                    </div>
                </Col>
                <Col xs="12">
                    <div className="card chart-container">
                        <div className="chart__header">Line Chart</div>
                        <Line
                            responsive
                            legend={{
                                labels: {
                                    fontColor: 'rgba(255,255,255,.8)'
                                }
                            }}
                            data={line}
                            options={options}
                        />
                    </div>
                </Col>
            </Row>
        </Container>
    )
};

export default Charts;