import React from 'react';
import '../../css/app';
import '../../css/home_page';

const Home = () =>{
	return (


<div className="main-content align-center">   

  <div className="container-fluid">
    <div className="row-fluid">

			<div className="col-md-12 col-sm-12">
				<img className="center-img  center-block" src="../../app/assets/img/center.png"/>
			</div>


					<div className="col-md-6 col-sm-12 center-block text-center about">
					<h3 className="column-title">About Us</h3>
					<p className="column-text text-justify">
						Medina Tree Service, Inc. is a family owned and operated full service tree care corporation serving Eastern Massachusetts. We have <b> over 15 years of experience </b> and are fully licensed. If you are searching for a tree service company that is affordable and professional, please give us a call. 
					</p>
					</div>

					<div className="col-md-6 col-sm-12 center-block text-center about">
					<h3 className="column-title center-block">Our Services</h3>

					<div className="column-text">
						<ul className="service-list col-md-offset-3">
							<li><img className="bullet-point" src="../../app/assets/img/sprout.svg"/>Landscaping & Planting</li>
							<li><img className="bullet-point" src="../../app/assets/img/sprout.svg"/>Tree Removal & Pruning</li>
							<li><img className="bullet-point" src="../../app/assets/img/sprout.svg"/>Emergency Tree Removal</li>
							<li><img className="bullet-point" src="../../app/assets/img/sprout.svg"/>Stump Grinding</li>
							<li><img className="bullet-point" src="../../app/assets/img/sprout.svg"/>Crane Services</li>
							<li><img className="bullet-point" src="../../app/assets/img/sprout.svg"/>Snow Removal</li>
						</ul>
					</div>
				</div>
				</div>

		</div>
	</div>
		)
}


export default Home;