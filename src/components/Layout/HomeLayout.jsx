import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Headers from '../Headers/Headers';
import LeftSide from '../LeftSide';
import RightSite from '../RightSite';
import { Outlet } from 'react-router-dom';

const HomeLayout = () => {
    return (
        <Container>
            <Row>
                <Headers/>
                <Col md={3}><LeftSide/></Col>
                <Col md={6}><Outlet/></Col>
                <Col md={3}><RightSite/></Col>
            </Row>
        </Container>
    );
};

export default HomeLayout;