import React from 'react';
import {  BrowserRouter as Router,
				  Route,
				  Link } from 'react-router-dom';
import App from './app';
import '../../css/app';
import Home from './home';
import Footer from './footer';
import Portfolio from './portfolio';
import Contact from './contact';


const NavBar = () => {
	return(
			<div className="nav-bar">
						<ul className="nav-list">
							<Link to="/"><li className="active">Home</li></Link>
							<Link to="/portfolio"><li>Portfolio</li></Link>
							<Link to="/contact"><li>Contact</li></Link>
						</ul>
					</div>)
}
const Root = () => {
  return(
		  <Router >
			  <div>
					<div className="page">
						<div className="top-row">
							<div className="wordmark">
								<img className="tree-logo"
										 src='../../app/assets/img/tree.svg' /><Link to="/">Medina</Link>
							 </div>

							<NavBar/>
						</div>
	    	 <Route exact path="/" component = { Home }/>
	    	 <Route exact path="/portfolio" component={ Portfolio }/>
	    	 <Route exact path="/contact" component={ Contact }/>
				</div>
					<Footer/> 
    	 </div>
  	  </Router>
  );
};

export default Root;