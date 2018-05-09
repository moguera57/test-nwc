import React from 'react'
import { Link } from 'react-router-dom'

const notfound = () => (
  <div className="not-found-container">

  	<div className="not-found">
	    <p>
			Page not found.    	
	    </p>
	    <br></br>
	    <Link to='/'>Home</Link>
	</div>

  </div>
)

export default notfound

