import React from "react";
import "./styles.css";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Contact() {
  return (
    <div className="App">
      <div className="container-fluid p_30" id="reservations-container">
        <Navbar />
      </div>
      <section className="container" id="food-section">
        <div className="row">
          <div className="col-md-6 col-sm-12 p-0" id="food-description">
            <div className="mt-4">
              <div className="img-fluid">
                <img
                  id="flames"
                  src="https://www.theflyingsaucercafe.in/assets/images/white-flames.png"
                  alt="flames"
                />
              </div>
              <h2 className="text-uppercase text-black">
                FREQUENTLY ASK <span className="text-white">QUESTIONS</span>
              </h2>
            </div>
            <div className="card" id="main-card">
              <div className="card-body" id="faq-cardbody">
                <div
                  className="p_30"
                  data-toggle="collapse"
                  data-target="#multiCollapseExample1"
                  aria-expanded="false"
                  aria-controls="multiCollapseExample1"
                  id="faq-head"
                >
                  {" "}
                  1. Is this a good for residential corporate event/ dealer’s
                  meet ?<span> +</span>
                </div>
                <div class="collapse multi-collapse" id="multiCollapseExample1">
                  <div class="card card-body" id="faq-card">
                    ANS: NO
                  </div>
                </div>

                <div
                  class="p_30"
                  data-toggle="collapse"
                  data-target="#multiCollapseExample2"
                  aria-expanded="false"
                  aria-controls="multiCollapseExample2"
                  id="faq-head"
                >
                  2. Is there any time limit for celebration ? <i>+</i>
                </div>
                <div
                  className="collapse multi-collapse"
                  id="multiCollapseExample2"
                >
                  <div className="card card-body " id="faq-card">
                    ANS: 12 Noon – 12 Midnight
                  </div>
                </div>

                <div
                  className="p_30"
                  data-toggle="collapse"
                  data-target="#multiCollapseExample3"
                  aria-expanded="false"
                  aria-controls="multiCollapseExample3"
                  id="faq-head"
                >
                  3. What is the catering policy ? <span>+</span>
                </div>
                <div
                  className="collapse multi-collapse"
                  id="multiCollapseExample3"
                >
                  <div className="card card-body" id="faq-card">
                    ANS: Catering Available.
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-sm-12" id="form-section">
            <div className="mt-4">
              <div className="img-fluid">
                <img
                  id="flames"
                  src="https://www.theflyingsaucercafe.in/assets/images/white-flames.png"
                  alt="flames"
                />
              </div>
              <h2 className="text-uppercase text-danger">
                Contact <span className="text-white">Us</span>
              </h2>
            </div>

            <div className="row">
              <div className="col-md-6 col-sm-12  mt-5">
                <p className="text-white text-left text-uppercase m-0">Name</p>
                <input type="text" className="form-control" id="form-input" />
              </div>
              <div className="col-md-6 col-sm-12  mt-5">
                <p className="text-white text-left text-uppercase m-0">Phone</p>
                <input type="text" className="form-control" id="form-input" />
              </div>
            </div>

            <div className="row">
              <div className="col-md-6 col-sm-12  mt-4">
                <p className="text-white text-left text-uppercase m-0">Email</p>
                <input type="text" className="form-control" id="form-input" />
              </div>

              <div className="col-md-6 col-sm-12 mt-5">
                <select className="form-control pl-0" id="form-input">
                  OUTLET
                  <option>OUTLET</option>
                  <option>Luck</option>
                  <option>Delhi</option>
                  <option>Mumbai</option>
                </select>
              </div>
            </div>

            <div className="row">
              <div className="col-md-12 col-sm-12  mt-5">
                <p className="text-white text-left text-uppercase m-0">
                  Message
                </p>
                <textarea
                  type="text-area"
                  className="form-control pt-3"
                  id="form-input"
                />
              </div>
            </div>

            <div className="row mt-5">
              <div className="col-12 col-sm-12">
                <div>
                  <button id="submit-btn" className="btn text-uppercase">
                    Submit
                    <img
                      id="fork"
                      src="https://www.theflyingsaucercafe.in/assets/images/folk_white.png"
                      alt="fork"
                    />
                  </button>
                  <p className="text-white mt-2">
                    *Note : Fill all fields after that submit button enabled.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
