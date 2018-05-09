import React, {Component} from 'react'
import VenueAPI from './api'
import { Link } from 'react-router-dom'

class Home extends Component {

render(){
	return(
		<div className='home-content'>
			<div className="home-header-container">
				<h1>This is Orlando</h1>
			</div>

			{
				VenueAPI.homepage[0].hasOwnProperty('vidbackground') &&
					<video className="videoBG" src={VenueAPI.homepage[0].vidbackground} poster={VenueAPI.homepage[0].vidposter} muted autoPlay loop />
			}

			{
				VenueAPI.homepage[0].hasOwnProperty('imgbackground') &&
					<div style={{backgroundImage: `url(${VenueAPI.homepage[0].imgbackground})`,}} className="full-bg"/>
			}

			<h3 className='exploreBtn'><Link to='/targetedindustries'>Explore Orlando</Link></h3>
		</div>
		)
	}
}

export default Home
