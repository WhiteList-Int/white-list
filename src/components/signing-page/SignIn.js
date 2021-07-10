import React from 'react';
import {Link} from 'react-router-dom';
import ReactDom  from 'react-dom';
import gsign from '../images/btn_google_signin_light_normal_web@2x.png';
import './Sign-in.css';

export default function SignIn({open, onClose}) {
    if(!open) return null;

    return ReactDom.createPortal(
        <> 
            {document.body.setAttribute('style','overflow:hidden;')}
            <div className="sign-in">
                <div className='exit-zone' onClick={onClose}></div>
                <div className="sign-in-container">
                    <div className="sign-in-title">
                        <h1>Login</h1>
                    </div>
                    <div className="fill-boxes">
                        <input className="" type="text" value="Username" required/>
                        <input className="" type="password" value="************" required/>
                    </div>
                    <div className="sign-in-buttons">
                        <Link to="/" className='sign-in-link'>Sign-in</Link>
                        <img src={gsign} alt='gsign'/>
                    </div>
                    <div className="sign-in-footer">
                        <Link to="/" className='sign-up-link'>Not yet registered?</Link>
                    </div>
                </div>
            </div>
        </>,
        document.getElementById('sign-in-pop-up')
    )
}
