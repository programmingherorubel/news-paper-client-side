import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Topbar from './Topbar';
import CustomNavbar from './CustomNavbar';

const Headers = () => {
    return (
        <Container>
            <Row>
                <Col>
                    <Topbar/>
                    <CustomNavbar></CustomNavbar>
                </Col>
            </Row>
        </Container>
    );
};

export default Headers;