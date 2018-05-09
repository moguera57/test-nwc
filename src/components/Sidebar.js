import React, {Component} from 'react'
import VenueAPI from './api'
import { HashLink as Link } from 'react-router-hash-link';

class Sidebar extends Component {

render(){
	return(

		<div>
			<div className="sidebar">
				<ul>
					{
						VenueAPI.all(this.props.pageSection).map(v => (
							<li id={v.url+"-link"} key={v.url+"-link"}><Link smooth to={"#"+v.url}>

								{v.navlink}
							
							</Link></li>
						))
					}
				</ul>
			</div>

			<div id="sidebar-mobile-button" onClick={this.menuToggle}>
	            <div className="mob-menu-icon"></div>
                <div className="mob-menu-icon"></div>
                <div className="mob-menu-icon"></div>
	        </div>

	        <div className="sidebar-mobile">
				<ul>
					{
						VenueAPI.all(this.props.pageSection).map(v => (
							<li id={v.url+"-link"} key={v.url+"-link"}><Link smooth to={"#"+v.url} onClick={this.menuToggle}>

								{v.name}
							
							</Link></li>
						))
					}
				</ul>
			</div>

	    </div>
		)
	}

	menuToggle() {
	    let mobMenu = document.querySelector(".sidebar-mobile");
	    let sidebarMenu = document.querySelector("#sidebar-mobile-button");

	    if (mobMenu.style.display === "block"){
	      mobMenu.style.display = "none";
	      sidebarMenu.style.zIndex = "-1";
	      document.body.style.overflow="scroll";
	    }
	    else{
	      mobMenu.style.display = "block";
	      sidebarMenu.style.zIndex = "1";
	      document.body.style.overflow="hidden";
	    }
	}
}

export default Sidebar