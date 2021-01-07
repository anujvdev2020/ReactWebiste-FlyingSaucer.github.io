import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import "./styles.css";

export default function Reservation() {
  return (
    <div className="App">
      <div className="container-fluid p_30" id="reservations-container">
        <Navbar />
      </div>
      <section className="container mb-5" id="food-section">
        <div className="row">
          <div className="col-md-6 col-sm-12 p-0" id="food-description">
            <div className="text-white p_30">
              <div className="d-flex ">
                <img
                  src="https://www.theflyingsaucercafe.in/assets/images/bowl.png"
                  alt=""
                />
                <h3 className="text-uppercase p-4">AMAZING FOOD</h3>
              </div>
              <p className="text-left">
                The Flying Saucer Cafe offer you our electrifying Food,
                Beverages and Drinks menu. Flavorsome delicacies and Full-bodied
                drinks are definetly going to amaze you.
              </p>
            </div>

            <div className="text-white p_30">
              <div className="d-flex">
                <img
                  src="https://www.theflyingsaucercafe.in/assets/images/table.png"
                  alt=""
                />
                <h3 className="text-uppercase p-4">AWESOME AMBIENCE</h3>
              </div>
              <p className="text-left">
                “A good restaurant isn't that delivers good food but the one
                that provides a good place to eat”. The Flying Saucer Cafe, The
                most vibrant place and one of the biggest brewery in Town! with
                all the intricate woodwork, red sofas, romantic lighting, and a
                bar right in the middle of the very spacious restaurant.
              </p>
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
                Book A <span className="text-white">Table</span>
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
              <div className="col-md-12 col-sm-12  mt-5">
                <p className="text-white text-left text-uppercase m-0">Email</p>
                <input type="text" className="form-control" id="form-input" />
              </div>
            </div>

            <div className="row">
              <div className="col-md-6 col-sm-12  mt-5">
                <input
                  type="date"
                  className="form-control pl-0"
                  id="form-input"
                />
              </div>
              <div className="col-md-6  mt-5">
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
              <div className="col-md-6 col-sm-12  mt-5">
                <select className="form-control pl-0" id="form-input">
                  PAX
                  <option>PAX</option>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </select>
              </div>
              <div className="col-md-6 col-sm-12  mt-5">
                <select className="form-control pl-0" id="form-input">
                  TIME
                  <option>TIME</option>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </select>
              </div>
            </div>
            <div className="row">
              <div className="col-12 col-sm-12  mt-5">
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
