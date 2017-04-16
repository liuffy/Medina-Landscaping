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

					<div className="nav-bar">
						<ul className="nav-list">
							<li className="active"><Link to="/">Home</Link></li>
							<li><Link to="/portfolio">Portfolio</Link></li>
							<li><Link to="/contact">Contact</Link></li>
						</ul>
					</div>

					
				</div>
			</div>
	    	 <Route exact path="/" component = { Home }/>
	    	 <Route path="/portfolio" component={ Portfolio }/>
	    	 <Route path="/contact" component={ Contact }/>
					<Footer/>
    	 </div>
  	  </Router>
  );
};

export default Root;