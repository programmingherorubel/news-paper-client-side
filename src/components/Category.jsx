import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useLoaderData, useParams } from 'react-router-dom';
import NewsCard from './NewsCard';

const Category = () => {
    const categoryData = useLoaderData()
    const {id} = useParams()
    
    return (
        <Container>
            <Row>
                <Col>
                    {
                        categoryData?.map(category => <NewsCard category={category} key={category._id}></NewsCard>)
                    }
                </Col>
            </Row>
        </Container>
    );
};

export default Category;