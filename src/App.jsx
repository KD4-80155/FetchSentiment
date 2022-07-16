import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./Styles/globalStyles.css";
import NavBar from "./Components/unitComponent/NavBar";
import Footer from "./Components/unitComponent/Footer";
import Login from "./Components/authComponent/LogIn";
import SignUp from "./Components/authComponent/SignUp";
import AuthOtp from "./Components/authComponent/AuthOtp";
import SaFpMain from "./Components/SaFrontPageUI/SaFpMain";
import CommentInput from "./Components/InputPage/CommentInput";
import TweetInput from "./Components/InputPage/TweetInput";
import CustomDataInput from "./Components/InputPage/CustomDataInput";
import ProfileMain from "./Components/ProfileComponent/ProfileMain";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<SaFpMain />} />
          <Route path="commentinput" element= {<CommentInput />} />
          <Route path="tweetinput" element={<TweetInput />} />
          <Route path="customdatainput" element={<CustomDataInput />} />

          <Route path="login" element={<Login />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="/signup/otp" element={<AuthOtp />} />
          <Route path="/user/:Id" element={<ProfileMain />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
