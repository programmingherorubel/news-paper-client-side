import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link, useLoaderData } from 'react-router-dom';
import EditorsInside from './EditorsInside';

const News = () => {
    const info = useLoaderData()
    const {_id,category_id,rating,total_view,title,author,image_url,details} = info || {}
    return (
        <>
            <Container>
            <Row>
                <Col>
                    <h6>Dragon News</h6>
                    <img src={image_url} className='img-fluid w-100' alt="" />
                    <h5 className='mt-2 mb-2'>{title}</h5>
                    <p className='mt-3' style={{color:'gray'}}>{details}</p>
                    <button className='btn btn-danger'><Link style={{textDecoration:'none',color:'white'}} to={`/category/${category_id}`}> <i class="mx-2 fa-solid fa-arrow-left"></i> All Category News</Link></button>
                </Col>
            </Row>
        </Container>
        <Container>
            <Row>
                <EditorsInside />
            </Row>
        </Container>
        </>
    );
};

export default News;