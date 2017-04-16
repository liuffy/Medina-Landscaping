import React from 'react';
import {  BrowserRouter as Router,
				  Route,
				  Link } from 'react-router-dom';
import '../../css/app';
import Home from './home';
import Footer from './footer';


const App = () =>{
	return(
		<div>
			<div className="page">
				<div className="top-row">
					<div className="wordmark">
						<img className="tree-logo"
								 src='../../app/assets/img/tree.svg' /><Link to="/">Medina</Link>
					 </div>

					<div className="nav-bar">
						<ul className="nav-list">
							<li className="active"><Link to="/">Home</Link></li>
							<li><a href="/portfolio">Portfolio</a></li>
							<li><a href="/contact">Contact</a></li>
						</ul>
					</div>

					
					<Home/>
				</div>
			</div>
					<Footer/>
		</div>
  		)
	}



export default App;