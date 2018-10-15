import React, { Component } from 'react';
import '../css/style.css';



class Menu extends Component {
  render() {
    return (

			<div className="newrow">
				<a className="newdropdown-item active food" href="#">Food
					<div className="arrow-up"></div>
				</a>
				<a className="newdropdown-item beverage" href="#">Beverage</a>
				<a className="newdropdown-item beverage" href="#">Marchandise</a>
				<a className="newdropdown-item beverage" href="#">Meal</a>
				<a className="newnavbar-dark extra">
					<span className="newnavbar-toggler-icon"></span>
			  	</a>
			</div>
	    	
    );
  }
}

export default Menu;
