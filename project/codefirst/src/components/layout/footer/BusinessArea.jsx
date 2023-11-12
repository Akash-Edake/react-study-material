import React from 'react'

import img8 from '../../assets/img/images/business_img_shape01.png'
import img9 from '../../assets/img/images/business_img.jpg'
import img10 from '../../assets/img/images/business_img_shape02.png'



function BusinessArea() {
  return (
    <>
        <section className="business-area business-bg">
    <div className="container">
        <div className="">
            <div className="row align-items-center justify-content-center">
                <div className="col-lg-6 col-md-10">
                    <div className="business-img-wrap">
                        <img src= {img8} alt="" className="top-shape"/>
                        <img src= {img9} alt="" className="main-img"/>
                        <img src= {img10} alt="" className="bottom-shape alltuchtopdown"/>
                    </div>
                </div>
                <div className="col-lg-6 col-md-10">
                    <div className="business-content-wrap">
                        <div className="section-title">
                            <span className="sub-title">software Business</span>
                            <h2 className="title">The Best Choice For Your Business <span>Needs.</span></h2>
                        </div>
                        <p>Making for software espially of the relating to complexion especially of the face cosmetic.when an unknown printer took a galley of type and scrambled.</p>
                        <div className="business-content-list">
                            <ul>
                                <li>
                                    <div className="icon"><i className="fas fa-check"></i></div>
                                    <div className="content">
                                        <h5>Manage Support</h5>
                                        <p>Making for beauty especially the relating to complexion especially.</p>
                                    </div>
                                </li>
                                <li>
                                    <div className="icon"><i className="fas fa-check"></i></div>
                                    <div className="content">
                                        <h5>Working Process</h5>
                                        <p>Making for beauty especially the relating to complexion especially.</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
    </>
  )
}

export default BusinessArea