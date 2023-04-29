import React, { useContext } from 'react';
import swimmin from '../assets/qZone1.png'
import classs from '../assets/qZone2.png'
import ground from '../assets/qZone3.png'
import { AuthContext } from '../prodivder/AuthProvider';

const RightSite = () => {
    const {singInWithGoogle} = useContext(AuthContext)
    const googleLogin = ()=>{
        singInWithGoogle()
    }
    return (
        <>
            <h5> Login With </h5>
                    <button className='btn bg-light mt-3' onClick={()=>googleLogin()}><i className="mx-3 fa-brands fa-google "></i>Login With Google</button>
                    <button className='btn bg-light mt-3'><i className="mx-3 fa-brands fa-twitter "></i>Login With Twitter</button>
                    <h5 className='m-3'>Find Us On</h5>
                    <ul className="list-group">
                        <li className="list-group-item mx-2 mt-2"><i className="mx-2 fa-brands fa-facebook"></i>Facebook</li>
                        <li className="list-group-item mx-2 mt-2"><i className="mx-2 fa-brands fa-instagram"></i>Instagram</li>
                        <li className="list-group-item mx-2 mt-2"><i className="mx-2 fa-brands fa-pinterest"></i>Pinterest</li>
                    </ul>
                    <div className='imgFeatcher'>
                        <div>
                            <img src={swimmin} alt="" />
                            <img src={classs} alt="" />
                            <img src={ground} alt="" />
                        </div>
                    </div>
        </>
    );
};

export default RightSite;