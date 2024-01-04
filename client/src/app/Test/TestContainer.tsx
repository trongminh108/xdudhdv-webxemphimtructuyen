'use client';

import { Container, Row, Col } from 'react-bootstrap';

function TestContainer() {
    return (
        <Container
            // fluid
            style={{
                // width: '70%',
                // minHeight: '500px',
                backgroundColor: 'yellow',
            }}
        >
            <Row sm={2}>
                <Col>Col 1</Col>
                <Col>Col 1</Col>
                <Col>Col 1</Col>
                <Col>Col 1</Col>
                <Col>Col 1</Col>
                <Col>Col 1</Col>
                <Col>Col 1</Col>
            </Row>
        </Container>
    );
}

export default TestContainer;
