import React from 'react';
import { useSelector } from 'react-redux';
import Dashborad from './dashboard';
import "../../Styles/Profile.css";
import Dashboard from './dashboard';


const ProfileMain=()=> {
    const profile={name:"arjun"} || useSelector((s)=>s.authContext.userData.userAccData) ;
    return ( 
        <>
        <Dashboard/>
        </>
     );
    ;
}

export default ProfileMain;