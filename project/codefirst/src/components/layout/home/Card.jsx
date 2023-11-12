import React from "react";
import { NavLink } from "react-router-dom";
import { Homedata } from "../../assets/json/layout/Homedata";

function Card() {
  return (
    <>
      <section className="cons-features-area">
        <div className="container">
          {
            Homedata.map((data)=>{
              return(
                data.Home_card.map((data) => {
                  return (
                    <div className="cons-features-bg" style={{ backgroundImage: `url(${data.bg_img})` }}>
                      <div className="row no-gutters justify-content-center">
                        {data.infos.map((info) => {
                          return (
                            <div className="col-lg-4 col-md-6">
                              <div className={ info.type === "active" ? "soft-features-item active" : "soft-features-item" } >
                                <div className="soft-features-icon">
                                  <i className={info.icon1}></i>
                                </div>
                                <div className="soft-features-content">
                                  <span>{info.title}</span>
                                  <h5><NavLink to={info.path}>{info.work}</NavLink></h5>
                                  <NavLink to={info.path} className="read-more"> {info.button} <i className={info.icon2}></i>
                                  </NavLink>
                                </div>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  );
                })
              )
            })
          }
        </div>
      </section>
    </>
  );
}

export default Card;
