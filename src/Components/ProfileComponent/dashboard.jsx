import React from "react";
import "../../Styles/Profile.css";
import { AiFillSetting } from "react-icons/ai";

export default function Dashboard() {
  return (
    <div className="main-container">
      <div className="main-section">
        <div className="side-nav">
          <div className="profile-image">
            <div id="img">KM</div>
            <div className="name">Kunal Markam</div>
          </div>
          <ul>
            <li className="profile-list">View Public Profile</li>
            <li className="profile-list">Profile</li>
            <li className="profile-list">Photo</li>
            <li className="profile-list">Pricing</li>
            <li className="profile-list">Close Account</li>
          </ul>
          <div className="down">
              <div className="set"><AiFillSetting className="set-icon"/>Setting</div>
              <div className="hlp">Help</div>
          </div>
        </div>
        <div id="form-wrapper">
          <div id="prev-his"><span className="his">Previous History</span>Empty</div>
          <div className="payment"><span className="his">Payment Status</span>Inactive</div>
        </div>
      </div>
    </div>
  );
}
