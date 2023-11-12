import React from "react";
import { Link, NavLink } from "react-router-dom";
import { AllinOne } from "../assets/json/layout/AllinOne";
function Service() {
  return (
    <>

      <section className="soft-services-area">
                <div className="container">
                    <div className="container-inner-wrap">
                        <div className="row align-items-end mb-50">
                            <div className="col-md-7">
                                <div className="section-title-two">
                                    <h5 className="sub-title">Services</h5>
                                    <h2 className="title">That We Provide<span>.</span></h2>
                                </div>
                            </div>
                            <div className="col-md-5">
                                <div className="soft-title-link">
                                    <Link to='/cources'>Browse All Services <i className="fas fa-long-arrow-alt-right"></i></Link>
                                </div>
                            </div>
                        </div>
                        <div className="row soft-services-wrap justify-content-center">
                            <div className="col">
                                <div className="soft-services-item">
                                    <div className="soft-services-icon">
                                        {/* <img src="img/icon/soft_services_icon01.png" alt=""> */}
                                        <div className="features-item-icon mx-auto">
                                        <i class="fa-solid fa-globe"></i>
                                        </div>
                                       
                                    </div>
                                    <div className="soft-services-content">
                                        <h6><a href="services-details.html">Web Design And Development</a></h6>
                                        <a href="services-details.html" className="soft-services-link"><i className="fas fa-arrow-alt-circle-right"></i></a>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="soft-services-item">
                                    <div className="soft-services-icon">
                                        {/* <img src="img/icon/soft_services_icon02.png" alt=""> */}
                                        <div className="features-item-icon mx-auto">
                                        <i class="fa-brands fa-uncharted"></i>
                                        </div>
                                       
                                    </div>
                                    <div className="soft-services-content">
                                        <h6><a href="services-details.html">Software Development</a></h6>
                                        <a href="services-details.html" className="soft-services-link"><i className="fas fa-arrow-alt-circle-right"></i></a>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="soft-services-item">
                                    <div className="soft-services-icon">
                                        {/* <img src="img/icon/soft_services_icon03.png" alt=""> */}
                                        <div className="features-item-icon mx-auto">
                                        <i class="fa-solid fa-mobile-screen-button"></i>
                                        </div>
                                       
                                    </div>
                                    <div className="soft-services-content">
                                        <h6><a href="services-details.html">Mobile Application Development</a></h6>
                                        <a href="services-details.html" className="soft-services-link"><i className="fas fa-arrow-alt-circle-right"></i></a>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="soft-services-item">
                                    <div className="soft-services-icon">
                                        {/* <img src="img/icon/soft_services_icon04.png" alt=""> */}
                                        {/* <i className="fa-thin fa-lightbulb-on"></i> */}
                                        <div className="features-item-icon mx-auto">
                                        <i class="fa-solid fa-user-group"></i>
                                        </div>
                                    </div>
                                    <div className="soft-services-content">
                                        <h6><a href="services-details.html">Social Media Marketing</a></h6>
                                        <a href="services-details.html" className="soft-services-link"><i className="fas fa-arrow-alt-circle-right"></i></a>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="soft-services-item">
                                    <div className="soft-services-icon">
                                        {/* <img src="img/icon/soft_services_icon05.png" alt=""> */}
                                        <div className="features-item-icon mx-auto">
                                        <i class="fa-solid fa-lightbulb"></i>
                                        </div>
                                    </div>
                                    <div className="soft-services-content">
                                        <h6><a href="services-details.html">Training And Placement</a></h6>
                                        <a href="services-details.html" className="soft-services-link"><i className="fas fa-arrow-alt-circle-right"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
    </>
  );
}

export default Service;
