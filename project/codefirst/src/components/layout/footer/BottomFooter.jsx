import React from "react";
import logo from "../../assets/img/logo/fw_logo.png";
import us from "../../assets/img/icon/united-states.png";

function BottomFooter() {
  const flag = [
    { icon: "img/icon/russia.png", name: "Russia" },
    { icon: "img/icon/thailand.png", name: "Thailand" },
    { icon: "img/icon/india.png", name: "India" },
  ];
  return (
    <div>
      <div className="copyright-wrap">
        <div className="container">
          <div className="container-inner-wrap">
            <div className="row align-items-center">
              <div className="col-lg-8 col-md-9">
                <div className="copyright-text">
                  <div className="logo">
                    <a href="index.html">
                      <img src={logo} alt="" />
                    </a>
                  </div>
                  <p>Copyright &copy; 2021 Artom. All Rights Reserved.</p>
                </div>
              </div>
              <div className="col-lg-4 col-md-3 d-none d-md-block">
                <div className="footer-lang">
                  <div className="dropdown">
                    <button
                      className="dropdown-toggle"
                      type="button"
                      id="dropdownMenuButton"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <img src={us} alt="" /> English
                    </button>
                    <div
                      className="dropdown-menu"
                      aria-labelledby="dropdownMenuButton"
                    >
                      {flag.map((data) => {
                        return (
                          <a className="dropdown-item" href="#">
                            <img src={data.icon} alt="" />
                            {data.name}
                          </a>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    // <a className="dropdown-item" href="#"><img src={russia} alt=""/>Russia</a>
    // <a className="dropdown-item" href="#"><img src={thailand} alt=""/>Thailand</a>
    // <a className="dropdown-item" href="#"><img src={india} alt=""/>India</a>
  );
}

export default BottomFooter;
