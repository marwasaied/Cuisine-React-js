import React, { Component } from 'react';
import Image from '../img/cuisine.png';
import '../css/style.css';



class Nav extends Component {
  render() {
    return (

    	<nav className="row roww bord">

    		<div className="col-lg-5">
		 		<div className="col-lg-3">
		 			<img className="img-fluid" src={Image}/>
		 		</div>
		 	</div>

		 	<div className="col-lg-7">
	          <button type="button" className="btn-space btn-color">Business Day/Shift</button>
	          <button type="button" className="dropdown-toggle btn-space btn-color" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true"aria-expanded="false">MODE: Takeawy</button>
	          <button type="button" className="btn-space btn-color">Order Queue</button>
	          <button type="button" className="btn-space btn-color">Admin</button>
	        </div>

       	</nav>

	    	
    );
  }
}

export default Nav;
