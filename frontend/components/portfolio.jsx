import React from 'react';
import '../../css/app';
import '../../css/portfolio';

const Portfolio = () =>{
	return (
		<div>
		
		<div className="loader">
        <svg viewBox="25 25 50 50" className="circular">
          <circle cx="50" cy="50" r="20" fill="none" strokeWidth="6" strokeMiterlimit="10" className="path"></circle>
        </svg>
      </div>
		<div className="flex-wrapper">
      <div className="main-content align-center">
        <div className="container-fluid">
          <div className="row">
            <div className="container">
              <div className="row">
                <div className="col-md-7 col-md-offset-1">
                  <div className="open-project-lightbox">

                  <a href="app/assets/img/img1.png"><span className="plus"><span></span><span></span></span><img alt="" src="app/assets/img/img1.png" /></a>

                  <a href="app/assets/img/img2.png"><span className="plus"><span></span><span></span></span><img alt="" src="app/assets/img/img2.png"/></a>                

                   <a href="app/assets/img/img2.png"><span className="plus"><span></span><span></span></span><img alt="" src="app/assets/img/img3.png"/></a>

                   <a href="app/assets/img/img2.png"><span className="plus"><span></span><span></span></span><img alt="" src="app/assets/img/img4.png"/></a></div>


                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
		</div>
		)
}


export default Portfolio;