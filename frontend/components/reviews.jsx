import React from 'react';
import '../../css/app';
import '../../css/reviews';

const Reviews = () =>{
	return (
<div className="container">   
 	<div className="row">
      <div className="col-md-12">
        <h3 className="text-center reviews-header">Reviews from our Customers</h3>
      </div>
          
        <div className="row">
            <div className="col-md-8 col-md-offset-2">
              <div className="carousel">

                <div className="slide">
                  <div className="content"><img className="avatar" alt="" src="../../app/assets/img/girl.svg"/>
                    <div className="blockquote">
                      <h4 className="text-1-opacity text-center margin-0">Susie R.</h4>
                      <p className="subheading text-uppercase text-center">Waltham, MA</p>
                      <p className="text-center text-1-opacity">“I have never written a yelp
Review but I felt compelled to after receiving such wonderful service. The staff are extremely friendly, very knowledgeable, and experienced. The owner was very honest and open around recommendations and we never felt like he was just trying to make money. We had received a quote from another company and they quoted us over a thousand more and offered no recommendations. I would highly recommend this company.”</p>
                    </div>
                  </div>
                </div>
                <div className="slide">
                  <div className="content"><img className="avatar" alt="" src="../../app/assets/img/boy.svg"/>
                    <div className="blockquote">
                      <h4 className="text-1-opacity text-center margin-0">Jack K.</h4>
                      <p className="subheading text-uppercase text-center">Newton, MA</p>
                      <p className="text-center text-1-opacity">“We had a very large Maple tree growing too close to our home, as well as several neighboring trees that needed to be trimmed.  They came the day I called to give a quote and provided the best quote we received.  They arrived at our home on the agreed date, removed the tree, and trimmed all the trees quickly and efficiently.  They worked in tight spaces amid phone and electrical wires without any problem.  They were excellent, and left the yard as clean as when they arrived.  This was a great company that we highly, highly recommend them.”</p>
                    </div>
                  </div>
                </div>

                <div className="slide">
                  <div className="content"><img className="avatar" alt="" src="../../app/assets/img/girl.svg"/>
                    <div className="blockquote">
                      <h4 className="text-1-opacity text-center margin-0">Mary G.</h4>
                      <p className="subheading text-uppercase text-center">Waban, MA</p>
                      <p className="text-center text-1-opacity">“The company did a great job removing  three trees from our property and cleaned up all the branches. One the trees that they recommended to be removed was hollow inside and would have damaged the house if fell during the snow storm.  I highly recommend Medina Tree Service.”</p>
                    </div>
                  </div>
                </div>


                <div className="slide">
                  <div className="content"><img className="avatar" alt="" src="../../app/assets/img/boy.svg"/>
                    <div className="blockquote">
                      <h4 className="text-1-opacity text-center margin-0">Tim M.</h4>
                      <p className="subheading text-uppercase text-center">Waltham, MA</p>
                      <p className="text-center text-1-opacity">“I called Medina Tree Service and explained my situation.  They visited the property within a day and gave me a quote.  When I told them I was worried about the fence and the shed, as well as my sprinkler system, they were not worried and they also showed me proof of insurance just in case.  A crew of about 5 people showed up at 7:15am and they worked hard until about 3pm removing the tree.  When they were done you would never have known that a tree had been there.  The stump had been ground and the yard was more clean than when they showed up.  I have used other tree services in the past as I have removed trees during various landscaping projects, and I will continue to use Medina Tree Service in the future.”</p>
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


export default Reviews;