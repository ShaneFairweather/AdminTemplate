import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { linechart } from '../data/rechartData'
import { Container, Row, Col } from 'reactstrap';

const Rechart = () => {
    return (
        <Container fluid>
            <div className="section-header">Recharts</div>
            <Row>
                <Col xs="12">
                    <div className="rechart-container">
                        <ResponsiveContainer>
                            <LineChart width={600} height={300} data={linechart}
                                       margin={{top: 5, right: 30, left: 20, bottom: 5}}>
                                <XAxis dataKey="name"/>
                                <YAxis/>
                                <CartesianGrid strokeDasharray="3 3"/>
                                <Tooltip/>
                                <Legend />
                                <Line type="monotone" dataKey="pv" stroke="rgba(255,255,255,.9)" activeDot={{r: 8}}/>
                                <Line type="monotone" dataKey="uv" stroke="rgba(255,255,255,.5)" />
                            </LineChart>
                        </ResponsiveContainer>
                    </div>
                </Col>
            </Row>
        </Container>
    )
};

export default Rechart;