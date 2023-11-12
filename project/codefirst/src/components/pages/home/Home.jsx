import React from "react";
import { NavLink } from "react-router-dom";
import { AllinOne } from "../../assets/json/layout/AllinOne";
import { Homedata } from "../../assets/json/layout/Homedata";
import ServiceArea from "../../layout/ServiceArea";
import SupportArea from "../../layout/SupportArea";
import Service from "../../layout/Service";

function Home() {
  return (
    <>
      <section className="banner-area banner-bg">
        <div className="slider-active">
          <div className="single-slider">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-6 order-0 order-lg-2">
                  <div className="banner-img">
                    {AllinOne.map((data) => {
                      return data.Banner.map((data) => {
                        return (
                          <img
                            src={data.img}
                            className={data.className}
                            alt=""
                          />
                        );
                      });
                    })}
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="banner-content">
                    <div className="slider-caption">
                      <div className="inner-layer">
                        <span
                          className="sub-title"
                          data-animation="reveal-text"
                          data-delay="1s"
                        >
                          <span style={{ animationDelay: "1s" }}></span>
                          CodeFirst
                        </span>
                      </div>
                    </div>
                    <div className="slider-caption">
                      <div className="inner-layer">
                        <h2
                          className="title"
                          data-animation="reveal-text"
                          data-delay="2s"
                        >
                          <span></span>Improve Your Technical Skills With
                          CodeFirst !
                        </h2>
                      </div>
                    </div>
                    <div className="slider-caption">
                      <div className="inner-layer">
                        <p data-animation="fade-in-up" data-delay="3s">
                          “Every business must become digital, doesn’t matter
                          which industry you belong to.”
                        </p>
                      </div>
                    </div>
                    <div
                      className="banner-btn"
                      data-animation="fade-in-up"
                      data-delay="3.5s"
                    >
                      <NavLink to={"/Contacts"} className="btn">
                        <i className="far fa-user"></i> Register Here
                        <span></span>
                      </NavLink>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="brand-area">
        <div className="container">
          <div className="">
            <div className="row">
              {Homedata.map((item) => {
                return item.brand_area.map((item) => {
                  return (
                    <>
                      <div className="col-md-6 col-12 mt-md-0 mt-5">
                        <div className="brand-wrapper">
                          <h1 className="title mb-2">
                            <span>{item.count}</span>
                          </h1>
                          <h4 className="mb-3">{item.info}</h4>
                        </div>
                      </div>
                    </>
                  );
                });
              })}
            </div>
          </div>
        </div>
      </div>

      <section className="features-area pt-120 pb-90">
        <div className="container">
          <div className="">
            <div className="row align-items-center">
              <div className="col-xl-7">
                <div className="row features-item-wrap">
                  {AllinOne.map((data) => {
                    return data.Features.map((data) => {
                      return (
                        <div className="col-md-6">
                          <div className="features-item-box mb-30">
                            <div className="features-item-icon">
                              {/* <img src={data.img_link} alt="" />
                               */}
                              <i className={data.iconClassname}></i>
                            </div>
                            <div className="features-item-content">
                              <h4>{data.title}</h4>
                              <p>{data.content}</p>
                            </div>
                          </div>
                        </div>
                      );
                    });
                  })}
                  <div className="features-top-shape">
                    <img src={"/img/images/features_shape01.png"} alt="" />
                  </div>
                </div>
              </div>
              <div className="col-xl-5">
                <div className="features-content-wrap">
                  <div className="features-title">
                    {/* <span className="sub-title">articles</span> */}
                    <h2 className="title">
                      Practices Online Training With Live Coding
                    </h2>
                  </div>

                  <div className="features-list">
                    <ul>
                      <li>
                        <div className="icon">
                          <i className="fas fa-check"></i>
                        </div>
                        <div className="content">
                          <h5>
                            We have record of 100% placement Support from last
                            one year
                          </h5>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div className="features-list">
                    <ul>
                      <li>
                        <div className="icon">
                          <i className="fas fa-check"></i>
                        </div>
                        <div className="content">
                          <h5>
                            Resume Uploading on Different Jobs Sites with recent
                          </h5>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div className="features-list">
                    <ul>
                      <li>
                        <div className="icon">
                          <i className="fas fa-check"></i>
                        </div>
                        <div className="content">
                          <h5>
                            Provide 100% interview Questions set A skill sets
                          </h5>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div className="features-list">
                    <ul>
                      <li>
                        <div className="icon">
                          <i className="fas fa-check"></i>
                        </div>
                        <div className="content">
                          <h5>Daily Mock Interviews A Weekly Presentation </h5>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div className="features-list">
                    <ul>
                      <li>
                        <div className="icon">
                          <i className="fas fa-check"></i>
                        </div>
                        <div className="content">
                          <h5>HR DISCUSSION & Soft Skills</h5>
                        </div>
                      </li>
                    </ul>
                  </div>

                  <NavLink to={"/cources"} className="btn">
                    <i className="far fa-paper-plane"></i> Discover all Features{" "}
                    <span></span>
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="features-right-shape">
          <img src={"/img/images/features_shape02.png"} alt="" />
        </div>
      </section>

      <section
        className="customer-feedback-area"
        style={{ backgroundImage: `url(${"/img/bg/feedback_bg.jpg"})` }}
      >
        <ServiceArea />
      </section>

      <SupportArea />
      <section
        className="customer-feedback-area"
        style={{ backgroundImage: `url(${"/img/bg/feedback_bg.jpg"})` }}
      >
        <Service />
      </section>
    </>
  );
}

export default Home;
