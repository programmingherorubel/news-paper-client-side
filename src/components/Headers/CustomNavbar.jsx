import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../prodivder/AuthProvider';

const CustomNavbar = () => {
    const {user,logout} = useContext(AuthContext)
    
    return (
        <>
            <div style={{display:'flex'}} className='p-3'>
                        <ul className='mx-auto d-flex gap-4'>
                            <li style={{listStyle:'none'}}><Link style={{textDecoration:'none',color:'black',fontWeight:'600'}} to='/'>Home</Link></li>
                            <li style={{listStyle:'none'}}><Link style={{textDecoration:'none',color:'black',fontWeight:'600'}} to='/about'>About</Link></li>
                            <li style={{listStyle:'none'}}><Link style={{textDecoration:'none',color:'black',fontWeight:'600'}} to='#'>Career</Link></li>
                        </ul>
                        <div style={{display:'flex',justifyContent:'flex-end',marginRight:'0 auto'}}>
                            {
                                
                            }
                            {
                                user?.email ? <h6 style={{color:'red',fontWeight:'700',cursor:'pointer'}} onClick={logout}>Logout</h6> : <Link style={{textDecoration:'none',color:'black'}} to='/login'><h6>Login</h6></Link>
                            }
                        </div>
            </div>   
        </>
    );
};

export default CustomNavbar;