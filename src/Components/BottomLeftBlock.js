import React, { Component } from 'react';
import '../css/style.css';



class BottomLeftBlock extends Component {
  render() {
    return (

		<div className="grad">
			<div className="empty">
				<button type="button" className="btn-light btn-circle"> 
					<img src="https://png.icons8.com/android/10/bb1b1d/plus.png"/>
				</button>
			</div>

			<div className="empty1 col-lg-12">
				<div className="defultbachground">
					
					<button type="button" className="btn-circle btn-xl"> 
						<img src="https://png.icons8.com/ios/40/e79914/flash-on-filled.png"/>
						<b><p className="btnfast">Fast Cash</p></b>
					</button>

					<div className="col-lg-9">
						<div className="row">

							<div className="col-lg-6">
								<p className="paragraph1">Discounts: 0.00</p>
								<p className="paragraph1">Subcharges: 0.00</p>
								<p className="paragraph1">Tax: 0.00</p>	
							</div>
							
							<div className="col-lg-6">
								<b><p className="total">Total : 50.00</p></b>
								<b><p>Balance Due: 50.00</p></b>
							</div>		
						</div>			
					</div>	
				</div>

								
				<div>
					<button type="button" className="btn-circle btn-xl"> 
						<b><img className="deletesign" src="https://png.icons8.com/ios/30/f12e23/delete-sign-filled.png"/></b>
						<b><p className="btn-font">Cancel Order</p></b>
					</button>

					<button type="button" className="btn-circle btn-xl"> 
						<img className="percentsign" src="https://png.icons8.com/metro/30/f12e23/percentage.png"/>
						<b><p className="btn-font">Discount Order</p></b>
					</button>

					<button type="button" className="btn-circle btn-xl"> 
						<img className="clocksign" src="https://png.icons8.com/material-outlined/30/f12e23/clock.png"/>
						<b><p className="btn-font">Hold Order</p></b>
					</button>

					<button type="button" className="activebtn"> 
						<img className="dollarsig" src="https://png.icons8.com/metro/30/ffffff/us-dollar.png"/>
						<b><p className="activefont">Pay</p></b>
					</button>
				</div>
			</div>
		</div>
	    	
    );
  }
}

export default BottomLeftBlock;
