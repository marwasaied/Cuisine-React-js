import React, { Component } from 'react';
import '../css/style.css';



class TopLeftBlock extends Component {
  render() {
    return (

		<div className="container">
			<div>
				<p className="paragraph">Date: 16/07/2018</p>
				<p className="paragraph">Hour: 12:53:31 PM</p>
				<p className="paragraph">Minimum Charge: 0.00</p>
			</div>

			<button type="button" className="btn-space newbtn-light float-right"><b>Customer Name</b></button>
			<h3>Takeaway #100</h3>
			<p>Cashier: Ahmed Salom</p>

			<div className="row defultbachground">
				<b><p className="content1">Qty</p></b>
				<b><p className="content2">Item</p></b>
				<b><p className="content">Size</p></b>
				<b><p className="content">Each</p></b>
				<b><p className="content">Total</p></b>
			</div>
			<p className="msg">No Item currently in Order</p>
		</div>
	);
  }
}

export default TopLeftBlock;