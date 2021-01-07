import React from "react";
import "./styles.css";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function About() {
  return (
    <div>
      <div className="container-fluid mb_85" id="about-page">
        <Navbar />
        <div className="container mb-5" id="about-container">
          <h1 className="text-white mb-2" id="abt-h1">
            About
          </h1>
          <p className="text-white">
            The Flying Saucer Cafe is one of the enviable-after party hubs in
            Delhi. It’s your best to go party place, The Flying Saucer Cafe is a
            casual-dining restaurant located in Nehru Place.
          </p>
        </div>
      </div>

      <section className="container mb-5" id="abt-story">
        <div className="row">
          <div className="col-sm-8 col-md-4 p-0">
            <img
              className="img-fluid img-responsive"
              src="https://www.theflyingsaucercafe.in/assets/images/house-web.png"
              alt="abt1"
            />
          </div>
          <div className="col-sm-12 col-md-8 p_30">
            <div className="img-fluid">
              <img
                id="flames"
                src="https://www.theflyingsaucercafe.in/assets/images/flames.png"
                alt="flames"
              />
            </div>
            <h2 className="text-uppercase">
              Discover <span className="text-danger">Our Story</span>
            </h2>
            <p className="text-left">
              The Flying Saucer Cafe is one of the enviable-after party hubs in
              Delhi. It’s your best to go party place, The Flying Saucer Cafe is
              a casual-dining restaurant located in Nehru Place. With all
              power-packed events lined up and crazy night scenes, with fusion
              platters, signature cocktails now its Uttar Pradesh's longest bar,
              The Flying Saucer Cafe is winning hearts in Lucknow as well! The
              Brand is a paradise for all the food lovers. A place that speaks
              style and class. If you want satisfactory food and cracking music
              then It's just the right place you need to be at when in mood to
              party or hang out with your gang! It is a place where you can get
              a thrill out of every bite of Italian, Continental and
              Mediterranean cuisine and that too at a price that is economical.
            </p>
            <p className="text-left">
              The Flying Saucer Cafe contribute a well-arranged ambience that
              has the yellow tint all over the wooden set-up, paired up with a
              spectacular outdoor seating. Flying Saucer Cafe is the kind of
              place where you chill for hours. The exceptional service offered
              by courteous waiters add to the dining experience and you would
              want to visit the place regularly.
            </p>
          </div>
        </div>
      </section>

      <section className="container mb-5" id="front-desk">
        <div className="row">
          <div
            className="col-sm-6 col-md-8 p-0"
            style={{ backgroundColor: "#e5e5e5" }}
          >
            <div className="p_30 ">
              <div className="img-fluid">
                <img
                  id="flames"
                  src="https://www.theflyingsaucercafe.in/assets/images/flames.png"
                  alt="flames"
                />
              </div>
              <h2 className="text-uppercase">
                FROM THE DESK <span className="text-danger">OF MANAGMENT </span>
              </h2>
              <p className="text-left">
                The Flying Saucer Cafe is one of the enviable-after party hubs
                in Delhi. It’s your best to go party place, The Flying Saucer
                Cafe is a casual-dining restaurant located in Nehru Place. With
                all power-packed events lined up and crazy night scenes, with
                fusion platters, signature cocktails now its Uttar Pradesh's
                longest bar, The Flying Saucer Cafe is winning hearts in Lucknow
                as well! The Brand is a paradise for all the food lovers. A
                place that speaks style and class. If you want satisfactory food
                and cracking music then It's just the right place you need to be
                at when in mood to party or hang out with your gang! It is a
                place where you can get a thrill out of every bite of Italian,
                Continental and Mediterranean cuisine and that too at a price
                that is economical.
              </p>
              <p className="text-left">
                The Flying Saucer Cafe contribute a well-arranged ambience that
                has the yellow tint all over the wooden set-up, paired up with a
                spectacular outdoor seating. Flying Saucer Cafe is the kind of
                place where you chill for hours. The exceptional service offered
                by courteous waiters add to the dining experience and you would
                want to visit the place regularly.
              </p>
              <img
                id="sign"
                src="https://www.theflyingsaucercafe.in/assets/images/Sign@2x.png"
                alt="sign"
              />
            </div>
          </div>
          <div className=" col-md-4 p-0 col-sm-12">
            <div>
              <img
                id="flip-image"
                src="https://www.theflyingsaucercafe.in/assets/images/desk-web.png"
                alt="Avatar"
              />
            </div>

            <div className="flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <img
                    id=""
                    src="https://www.theflyingsaucercafe.in/assets/images/desk-web.png"
                    alt="Avatar"
                    style={{ height: "450px" }}
                  />
                </div>
                <div class="flip-card-back">
                  <h1 className="p-5">Priyank Sukhija</h1>`
                  <p>F&B entreprenuer</p>
                  <p>Indias Most Successful Restaurateur</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className="container mb-5"
        id="our-gallery"
        style={{ backgroundColor: "#e5e5e5" }}
      >
        <div className="row mt-3">
          <div className="col-sm-12 col-md-12 p-0">
            <div className="mt-3">
              <div className="img-fluid">
                <img
                  id="flames"
                  src="https://www.theflyingsaucercafe.in/assets/images/flames.png"
                  alt="flames"
                />
              </div>
              <h2 className="text-uppercase ">
                Our <span className="text-danger">Gallery</span>
              </h2>
            </div>
          </div>
        </div>

        <div className="row ">
          <div className="col-md-4 col-sm-3">
            <div className="img-fluid">
              <img
                className="gallery-img"
                id=""
                src="https://www.theflyingsaucercafe.in/assets/images/Sukhi%20event@2x.png"
                alt="flames"
              />
              <p className="tex-center text-uppercase m-3">
                SUKH-E EVENT AT PLUM NEHRU PLACE
              </p>
            </div>
          </div>
          <div className="col-md-4 col-sm-3">
            <div className="img-fluid">
              <img
                className="gallery-img"
                id=""
                src="https://www.theflyingsaucercafe.in/assets/images/Food@2x.png"
                alt="flames"
              />
              <p className="tex-center text-uppercase m-3">
                SUKH-E EVENT AT PLUM NEHRU PLACE
              </p>
            </div>
          </div>
          <div className="col-md-4 col-sm-3">
            <div className="img-fluid">
              <img
                className="gallery-img"
                src="https://www.theflyingsaucercafe.in/assets/images/Ambience@2x.png"
                alt="flames"
              />
              <p className="tex-center text-uppercase m-3">
                SUKH-E EVENT AT PLUM NEHRU PLACE
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
