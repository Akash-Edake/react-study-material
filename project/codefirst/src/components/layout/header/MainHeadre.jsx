import React from "react";
// import logo from "../../assets/img/logo/logo.png";
import { Link, NavLink } from "react-router-dom";
import { AllinOne } from "../../assets/json/layout/AllinOne";
function MainHeadre() {
  return (
    <>
      <div id="sticky-header" className="main-header menu-area">
        <div className="container custom-container">
          <div className="row">
            <div className="col-12">
              <div className="d-md-none d-flex justify-containt-around align-items-center;">
                <NavLink to={"/"}>
                  <img src="/img/logo/logo.png" style={{ width: "25%" }} alt="" />
                </NavLink>
                <button
                class="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarNavDropdown"
                aria-controls="navbarNavDropdown"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span class="navbar-toggler-icon d-inline">
                  <i className="fas fa-bars"></i>
                </span>
              </button>
              </div>
              
              <div className="menu-wrap">
                <nav className="menu-nav">
                <div className="d-none d-md-block">
                <NavLink to={"/"}>
                  <img src="/img/logo/logo.png" style={{ width: "25%" }} alt="" />
                </NavLink>
              </div>
                  <div
                    className="navbar-wrap main-menu d-lg-flex collapse"
                    id="navbarNavDropdown"
                  >
                    <ul className="navigation">
                      {AllinOne.map((data) => {
                        return data.Header.map((mainData) => {
                          return (
                            <li
                              className={
                                mainData.dropdown === "yes"
                                  ? "menu-item-has-children"
                                  : ""
                              }
                            >
                              <NavLink to={mainData.path}>
                                {mainData.title}
                              </NavLink>
                              {mainData.dropdown === "yes" && (
                                <ul className="submenu">
                                  {mainData.data.map((SubData) => {
                                    return (
                                      <li>
                                        <NavLink to={SubData.path}>
                                          {SubData.name}
                                        </NavLink>
                                      </li>
                                    );
                                  })}
                                </ul>
                              )}
                            </li>
                          );
                        });
                      })}
                    </ul>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MainHeadre;
