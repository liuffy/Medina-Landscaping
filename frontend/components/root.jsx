import React from 'react';
import {  HashRouter as Router,
	// Change back to BrowserRouter for prettier URL
				  Route,
				  NavLink } from 'react-router-dom';
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
							<NavLink className="animsition-link" activeClassName="active" to="/"><li>Home</li></NavLink>
							<NavLink className="animsition-link" activeClassName="active" to="/portfolio"><li>Portfolio</li></NavLink>
							<NavLink className="animsition-link" activeClassName="active" to="/contact"><li>Contact</li></NavLink>
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
										 src='../../app/assets/img/tree.svg' /><NavLink className="animsition-link" to="/">Medina</NavLink>
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