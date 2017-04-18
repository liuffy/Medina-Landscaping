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

		<div className="col-md-6 insurance  text-justify">
			<h3>FAQs</h3>
			<ol>
			<li><b>How much does it cost for an estimate?</b><br/>
	Estimates are free.</li>

<li><b>How long does it take to receive estimate?</b><br/>
	Written estimates take 1-2 business days.</li>

<li><b>What areas do you service?</b><br/>
	We service all of Eastern Massachusetts.</li> 

<li><b>Are you insured?</b><br/>
	Yes, we are fully insured to perform work in Massachusetts. We can provide certificates of insurance upon request. </li>
<li><b>What payment methods are accepted?</b><br/> 
	We accept cash or check.</li>

			</ol>
		</div>		

		<div className="col-md-6 insurance  text-justify">
			<h3><img className="logo-pic" src="./../app/assets/img/insurance.svg" />Insurance</h3>
			<p>Standard homeowners policies generally help protect trees, shrubs and plants against specific perils such as fire, lightning, explosion, vandalism, riot, theft, and damage caused by someone else's vehicle.
				We are fully insured to perform work in Massachusetts and can provide certificates of insurance upon request.</p>
		</div>

	</div>
		)
}


export default Contact;