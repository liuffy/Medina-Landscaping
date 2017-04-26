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
					<div className="row">
						<img className="about-icon" src="../../app/assets/img/smile1.svg"/>
						<img className="about-icon" src="../../app/assets/img/smile2.svg"/>
					</div>
					<p className="text-justify about-text">
						Medina Tree Service, Inc. is a family owned and operated full service tree care corporation serving Eastern Massachusetts. We have <b> over 15 years of experience </b> and are fully licensed. If you are searching for a tree service company that is affordable and professional, please give us a call. 
					</p>
					</div>

					<div className="col-md-6 col-sm-12 center-block text-center about">
					<h3 className="column-title center-block">Our Services</h3>
					<div className="row">
						<img className="about-icon" src="../../app/assets/img/helmet.svg"/>
					</div>

					<div className="column-text">
						<ul className="service-list">
							<li>Tree Removal & Pruning</li>
							<li>Emergency Tree Removal</li>
							<li>Stump Removal</li>
						</ul>
						<ul className="service-list">
							<li>Landscaping & Planting</li>
							<li>Crane Services</li>
							<li>Snow Removal</li>
						</ul>
					</div>
				</div>
				</div>

		</div>
	</div>
		)
}


export default Home;