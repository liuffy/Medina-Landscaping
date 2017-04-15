import React from 'react';
import '../../css/app';
import '../../css/home_page';


const Home = () =>{
	return (
		<div>
			<div className="center">
				<div className="center-text">
					<h1 className="center-title">Medina Tree Services</h1>
					<h2 className="center-subtitle">Landscaping + Tree & Snow Removal</h2>
				</div>
				<img className="center-img" 
						 src="../../app/assets/img/center.svg"/>
			</div>
				<div className="home-content">

					<div className="home-column">
					<h3 className="column-title">About Us</h3>
					<p className="column-text">
						We are based in Waltham and have served the greater Boston community for over 10 years.
					</p>
					</div>

					<div className="home-column">
					<h3 className="column-title">Our Services</h3>
					<p className="column-text">
						Our services include landscaping, tree removal, and snow removal.
					</p>
					</div>

				</div>
		</div>
		)
}


export default Home;