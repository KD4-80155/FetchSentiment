import React from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { Link,useNavigate } from 'react-router-dom';
import {changeUserAuth} from '../../ReduxCode/Reducers';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import {DataUrl} from '../../StaticInfo';
import { PostToApi } from '../../HelperFun/ApiReqHandler';

const AuthNav=()=>{
    
    const redirect=useNavigate();
    const UserAuthObj=useSelector((state)=>state.userAuth);
    console.log(UserAuthObj);

    const clickLogoutHandler=(e)=>{
        e.preventDefault()
        PostToApi(`${DataUrl}/logout`).then((res)=>{
                if(res.data.isUserLoggedOut){
                    alert('user succesfully Logged-out')  
                    useDispatch(changeUserAuth(false))
                    redirect('/') 
                }
                else
                    alert('something went wrong try again');

            }).catch((err)=>{
                    alert('something went wrong try again');
                    console.warn(err)
                })
            

    }
    
    const userUrl= UserAuthObj.value ? `/user/${UserAuthObj.userData._id}` : '/' ;

    return ( 
        <>
        {
            (UserAuthObj.value)
            ?
            <div id="authnav">
            <p onClick={clickLogoutHandler} className='nav-logout'>LogOut</p>
            <p className='nav-user-icon-div'>
            <Link to={userUrl}> <span><FontAwesomeIcon icon={faUserCircle} size="2xl" /></span></Link>
            </p>
            </div>   
            :
            <Link className='nav-logout' to='/login'>LogIn</Link>
        }
        </>

     );


}

export default AuthNav;