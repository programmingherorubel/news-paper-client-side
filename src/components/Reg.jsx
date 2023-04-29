import React, { useContext, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { AuthContext } from '../prodivder/AuthProvider';
import CustomNavbar from './Headers/CustomNavbar';

const Reg = () => {
    const {registerUser,error} = useContext(AuthContext)
    const [update,setUpdate] = useState({})
    const onchangeHandeler = e =>{
        const field = e.target.name;
        const value = e.target.value;
        const newValue = {...update}
        newValue[field] = value
        setUpdate(newValue)
    }
    const onSubmitHandeler = e =>{
            e.preventDefault()
        registerUser(update.email,update.password,update.name,update.url)
        // navigate('/')
    }
    return (
        <Container fluid style={{background:'rgb(248, 248, 248)',height:'100vh'}}>
            <Row>
                <CustomNavbar />
                <Col md={6} className='mx-auto'>
                    <form onSubmit={onSubmitHandeler}>
                        <h4 className='text-center'>Register Your Account</h4>
                        <div className='mt-3'>
                            <b>Your Name</b>
                            <input onChange={onchangeHandeler} required className='form-control  p-3 border border-0'name='name' />
                        </div>
                        <div className='mt-3'>
                            <b>Photo Url</b>
                            <input onChange={onchangeHandeler} required className='form-control  p-3 border border-0'name='url' />
                        </div>
                        <div className='mt-3'>
                            <b>Email</b>
                            <input onChange={onchangeHandeler} required className='form-control  p-3 border border-0'name='email' />
                        </div>
                        <div className='mt-3'>
                            <b>Password</b>
                            <input onChange={onchangeHandeler}required className='form-control  p-3 border border-0'name='password' />
                        </div>
                        <button type='submit' className='btn w-100 text-white mt-5' style={{background:'tomato'}}>Register</button>
                        {
                            error && <h6 className='text-danger text-center'>{error}</h6>
                        }
                    </form>
                </Col>
            </Row>
        </Container>
    );
};

export default Reg;