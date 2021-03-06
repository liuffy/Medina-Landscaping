import React from 'react';
import '../../css/app';
import '../../css/contact';



const Contact = () =>{
	return (
<div className="container">   
 
		<div className="col-md-5 col-md-offset-1 col-sm-8 col-sm-offset-1 ">
			<h3>Contact</h3>
			<ul className="info-list">
				<li><img className="logo-pic-mini"
									src="./../app/assets/img/calendar.svg"/>
<b>Office:</b> (508) 879-0900 <br/>(Best for for scheduling estimates or invoice questions)<br/>
<img className="logo-pic-mini"
									src="./../app/assets/img/phone-call.svg"/><b>Cell: </b> (978) 333-9334
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

		 <div className="col-md-5 col-md-offset-1 col-sm-8 col-sm-offset-1 form-wrapper contactform">
              <h4 className="margin-0 text-1-opacity">Need Estimate? Get in Touch Below!</h4>
              <form action="https://formspree.io/medinatreeservice@gmail.com"
                  method="POST"
                  id="contact-form">
                <div className="form-group name">
                  <label htmlFor="input-name">Your name</label>
                  <input type="text" name="Name" id="input-name" className="form-control" required/>
                </div>
                <div className="form-group email">
                  <label htmlFor="email">Your e-mail</label>
                  <input type="text" name="Email" id="email" className="form-control" required/>
                </div>             

                <div className="form-group phone">
                  <label htmlFor="phone">Your phone number</label>
                  <input type="text" name="Phone" id="phone" className="form-control" required/>
                </div>

               <div className="form-group address">
                  <label htmlFor="address">Your address</label>
                  <input type="text" name="Address" id="address" className="form-control" required/>
                </div>

                <div className="form-group text-area message">
                  <label htmlFor="message">What services do you need?</label>
                  <textarea 
                  placeholder="Ex: Landscaping, Planting,  Tree Removal & Pruning, Emergency Tree Removal, Stump Grinding, Crane Services, Snow Removal"
                  rows="3" name="Service request" id="message" className="scroll form-control" required></textarea>
                </div>
                <button type="submit" className="btn btn-primary submit-btn">Send request</button>
              </form>
              <div className="contact-help-block"></div>
            </div>

	</div>
		)
}


export default Contact;