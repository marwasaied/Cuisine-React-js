import React, { Component } from 'react';
import '../css/style.css';



class SubMenu extends Component {
  render() {
    return (

			<div className="table newrow">
				<h8 className="inabutton foodcontent"  href="#">Breads</h8>
				<h8 className="abutton foodcontent"  href="#">Pastas</h8>
				<h8 className="inabutton foodcontent"  href="#">Pizzas</h8>
				<h8 className="inabutton foodcontent"  href="#">Soups</h8>
				<h8 className="inabutton foodcontent navbar-darkk" href="#">
					<span className="navbar-toggler-iconn"></span>
			  	</h8>
			</div>

	    	
    );
  }
}

export default SubMenu;
