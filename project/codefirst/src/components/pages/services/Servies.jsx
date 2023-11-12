import React from 'react'
import { NavLink} from 'react-router-dom'

// import bg1 from '../../assets/img/bg/breadcrumb_bg.jpg'


function Servies() {
  return (
    <>
<section className="breadcrumb-area breadcrumb-bg" style={{ backgroundImage: `url(${'/img/bg/breadcrumb_bg.jpg'})` }} >
    <div className="container">
        <div className="">
            <div className="row">
                <div className="col-12">
                    <div className="breadcrumb-content">
                        <h2 className="title">Our Service</h2>
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item"><NavLink to={'/'}>Home</NavLink></li>
                                <li className="breadcrumb-item active" aria-current="page">Service</li>
                            </ol>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
<section>
<div className="container mt-5">
        <div className="row">
            <div className="col-12 text-center">
                <h3>Digital Business Solution</h3>
                <p>CodeFirst Academy is one of the prominent software companies that helps other organizations to
                    transform into digital enterprises. It differentiates you from competitors in the market and
                    provides better engagement with customers, partners and employees. We clearly understand that all
                    customer landscapes are not of same kind. We offer agile approach towards your business drivers and
                    help IT organizations to align their goals towards the overall vision of the business.

                </p>
            </div>
        </div>
    </div>

    <div className="container mt-5">
        <div className="row">
            <div className="col-12 d-md-flex">
            <div className=" order-md-2 my-auto col-12 col-md-6">
                    <img src="/img/services/claritech-web-development.webp" style={{width:'100%'}} alt=""/>
                </div>
                <div className="order-md-1 col-12 col-md-6 my-auto">

                    <span className="sub-title">Web Design and Development</span>
                    <h4>Creative Arts, creative results</h4>
                    <p>Most users visit your website before engaging with your company! A website is the foundation of
                        your online presence, building credibility amongst customers, partners or employees. It makes
                        the purpose of your existence known to, takes them through your journey and puts what you stand
                        for in the spotlight. A great website represents your brand in its entirety. We at CLARITECH
                        SOLUTIONS provide Web Application Development and designing as per your requirement.</p>

                    <div className="features-text">
                        <h4><i className="flaticon-tick"></i> Core Development</h4>
                        <p>Latest technical stack is our priority for website developers </p>
                    </div>

                    <div className="features-text">
                        <h4><i className="flaticon-tick"></i> Design your dreams</h4>
                        <p>Custom designs for every assets for your business.</p>
                    </div>

                </div>
               
            </div>
        </div>
    </div>

    <div className="container d-md-flex mt-5">
        <div className="row">
           <div className="col-md-6 col-12">

            <img src="/img/services/problem-solving.webp" style={{width:'100%'}} alt=""/>
           </div>
            <div className="col-md-6 col-12 my-auto">
                <div className="content right-content ">
                    <span className="sub-title">Software Development </span>
                    <h4>Solving problems, building brands</h4>
                    <p>We create intuitive software applications for clients in complex domains. We have provide Desktop
                        Application Development as per your requirement. We offer Professional and affordable Software
                        Development service including Website Design and Development.</p>
                </div>
            </div>
        </div>
    </div>

    <div className="container d-md-flex mt-5">
        <div className="row">
        <div className="col-md-6 order-md-2 col-12 text-center">
                <img src="/img/services/mobile-development.webp" style={{width:'100%'}} alt=""/>
            </div>
            <div className="col-md-6 order-md-1 col-12 my-auto">
                <div className="overview-content">
                    <div className="content">
                        <span className="sub-title">Mobile Application Development</span>
                        <h4>We are the next generation of your business for every pocket</h4>
                        <p>Android is most popular in mobile technology and highly used by people. So We provide Mobile
                            apps development by knowing the explicitly huge demand from the users.</p>
                    </div>
                </div>
            </div>
            
        </div>
    </div>

    <div className="container d-md-flex mt-5">
        <div className="row">
            <div className="col-md-6 col-12">
                <img src="/img/services/content-image-1.png" style={{width:'100%'}} alt=""/>
            </div>
            <div className="col-md-6 col-12 my-auto">
                <div className="content right-content">
                    <span className="sub-title">Social Media Marketing</span>
                    <h4>We Promote your brand on every social platform </h4>
                    <p>We leverage the power of global platforms such as Instagram, Facebook, Twitter, LinkedIn, and
                        YouTube to enhance your brand’s online presence. Through effective social media marketing
                        strategies and campaigns, we help you reach your audience effectively through community
                        engagement and content dissemination.</p>
                </div>
            </div>
        </div>
    </div>

    <div className="container d-md-flex my-5">
        <div className="row">
        <div className="col-md-6 order-md-2 col-12">
                <img src="/img/services/application-developemnt.webp" className='img-responsive' style={{width:'100%'}} alt=""/>
            </div>
            <div className="col-md-6 order-md-1 col-12 my-auto">
                <div className="overview-content">
                    <div className="content">
                        <span className="sub-title">Internship Programs</span>
                        <h4>We make your carrier more simple and successful</h4>
                        <p>
                            We Provide Paid Internship Programs to Fresher’s. We provide job oriented knowledge to the
                            fresher during the Internship. We have also Provide Collage Project.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
    </>
  )
}

export default Servies