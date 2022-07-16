
import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { PostToApi } from '../../HelperFun/ApiReqHandler';
import { DataUrl } from '../../StaticInfo';

function SaFpPricing({ props }) {
    const redirect = useNavigate();
    const dispatch = useDispatch();

    const clickProfileHandler = (e) => {
        e.preventDefault();
        PostToApi(`${DataUrl}/userinfo`, { email: props.email, userType: e.target.name }).then((res) => {
            if (res) {
                dispatch(changeUserAuth(true))
                dispatch(setUserData(res.data))
                redirect(`/user/${res._id}`);
            } else {
                redirect("/")
            }
        }).catch((err) => { console.log(err); redirect('/signup') })

    }
    return (
        <>
            {props.status ? <h2 className="select-plan-title">Choose Your Plan: </h2> : <></>}
            <div className="pricing-container" id="pricing">


                <div className={props.status ? "click-plan" : "price-box"} name="Free" onClick={clickProfileHandler} >
                    <h4 className="price-type">Free</h4>
                    {props.status ? <></> : <button className='price-signup' onClick={() => redirect('/signup', { state: { userType: "Free" } })}> Sign Up</button>}

                    <p className="price-des">For normal user who just want basic sentiment analysis with less data..</p>
                    <ul className="price-feature-list">
                        <li>
                            <svg width="14" height="10" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9 1L4.80202 6.56902C4.61309 6.81875 4.32479 6.97491 4.01146 6.99723C3.69812 7.01956 3.3904 6.90588 3.16763 6.68549L1 4.52863" stroke="#13AA52" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                            </svg>
                            {" "}You can analysis only 100 tweets or comments
                        </li>
                        <li>
                            <svg width="14" height="10" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9 1L4.80202 6.56902C4.61309 6.81875 4.32479 6.97491 4.01146 6.99723C3.69812 7.01956 3.3904 6.90588 3.16763 6.68549L1 4.52863" stroke="#13AA52" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                            </svg>
                            {" "}up to 5MB custom data can be analysed
                        </li>
                        <li>
                            <svg width="14" height="10" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9 1L4.80202 6.56902C4.61309 6.81875 4.32479 6.97491 4.01146 6.99723C3.69812 7.01956 3.3904 6.90588 3.16763 6.68549L1 4.52863" stroke="#13AA52" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                            </svg>
                            {" "}We'll not store you're previous results
                        </li>
                    </ul>
                </div>
                <div className={props.status ? "click-plan" : "price-box"} name="Pro" onClick={clickProfileHandler}>

                    <h4 className="price-type">Pro</h4>
                    <p className="price-val">from 5,000Rs/month</p>
                    {props ? <></> : <button className='price-signup' onClick={() => redirect('/signup', { state: { userType: "Pro" } })}> Sign Up</button>
                    }
                    <p className="price-des">For intermediate user or small organisation who want good sentiment analysis with more than 5MB data</p>
                    <ul className="price-feature-list">
                        <li>
                            <svg width="14" height="10" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9 1L4.80202 6.56902C4.61309 6.81875 4.32479 6.97491 4.01146 6.99723C3.69812 7.01956 3.3904 6.90588 3.16763 6.68549L1 4.52863" stroke="#13AA52" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                            </svg>
                            {" "}You can analysis only 100 tweets or comments
                        </li>
                        <li>
                            <svg width="14" height="10" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9 1L4.80202 6.56902C4.61309 6.81875 4.32479 6.97491 4.01146 6.99723C3.69812 7.01956 3.3904 6.90588 3.16763 6.68549L1 4.52863" stroke="#13AA52" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                            </svg>
                            {" "}up to 5MB custom data can be analysed
                        </li>
                        <li>
                            <svg width="14" height="10" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9 1L4.80202 6.56902C4.61309 6.81875 4.32479 6.97491 4.01146 6.99723C3.69812 7.01956 3.3904 6.90588 3.16763 6.68549L1 4.52863" stroke="#13AA52" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                            </svg>
                            {" "}We'll not store you're previous results
                        </li>
                    </ul>

                </div>
                <div className={props.status ? "click-plan" : "price-box"} name="Premium" onClick={clickProfileHandler}>

                    <h4 className="price-type">Premium</h4>
                    <p className="price-val">from 10,000Rs/month</p>
                    {props ? <></> : <button className='price-signup' onClick={() => redirect('/signup', { state: { userType: "Premium" } })}> Sign Up</button>}

                    <p className="price-des">For advance user or medium-large organisation who want accurate sentiment analysis with more than 100MB data</p>
                    <ul className="price-feature-list">
                        <li>
                            <svg width="14" height="10" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9 1L4.80202 6.56902C4.61309 6.81875 4.32479 6.97491 4.01146 6.99723C3.69812 7.01956 3.3904 6.90588 3.16763 6.68549L1 4.52863" stroke="#13AA52" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                            </svg>
                            {" "}You can analysis only 100 tweets or comments
                        </li>
                        <li>
                            <svg width="14" height="10" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9 1L4.80202 6.56902C4.61309 6.81875 4.32479 6.97491 4.01146 6.99723C3.69812 7.01956 3.3904 6.90588 3.16763 6.68549L1 4.52863" stroke="#13AA52" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                            </svg>
                            {" "}up to 5MB custom data can be analysed
                        </li>
                        <li>
                            <svg width="14" height="10" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9 1L4.80202 6.56902C4.61309 6.81875 4.32479 6.97491 4.01146 6.99723C3.69812 7.01956 3.3904 6.90588 3.16763 6.68549L1 4.52863" stroke="#13AA52" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                            </svg>
                            {" "}We'll not store you're previous results
                        </li>
                    </ul>


                </div>
            </div>
        </>
    );
}

export default SaFpPricing;
