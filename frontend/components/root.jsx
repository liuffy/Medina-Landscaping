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
import Faqs from './faqs';


const NavBar = () => {

	return(
<nav className="navbar navbar-default">
		<div className="container-fluid">
				<div className="navbar-header">
				<button type="button" 
						className="navbar-toggle collapsed" 
						data-toggle="collapse" 
						data-target="#bs-example-navbar-collapse-1" 
						aria-expanded="false">
				  <span className="sr-only">Toggle navigation</span>
				  <span className="icon-bar"></span>
				  <span className="icon-bar"></span>
				  <span className="icon-bar"></span>
				</button>
				</div>

				<div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
				<ul className="nav navbar-nav">
			        <NavLink className="animsition-link" activeClassName="active" to="/"><li>Home</li></NavLink>
				      <NavLink className="animsition-link" activeClassName="active" to="/gallery"><li>Gallery</li></NavLink>
				      <NavLink className="animsition-link" activeClassName="active" to="/faqs"><li>FAQs</li></NavLink>
				      <NavLink className="animsition-link contact" activeClassName="active" to="/contact"><li>Contact</li></NavLink>
				</ul>

				</div>
		</div>
</nav>)
}
const Root = () => {
  return(
		  <Router >
			  <div>
					<div className="page container-fluid">
						<div className="top-row">
							<NavLink className="animsition-link" to="/">
								<div className="wordmark">
									<img className="tree-logo"
											 src='../../app/assets/img/tree.svg' />Medina
								 </div>
							 </NavLink>
		<div className="nav-bar col-md-offset-4">
						<ul className="nav-list offset-">
							<NavLink className="animsition-link" activeClassName="active" to="/"><li>Home</li></NavLink>
							<NavLink className="animsition-link" activeClassName="active" to="/gallery"><li>Gallery</li></NavLink>
							<NavLink className="animsition-link" activeClassName="active" to="/faqs"><li>FAQs</li></NavLink>
							<NavLink className="animsition-link contact" activeClassName="active" to="/contact"><li>Contact</li></NavLink>
						</ul>
					</div>
							<NavBar/>
						</div>
	    	 <Route exact path="/" component = { Home }/>
	    	 <Route exact path="/gallery" component={ Portfolio }/>
	    	 <Route exact path="/faqs" component={ Faqs }/>
	    	 <Route exact path="/contact" component={ Contact }/>
				</div>
					<Footer/> 
    	 </div>
  	  </Router>
  );
};

export default Root;