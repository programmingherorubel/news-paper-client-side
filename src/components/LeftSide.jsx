import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const LeftSide = () => {
    const [categoryData,setcategoryData] = useState([])
    useEffect(()=>{
        fetch('https://server-programmingherorubel.vercel.app/category')
        .then(res => res.json())
        .then(data => setcategoryData(data))
    },[])
    return (
        <Container>
            <Row>
                <Col>
                    <h5>All Caterogy</h5>
                    <button className='w-100 btn' style={{background:'#E7E7E7',fontWeight:'600'}}>National News</button>
                    <ul>
                        {
                            categoryData.map(singleCategory => <li key={singleCategory.id} style={{listStyle:'none',padding:'10px'}}><Link to={`/category/${singleCategory.id}`} style={{textDecoration:'none',fontWeight:600,color:'gray'}}>{singleCategory.name}</Link></li> )
                        }
                    </ul>
                </Col>
            </Row>
        </Container>
    );
};

export default LeftSide;