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
		</div>
		)
}


export default Home;