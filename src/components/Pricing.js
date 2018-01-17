import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import PriceTable from './PriceTable';
import { table1, table2, table3 } from '../data/priceTableData';

const Pricing = () => {
    return (
        <Container fluid>
            <div className="section-header">Pricing Tables</div>
            <Row>
                <Col xs="12" sm="12" md="4">
                    <PriceTable data={table1} />
                </Col>
                <Col xs="12" sm="12" md="4">
                    <PriceTable data={table2} />
                </Col>
                <Col xs="12" sm="12" md="4">
                    <PriceTable data={table3} />
                </Col>
            </Row>
        </Container>
    )
};

export default Pricing;