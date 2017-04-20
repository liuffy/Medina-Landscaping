import React from 'react';
import '../../css/app';
import '../../css/footer';

const Footer = () =>{
	return(
<div className="menu-content footer">
        <div className="container main-content">
          <div className="row">
            <div className="col-md-12">
              <ul className="menu">
                <li className="col-md-3 col-sm-6">© Medina Tree Services</li>
                <li className="col-md-3 col-sm-6"> 246 Calvary St<br/>
  Waltham, MA 02453</li>
                <li className="col-md-3 col-sm-6">(978) 333-9334</li>  
                <li className="col-md-3 col-sm-6"><a href="https://www.yelp.com/biz/medina-tree-services-waltham" 
                       target="_blank"><img className="nav-icon" src="./../app/assets/img/yelp.svg"/></a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
	)
}

export default Footer;