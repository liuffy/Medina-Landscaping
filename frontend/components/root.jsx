import React from 'react';
import {  BrowserRouter as Router,
				  Route,
				  Link } from 'react-router-dom';
import App from './app';
import Home from './home';


const Root = () => {
  return(
		  <Router >
	    	 <Route path="/" component = { App }/>
  	  </Router>
  );
};

export default Root;