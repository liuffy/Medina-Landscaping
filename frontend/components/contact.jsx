import React from 'react';
import '../../css/app';
import '../../css/contact';

const Contact = () =>{
	return (
 <div className="main-content align-center padded">		
<div className="container-fluid">
		<div className="col-md-6 text-center">
		<h3>Contact</h3>
		<ul className="info-list">
		<li><img className="logo-pic-mini"
							src="./../app/assets/img/phone-call.svg"/>(999) 999 - 9999</li> 
		<li><img className="logo-pic-mini"
							src="./../app/assets/img/mail.svg"/>medinatree@gmail.com</li>
		<li><img className="logo-pic-mini"
							src="./../app/assets/img/building.svg"/>44 Tree Road, Waltham, MA</li>
		</ul>
		</div>

		<div className="col-md-6 text-center">
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
		<div className="col-md-12 insurance text-center">
		<h3><img className="logo-pic" src="./../app/assets/img/insurance.svg" />Insurance</h3>
		<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
		</div>
		</div>
	</div>
		)
}


export default Contact;