// import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { AllinOne } from "../../assets/json/layout/AllinOne";
function MainFooter() {
  // useEffect(() => {
  //   console.log("FooterMenu", Footer);
  // }, []);
  return (
    <>
      <div className="footer-top-wrap-1">
        <div className="container-fluid">
          <div className="row align-items-center py-3">
            <div className="col-md-6 col-12">
              <p className="mb-0">© 2022 CodeFirst Academy All Rights Reserved</p>
            </div>
            <div className="col-md-6 col-12">
             <div className="d-flex align-items-center float-md-right">
             <h6 className="mr-3 mb-0">Social Media</h6>
              <div class="contact-social">
                <ul>
                  <li><a href="#"><i class="fab fa-facebook-f"></i></a></li>
                  <li><a href="#"><i class="fab fa-twitter"></i></a></li>
                  <li><a href="#"><i class="fab fa-linkedin-in"></i></a></li>
                </ul>
              </div>
             </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MainFooter;
