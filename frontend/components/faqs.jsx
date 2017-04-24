import React from 'react';
import '../../css/app';
import '../../css/contact';

const Faqs = () =>{
	return (
<div className="container">   
 

		<div className="col-md-6 insurance  text-justify">
			<h3>FAQs</h3>
			<ol>
			<li><b>How much does it cost for an estimate?</b><br/>
	Estimates are free.</li>

<li><b>How long does it take to receive the estimate?</b><br/>
	Written estimates take 1-2 business days.</li>

<li><b>What areas do you service?</b><br/>
	We service all of Eastern Massachusetts.</li> 

<li><b>Are you insured?</b><br/>
	Yes, we are fully insured to perform work in Massachusetts. We can provide certificates of insurance upon request. </li>
<li><b>What payment methods are accepted?</b><br/> 
	We accept cash or check.</li>

	<li><b>What is your mailing address?</b><br/>
	Medina Tree Services, Inc.<br/>
	PO BOX 540663<br/>
	Waltham, MA 02454</li>

			</ol>
		</div>		

		<div className="col-md-6 insurance  text-justify">
			<h3><img className="logo-pic" src="./../app/assets/img/insurance.svg" />Insurance</h3>
			<p>
				<a className="doc-link" href="http://res.cloudinary.com/liuffy/image/upload/v1493001253/Medina_Tree_Services_Inc_GL_COI_Medina_zjtber.pdf" target="_blank">View Liability Insurance certificate</a>	<br/>

				<br/>Please let us know if you would like to receive liability or workers’ compensation certificates from our insurance agency. These usually take 1-2 business days to process. </p>
		</div>
		</div>

		)
}


export default Faqs;