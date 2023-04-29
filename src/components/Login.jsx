import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import CustomNavbar from './Headers/CustomNavbar';
import { useState } from 'react';
import { useContext } from 'react';
import { AuthContext } from '../prodivder/AuthProvider';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Login = () => {
    const {LoginUser,error} = useContext(AuthContext)
    const [update,setUpdate] = useState({})
    const location = useLocation()
    const navigate = useNavigate()
    console.log(location)
    const from = location.state?.from?.pathname || '/' 
    console.log(from)
    const onchangeHandeler = e =>{
        const field = e.target.name;
        const value = e.target.value;
        const newValue = {...update}
        newValue[field] = value
        setUpdate(newValue)
    }
    const onSubmitHandeler = e =>{ 
            e.preventDefault()
            LoginUser(update.email,update.password)
        navigate(from,{replace:true})
    }
    return (
        <Container fluid style={{background:'rgb(248, 248, 248)',height:'100vh'}}>
            <Row>
                <CustomNavbar />
                <Col md={6} className='mx-auto'>
                <form onSubmit={onSubmitHandeler}>
                        <h4 className='text-center'>Login Your Account</h4>
                        <div className='mt-3'>
                            <b>Email</b>
                            <input onChange={onchangeHandeler} required className='form-control  p-3 border border-0'name='email' />
                        </div>
                        <div className='mt-3'>
                            <b>Password</b>
                            <input onChange={onchangeHandeler}required className='form-control  p-3 border border-0'name='password' />
                        </div>
                        <button type='submit' className='btn w-100 text-white mt-5' style={{background:'tomato'}}>Login</button>
                        <small>Dont’t Have An Account ? <Link to='/reg'>Register</Link></small>
                        {
                            error && <h6 className='text-danger text-center'>{error}</h6>
                        }
                    </form>
                </Col>
            </Row>
        </Container>
    );
};

export default Login;