import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import '../../Styles/FormStyles.css';
import { changeUserAuth, setUserData } from '../../ReduxCode/Reducers';
import {DataUrl} from '../../StaticInfo';
import {  PostToApi } from '../../HelperFun/ApiReqHandler';

const LogIn = () => {

    const redirect = useNavigate();
    const [loading, setLoading] = useState(false);
    const [loggedInMes, setLoggedInMes] = useState('');

    const dispatch = useDispatch();

    let [user, setUser] = useState({ email: '', password: '' });
    const changeHandler = e => {
        const { name, value } = e.target;
        setUser((user) => ({ ...user, [name]: value }));
    };

    const loginResHandler = (res) => {
        setLoading(false)
        if (res.isUserLoggedIn && res.isCorrectPassword) {
            setUser({ email: '', password: '' })
            PostToApi(`${DataUrl}/userinfo`,{email:user.email}).then((res) => {
                if (res) {
                    dispatch(setUserData(res))
                   dispatch(changeUserAuth(true))
                    
                    redirect(`/user/${res._id}`);
                }
            })
        }
        else if (!res.isCorrectPassword && !res.isCorrectUser)
            setLoggedInMes('Enter correct email and password');
        else if (!res.isUserLoggedIn && !res.isCorrectPassword)
            setLoggedInMes('Please enter correct password')
        else
            setLoggedInMes('Something went wrong try again');

    }

    const clickHandler = (e) => {
        e.preventDefault();
        setLoading(true)
        PostToApi(`${DataUrl}/login`, user).then((res) =>  loginResHandler(res) )
            .catch((err) => setLoggedInMes('Something went wrong try again'))
    }



    return (
        <>
            <div className='auth-wrapper'>
                <form className="form">
                    <label htmlFor="email" >Email : </label>
                    <input type="email" name="email" id='email' value={user.email} onChange={changeHandler} />
                    <label htmlFor="password" > Password : </label>
                    <input type='password' name="password" id='password' value={user.password} onChange={changeHandler} />
                    <Link id='fpass' to='/forgotpassword'>Forgot your password</Link>
                    <button className="authbtn" type='submit' onClick={clickHandler}>
                        {loading ? <div className="btn-spinner"></div> : "LogIn"}

                    </button>
                    <p id="warn-message"> {loggedInMes}</p>
                    <p>Didn't have any account ?<Link className='auth-link' to='/signup'> Sign Up</Link></p>
                </form>
            </div>
        </>


    );
}

export default LogIn;