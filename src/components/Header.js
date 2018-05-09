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
            <li className="logo"><Link to='/'><h2>ORLANDO</h2></Link></li>
            <li><Link to='/targetedindustries'>Targeted Industries</Link></li>
            <li><Link to='/incentives'>Incentives and Programs</Link></li>
            <li><Link to='/qualityoflife'>Quality of Life</Link></li>
            <li><Link to='/projects'>Hot Projects</Link></li>
            <li><Link to='/sustainability'>Sustainability</Link></li>
            <li><Link to='/workforce'>Workforce</Link></li>
            <li><Link to='/education'>Education</Link></li>
            <li><Link to='/infrastructure'>Infrastructure</Link></li>
            <li><Link to='/partneragencies'>Partner Agencies</Link></li>
          </ul>

          <div id="mobile-button" onClick={this.menuToggle}>
            <span className="hamburger-menu">
              <div className="mob-menu-icon"></div>
              <div className="mob-menu-icon"></div>
              <div className="mob-menu-icon"></div>
            </span>
          </div>

          <h2 className="mobile-header"><Link to='/'>ORLANDO</Link></h2>

          <div className="mobile-menu">
            <ul>
              <li><Link to='/targetedindustries' onClick={this.menuToggle}>Targeted Industries</Link></li>
              <li><Link to='/incentives' onClick={this.menuToggle}>Incentives and Programs</Link></li>
              <li><Link to='/qualityoflife' onClick={this.menuToggle}>Quality of Life</Link></li>
              <li><Link to='/projects' onClick={this.menuToggle}>Hot Projects</Link></li>
              <li><Link to='/sustainability' onClick={this.menuToggle}>Sustainability</Link></li>
              <li><Link to='/workforce' onClick={this.menuToggle}>Workforce</Link></li>
              <li><Link to='/education' onClick={this.menuToggle}>Education</Link></li>
              <li><Link to='/infrastructure' onClick={this.menuToggle}>Infrastructure</Link></li>
              <li><Link to='/partneragencies' onClick={this.menuToggle}>Partner Agencies</Link></li>
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
