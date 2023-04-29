import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Headers from '../Headers/Headers';
import News from '../News';
import RightSite from '../RightSite';
import { Outlet } from 'react-router-dom';

const NewsLayout = () => {
    return (
        <Container>
            <Row>
                <Headers/>
                <Col md={9}>
                    <Outlet></Outlet>
                </Col>
                <Col md={3}>
                    <RightSite/>
                </Col>
            </Row>
        </Container>
    );
};

export default NewsLayout;