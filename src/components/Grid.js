import React from 'react';
import { Container, Row, Col } from 'reactstrap';

const Grid = () => {
    return (
        <Container fluid>
            <Row>
                <Col xs="12"><div className="grid-panel">Twelve</div></Col>
                <Col xs="12" sm="12" md="6"><div className="grid-panel">Six</div></Col>
                <Col xs="12" sm="12" md="6"><div className="grid-panel">Six</div></Col>
                <Col xs="12" sm="12" md="4"><div className="grid-panel">Four</div></Col>
                <Col xs="12" sm="12" md="4"><div className="grid-panel">Four</div></Col>
                <Col xs="12" sm="12" md="4"><div className="grid-panel">Four</div></Col>
                <Col xs="12" sm="12" md="3"><div className="grid-panel">Three</div></Col>
                <Col xs="12" sm="12" md="3"><div className="grid-panel">Three</div></Col>
                <Col xs="12" sm="12" md="3"><div className="grid-panel">Three</div></Col>
                <Col xs="12" sm="12" md="3"><div className="grid-panel">Three</div></Col>
                <Col xs="12" sm="12" md="8"><div className="grid-panel">Eight</div></Col>
                <Col xs="12" sm="12" md="4"><div className="grid-panel">Four</div></Col>
                <Col xs="12" sm="12" md="10"><div className="grid-panel">Ten</div></Col>
                <Col xs="12" sm="12" md="2"><div className="grid-panel">Two</div></Col>
                <Col xs="12" sm="12" md="5"><div className="grid-panel">Five</div></Col>
                <Col xs="12" sm="12" md="3"><div className="grid-panel">Three</div></Col>
                <Col xs="12" sm="12" md="4"><div className="grid-panel">Four</div></Col>
            </Row>
        </Container>
    )
};

export default Grid;