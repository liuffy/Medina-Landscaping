import React from 'react';
import '../../css/app';
import '../../css/contact';

const Contact = () =>{
	return (
 <div className="main-content align-center">		
<div className="container-fluid">
		<div className="col-md-6 text-center">
		<h3>Contact</h3>
		<ul className="info-list">
		<li>(999) 999 - 9999</li> 
		<li>medinatree@gmail.com</li>
		<li>44 Tree Road, <br/> Waltham, MA</li>
		</ul>
		</div>

		<div className="col-md-6 text-center">
		<h3>Hours</h3>
		<ul className="info-list">
		<li>Mon: 9 AM - 7 PM</li>
		<li>Tues: 9 AM - 7 PM</li>
		<li>Wed: 9 AM - 7 PM</li>
		<li>Thurs: 9 AM - 7 PM</li>
		<li>Fri: 9 AM - 7 PM</li>
		<li>Sat: 12 PM - 7 PM</li>
		</ul>
		</div>
		<div className="col-md-8 insurance text-center">
		<h3><img className="logo-pic" src="./../app/assets/img/insurance.svg" />Insurance</h3>
		<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
		</div>
		</div>
	</div>
		)
}


export default Contact;