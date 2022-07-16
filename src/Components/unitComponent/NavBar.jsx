import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faBars, faXmark, faSearch } from '@fortawesome/free-solid-svg-icons';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../Styles/NavBar.css';
import AuthNav from './AuthNav';
import SaFpPricing from '../SaFrontPageUI/SaFpPricing';

library.add(faBars, faXmark, faSearch);

export default function NavBar() {

  const [navStatus, setNavStatus] = useState(false);

  const changeHandler = () => (navStatus) ? setNavStatus(false) : setNavStatus(true);
  let navicon = (navStatus) ? faXmark : faBars;

  return (
    <div id="nav-container">
      <nav>
        <input id="check" type="checkbox" value={navStatus} onChange={changeHandler}/>
        <label htmlFor="check" className="checkbtn">
          <FontAwesomeIcon icon={navicon}/>
        </label>
        <div>
          <Link to="/"><label className="logo">FetchSentiment</label></Link>
        </div>
        <div className="search-div">
        </div>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><a href="/#boxes">InputMethods</a></li>
          <li><a href="/#pricing" >Pricing</a></li>
          <li><Link to="/signup">SignUp</Link></li>
          <li><AuthNav/></li>
          
        </ul>
        
      </nav>
    </div>

  )
}
