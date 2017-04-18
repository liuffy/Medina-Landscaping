import React from 'react';
import '../../css/app';
import '../../css/portfolio';

const Portfolio = () =>{
	return (
		<div>

<div className="main-content align-center">   
  <div className="container-fluid">

    <div className="open-project-lightbox">
    <div className="row-fluid">
      <div className="col-md-6 grid-object"><a href="app/assets/img/tree1.jpg" data-lightbox="example-1"><span className="plus"><span></span><span></span></span><img className="center-block" alt="" src="app/assets/img/tree1.jpg" /></a></div>

      <div className="col-md-6 grid-object"><a href="app/assets/img/tree2.jpg" data-lightbox="example-1"><span className="plus"><span></span><span></span></span><img className="center-block" alt="" src="app/assets/img/tree2.jpg"/></a></div>       
    </div>


    <div className="row-fluid">
      <div className="col-md-6 grid-object"><a href="app/assets/img/tree5.jpg" data-lightbox="example-1"><span className="plus"><span></span><span></span></span><img className="center-block" alt="" src="app/assets/img/tree5.jpg"/></a></div>

      <div className="col-md-6 grid-object"><a href="app/assets/img/tree4.jpg" data-lightbox="example-1"><span className="plus"><span></span><span></span></span><img className="center-block" alt="" src="app/assets/img/tree4.jpg"/></a></div>
    </div>

      <div className="col-md-6 grid-object"><a href="app/assets/img/tree6.jpg" data-lightbox="example-1" ><span className="plus"><span></span><span></span></span><img className="center-block" alt="" src="app/assets/img/tree6.jpg"/></a></div>

   
</div>
      </div>
      </div>
    </div>
		)
}


export default Portfolio;