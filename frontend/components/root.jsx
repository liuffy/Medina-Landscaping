import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import TestComponent from './test_component';


const Root = () => {
  return(
		  <Router >
	    	 <Route path="/" component = { TestComponent }/>
  	  </Router>
  );
};

export default Root;