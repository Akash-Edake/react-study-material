import React from 'react'
import { NavLink} from 'react-router-dom'
import SupportArea from '../../layout/SupportArea'

function AboutUs() {
  return (
    <div>

<section className="breadcrumb-area breadcrumb-bg" style={{ backgroundImage: `url(${'/img/bg/breadcrumb_bg.jpg'})` }} >
    <div className="container">
        <div className="">
            <div className="row">
                <div className="col-12">
                    <div className="breadcrumb-content">
                        <h2 className="title">CodeFirst Academy</h2>
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item"><NavLink to={'/'}>Home</NavLink></li>
                                <li className="breadcrumb-item active" aria-current="page">About Us</li>
                            </ol>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<section className="customer-feedback-area" style={{ backgroundImage: `url(${'/img/bg/feedback_bg.jpg'})` }}>
{/* <FeedbackArea/> */}
<section class="contact-area ptb-100">
   <div class="container">
      <div class="row">
         <div class="col-12  mt-5">
            <p>
               We at CodeFirst Academy provide various services like Web Designing, Web Development, Software Development, Mobile Application Development, Graphics Designing, and Digital Marketing. We also involved in Internship Program for fresher’s as well as college students. Our expert professionals understand and analyse your business needs, project requirements and marketing goals to provide the best solutions. We are mainly focused on quality and on time delivery. Our team consists of creative and technical professionals that include web designers, web developers, graphic designers, logo designers, software programmers. We provide best solutions on complex architecture to became application more user friendly.
               Our main aim is to develop in a constant manner and become a leading performer in this competitive global marketplace. Fortunately, we have been able to gather a crew of professionals that can shape and mild their collective experiences, all of them possess outstanding talent that can help to accelerate your organization.
            </p>
         </div>
      </div>
      <div class="about-inner-area  ptb-50">
         <div class="row">
            <div class="col-lg-12 col-md-12 col-sm-12 pb-5">
               <div class="about-text">
                  <h3>Our History</h3>
                  <p>CodeFirst Academy is one of the prominent software companies that helps other organizations to transform into digital enterprises. It differentiates you from competitors in the market and provides better engagement with customers, partners and employees.
We clearly understand that all customer landscapes are not of same kind. We offer agile approach towards your business drivers and help IT organizations to align their goals towards the overall vision of the business.</p>
                
               </div>
            </div>
            <div class="col-lg-12 col-md-12 col-sm-12  pb-5">
               <div class="about-text">
                  <h3>Our Mission</h3>
                  <p>Our mission is to enhance business growth of our customers with creative design, application development and to deliver market defining high quality solutions that create value and reliable competitive advantage to customers around the globe.</p>
                  
               </div>
            </div>
            <div class="col-lg-12 col-md-12 col-sm-12 offset-lg-0 offset-md-12 offset-sm-12">
               <div class="about-text">
                  <h3>Our Vision</h3>
                  <p>“Every business must become digital, doesn’t matter which industry you belong to.”</p>
                
               </div>
            </div>
         </div>
      </div>
    
    
   </div>
</section>
{/* <ServiceArea/> */}
</section>

{/* <section className="team-area team-bg" style={{ backgroundImage: `url(${bg6})` }} >
    <TeamArea/>
</section> */}
    <SupportArea/>


{/* <TrialArea/> */}



    </div>
  )
}

export default AboutUs