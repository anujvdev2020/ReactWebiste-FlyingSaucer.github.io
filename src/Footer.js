import React from "react";
import "./styles.css";

export default function Footer() {
  return (
    <div className="">
      <section className="container-fluid" id="footer-about">
        <div className="row">
          <div className="col-md-4 mt-2">
            <div className="">
              <span className="text-danger m-0 text-uppercase">
                FRANCHISE ENQUIRY
              </span>
              <p className="text-white m-0">Mobile : +91 9313663486</p>
              <p className="text-white">Email : franchise@firstfiddle.in</p>
              <span className="text-danger text-uppercase m-0">HR ENQUIRY</span>
              <p className="text-white m-0">Mobile : +91 9999796366</p>
              <p className="text-white">Email : franchise@firstfiddle.in</p>
              <span className="text-danger text-uppercase m-0">
                BOOKING / OTHER ENQUIRY
              </span>
              <p className="text-white m-0">Mobile : +91 9999796366</p>
              <p className="text-white">Email : franchise@firstfiddle.in</p>
            </div>
          </div>
          <div className="col-md-3 mt-5">
            <div className="text-white">
              <h6>PRIVACY & POLICY</h6>
              <h6>BLOG</h6>
              <h6>TERM & CONDITION</h6>
              <h6>PRESS RELEASE</h6>
            </div>
          </div>
          <div className="col-md-5  mt-5">
            <div className="d-flex ml-3">
              <input
                id="email-search"
                aria-label="Search"
                type="text"
                className="form-control"
                placeholder="Enter Your Email"
              />
              <button className="btn btn-outline-danger">Search</button>
            </div>
            <div className="d-flex mt-3">
              <img
                src="https://www.flaticon.com/svg/static/icons/svg/145/145802.svg"
                alt="fb"
                className="img-fluid img-responsive social-logo"
              />
              <img
                src="https://www.flaticon.com/svg/static/icons/svg/733/733579.svg"
                alt="twitter"
                className="img-fluid img-responsive social-logo"
              />
              <img
                src="https://www.flaticon.com/svg/static/icons/svg/2111/2111463.svg"
                alt="insta"
                className="img-fluid img-responsive social-logo"
              />
            </div>
          </div>
        </div>
      </section>

      <h5 className="text-grey text-uppercase">
        COPYRIGHT 2020 © ALL RIGHTS RESERVED BY THE FLYING SAUCER CAFE
      </h5>
    </div>
  );
}
