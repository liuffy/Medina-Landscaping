import React from 'react';
import '../../css/app';
import '../../css/contact';

const Contact = () =>{
	return (
<div className="container">   
 
		<div className="col-md-6 ">
			<h3>Contact</h3>
			<ul className="info-list">
				<li><img className="logo-pic-mini"
									src="./../app/assets/img/calendar.svg"/>
<b>Invoice/Scheduling:</b> 508-879-0900<br/>
<img className="logo-pic-mini"
									src="./../app/assets/img/phone-call.svg"/><b>General: </b> 978-333-9334
</li> 
				<li><img className="logo-pic-mini"
									src="./../app/assets/img/mail.svg"/><b>E-mail:</b> medinatreeservice@gmail.com</li>
				<li><img className="logo-pic-mini"
									src="./../app/assets/img/building.svg"/><b>Mailing Address</b>:
									Medina Tree Services, Inc.<br/>
									PO BOX 540663 <br/>
									Waltham, MA 02454</li>
			</ul>
		</div>


		<div className="col-md-6 ">
			<h3>Hours</h3>
			<ul className="info-list">
				<li><b>Mon:</b> 9 AM - 7 PM</li>
				<li><b>Tues:</b> 9 AM - 7 PM</li>
				<li><b>Wed:</b> 9 AM - 7 PM</li>
				<li><b>Thurs:</b> 9 AM - 7 PM</li>
				<li><b>Fri:</b> 9 AM - 7 PM</li>
				<li><b>Sat:</b> 12 PM - 7 PM</li>
			</ul>
		</div>

	</div>
		)
}


export default Contact;