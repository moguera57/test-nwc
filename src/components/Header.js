import React, {Component} from 'react'
import { Link } from 'react-router-dom'

// The Header creates links that can be used to navigate
// between routes.
export class Header extends Component{
  
  render() {

  return(
      <header>
        <nav>
          <ul className="navigation">
            <li className="logo"><Link to={`/${process.env.PUBLIC_URL}/`}><h2>ORLANDO</h2></Link></li>
            <li><Link to={`/${process.env.PUBLIC_URL}/targetedindustries`}>Targeted Industries</Link></li>
            <li><Link to={`/${process.env.PUBLIC_URL}/incentives`}>Incentives and Programs</Link></li>
            <li><Link to={`/${process.env.PUBLIC_URL}/qualityoflife`}>Quality of Life</Link></li>
            <li><Link to={`/${process.env.PUBLIC_URL}/projects`}>Hot Projects</Link></li>
            <li><Link to={`/${process.env.PUBLIC_URL}/sustainability`}>Sustainability</Link></li>
            <li><Link to={`/${process.env.PUBLIC_URL}/workforce`}>Workforce</Link></li>
            <li><Link to={`/${process.env.PUBLIC_URL}/education`}>Education</Link></li>
            <li><Link to={`/${process.env.PUBLIC_URL}/infrastructure`}>Infrastructure</Link></li>
            <li><Link to={`/${process.env.PUBLIC_URL}/partneragencies`}>Partner Agencies</Link></li>
          </ul>

          <div id="mobile-button" onClick={this.menuToggle}>
            <span className="hamburger-menu">
              <div className="mob-menu-icon"></div>
              <div className="mob-menu-icon"></div>
              <div className="mob-menu-icon"></div>
            </span>
          </div>

          <h2 className="mobile-header"><Link to={`/${process.env.PUBLIC_URL}/`}>ORLANDO</Link></h2>

          <div className="mobile-menu">
            <ul>
            <li><Link to={`/${process.env.PUBLIC_URL}/targetedindustries`}>Targeted Industries</Link></li>
            <li><Link to={`/${process.env.PUBLIC_URL}/incentives`}>Incentives and Programs</Link></li>
            <li><Link to={`/${process.env.PUBLIC_URL}/qualityoflife`}>Quality of Life</Link></li>
            <li><Link to={`/${process.env.PUBLIC_URL}/projects`}>Hot Projects</Link></li>
            <li><Link to={`/${process.env.PUBLIC_URL}/sustainability`}>Sustainability</Link></li>
            <li><Link to={`/${process.env.PUBLIC_URL}/workforce`}>Workforce</Link></li>
            <li><Link to={`/${process.env.PUBLIC_URL}/education`}>Education</Link></li>
            <li><Link to={`/${process.env.PUBLIC_URL}/infrastructure`}>Infrastructure</Link></li>
            <li><Link to={`/${process.env.PUBLIC_URL}/partneragencies`}>Partner Agencies</Link></li>            
            </ul>
          </div>
        </nav>
        
        <div className="progress"/>

      </header>


    );
  }

  menuToggle() {
    let mobMenu = document.querySelector(".mobile-menu");
    //let sidebarMenu = document.querySelector("#sidebar-mobile-button");

    if (mobMenu.style.display === "block"){
      mobMenu.style.display = "none";
      //sidebarMenu.style.zIndex = "1";
      document.body.style.overflow="scroll";
    }
    else{
      mobMenu.style.display = "block";
      //sidebarMenu.style.zIndex = "-1";
      document.body.style.overflow="hidden";
    }
  }

}

export default Header
