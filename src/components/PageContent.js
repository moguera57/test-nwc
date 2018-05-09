import React, {Component} from 'react'
import VenueAPI from './api'
import Sidebar from './Sidebar'
import down from "./assets/img/icon_downarrow.png"
import { HashLink as Link } from 'react-router-hash-link';
import smoothscroll from 'smoothscroll-polyfill';

smoothscroll.polyfill();
class PageContent extends Component {


componentDidMount() {window.scrollTo(0, 0)}

render(){

	return(
		<div>

			<Sidebar pageSection={this.props.pageSection}/>

			<ul className="container">      			
				{
					VenueAPI.all(this.props.pageSection).map(v => (

					<li key={v.url} className="subsection" >

						<div style={{backgroundImage: `url(${v.pageimg})`,}} className="bg">
					        
							<div style={{background: `linear-gradient(to bottom right, ${v.gradient[0]}, ${v.gradient[1]} 100%)`,}} className="overlay"/>

					  		<div className='subsection-header' id={v.url}>
				        		<div>
					        		<h1>{v.name}</h1>
					        		<Link smooth to={"#"+v.url+"-content"}><img className="arrow-down" alt="Scroll Down" src={down}/></Link>
					        	</div>
				        	</div>

				        	<div className="subsection-content">
				        		
				        		<span className="target" id={v.url+"-content"} />

				        		<div className="content">

				        			<div className="flex-box">

					        			{v.hasOwnProperty('description') && (v.hasOwnProperty('video')||v.hasOwnProperty('midimg')) &&

						        			<div className="half-divider">
							        			<div className="text-container">{v.description}</div>
						        			</div>
					        			}

					        			{v.hasOwnProperty('description') && ((v.hasOwnProperty('video')===false)&&(v.hasOwnProperty('midimg')===false)) &&

						        			<div className="full-width-text">
							        			<div className="text-container">{v.description}</div>
						        			</div>
					        			}

					        			{v.hasOwnProperty('video') && 

						        			<div className="half-divider">
							        			<div className="video-container">
							        				<video muted controls poster="" loop src={v.video} />
							        			</div>
							        		</div>
					        			}

					        			{v.hasOwnProperty('midimg') &&

					        				<div className="half-divider">
							        			<div className="midimg-container">
							        				<img alt="" src={v.midimg} />
							        			</div>
						        			</div>
					        			}

					        		</div>

				        			{v.hasOwnProperty('statistic') &&
				        				
					        			<div className="stats-container">

						        			{v.statistic.map((stats) =>
						        				<div key={stats.id} className="half-divider">
							        				<div className="statistic">

								        				{stats.hasOwnProperty('img') &&
								        					<img alt="" width={stats.size} src={stats.img}/> }
								        			
								        				{stats.hasOwnProperty('text') &&
								        					<div>{stats.text}</div>	}
							        				
							        				</div>

							        			</div>
					        				)}
										</div>
				        			}
				        			
				            	</div>
				        	</div>
				        </div>
				    </li>
					))
				}
		    </ul>
		</div>
		)
	}
}

export default PageContent