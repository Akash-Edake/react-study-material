import React from "react";
import { NavLink } from "react-router-dom";
import { AllinOne } from "../assets/json/layout/AllinOne";

function ServiceArea() {
  return (
    <>
      <section className="kb-services-area">
        <div className="container">
          <div className="">
            <div className="row justify-content-center">
              <div className="col-xl-10 col-lg-10">
                <div className="kb-section-title text-center mb-55">
                  <h2 className="title">Choose Your Career With CodeFirst !</h2>
                  <p>
                    Code your future with CodeFirst Academy . We have industry professionals provide tranings from scrach which meets to industrial standards.
                  </p>
                </div>
              </div>
            </div>
            <div className="row justify-content-center">
              {
                AllinOne.map((data)=>{
                  return(
                    data.Service.map((data) => {
                      return (
                        <div className="col-xl-4 col-lg-4 col-md-6 col-sm-10">
                          <div className="kb-services-item">
                            <NavLink
                              to={data.path}
                              className="kb-services-link"
                            ></NavLink>
                            <div className="icon">
                              <i className={data.icon}></i>
                            </div>
                            <div className="content">
                              <h5>
                                {data.type}
                                {/* <span className={data.stamp === "NEW" ? "new" : ""}>
                                  {data.stamp}
                                </span> */}
                              </h5>
                              <p>{data.details}</p>
                            </div>
                          </div>
                        </div>
                      );
                    })
                  )
                })
              }
            </div>
          </div>
        </div>
      </section>

    </>
  );
}

export default ServiceArea;
