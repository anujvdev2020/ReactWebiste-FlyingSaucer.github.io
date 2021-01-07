import React from "react";
import "./styles.css";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Menu() {
  return (
    <div className="App">
      <div className="container-fluid mb_85" id="menu-container">
        <Navbar />
        <div className="container mb-5" id="menu-section">
          <div className="row">
            <div className="col-md-12 col-sm-12 p-0" id="">
              <img
                className="img-fluid "
                src="https://www.theflyingsaucercafe.in/assets/images/menu-banner.jpg"
                alt="menu"
              />
            </div>
          </div>
        </div>
      </div>

      <section
        className="container mb-5"
        id="our-storyMenu"
        style={{ backgroundColor: "#e5e5e5" }}
      >
        <div className="row">
          <div className="col-sm-12 col-md-12 p-0">
            <div className="p-3">
              <div className="img-fluid">
                <img
                  id="flames"
                  src="https://www.theflyingsaucercafe.in/assets/images/flames.png"
                  alt="flames"
                />
              </div>
              <h2 className="text-uppercase">
                Our <span className="text-danger">STORY</span>
              </h2>
              <p>
                Welcome to Paradise, We speak the good food language - the
                flying saucer café. The brand brings out the disco vibe and the
                Teddy Era back to the capital city. The Flying Saucer Café never
                stops pampering its customers with stormy events and deals!
                Astonishing artists like Gajendra Verma and BPraak and many more
                famous artists came to entertain with their stunning
                performances.
              </p>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-4 col-sm-3">
            <div className="img-fluid">
              <img
                className="gallery-img"
                id=""
                src="https://www.theflyingsaucercafe.in/assets/images/signature-dish.png"
                alt="flames"
              />
              <h4 className="pt-2 m-0 font-weight-bold">SIGNATURE DISH</h4>
              <p className="tex-center m-3">
                Lip-smacking Chicken Stir-fry is something worth trying. With
                delicious toppings it will definetly gonna satisfy your
                taste-buds.
              </p>
            </div>
          </div>
          <div className="col-md-4 col-sm-3">
            <div className="img-fluid">
              <img
                className="gallery-img"
                id=""
                src="https://www.theflyingsaucercafe.in/assets/images/most-lovable.png"
                alt="flames"
              />
              <h4 className="pt-2 m-0 font-weight-bold">SMOST LOVABLE</h4>
              <p className="tex-left m-3">
                Comment to start a discussion, make a note, or annotate the
                artboard. Comment to start a discussion, make a note.
              </p>
            </div>
          </div>
          <div className="col-md-4 col-sm-3">
            <div className="img-fluid">
              <img
                className="gallery-img"
                src="https://www.theflyingsaucercafe.in/assets/images/cocktail-special.png"
                alt="flames"
              />

              <h4 className="pt-2 m-0 font-weight-bold">COCKTAIL SPECIAL</h4>
              <p className="tex-left m-3">
                Comment to start a discussion, make a note, or annotate the
                artboard. Comment to start a discussion, make a note.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="container" id="our-menu-section">
        <div className="row">
          <div className="col-sm-12 col-md-12 p-0">
            <div className="p-3">
              <div className="img-fluid">
                <img
                  id="flames"
                  src="https://www.theflyingsaucercafe.in/assets/images/white-flames.png"
                  alt="flames"
                />
              </div>
              <h2 className="text-uppercase text-white">
                Our <span className="text-danger">Menu</span>
              </h2>
              <p className="text-white">
                Welcome to Paradise, We speak the good food language - the
                flying saucer café. The brand brings out the disco vibe and the
                Teddy Era back to the capital city. The Flying Saucer Café never
                stops pampering its customers with stormy events and deals!
                Astonishing artists like Gajendra Verma and BPraak and many more
                famous artists came to entertain with their stunning
                performances.
              </p>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-12">
            <div
              id="carouselExampleControls"
              className="carousel slide"
              data-ride="carousel"
            >
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img
                    className="img-fluid"
                    src="https://www.theflyingsaucercafe.in/assets/images/andheri/bar1.jpg"
                    alt="First slide"
                  />
                </div>
                <div className="carousel-item">
                  <img
                    className="img-fluid"
                    src="https://www.theflyingsaucercafe.in/assets/images/andheri/bar1.jpg"
                    alt="Second slide"
                  />
                </div>
                <div className="carousel-item">
                  <img
                    className="img-fluid"
                    src="https://www.theflyingsaucercafe.in/assets/images/andheri/bar11.jpg"
                    alt="Third slide"
                  />
                </div>
              </div>
              <a
                className="carousel-control-prev"
                href="#carouselExampleControls"
                role="button"
                data-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span className="sr-only">Previous</span>
              </a>
              <a
                className="carousel-control-next"
                href="#carouselExampleControls"
                role="button"
                data-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span className="sr-only">Next</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section
        className="container mb-5 mt-5"
        id="our-gallery"
        style={{ backgroundColor: "#e5e5e5" }}
      >
        <div className="row">
          <div className="col-sm-12 col-md-12 p-0">
            <div className="p-3">
              <div className="img-fluid">
                <img
                  id="flames"
                  src="https://www.theflyingsaucercafe.in/assets/images/flames.png"
                  alt="flames"
                />
              </div>
              <h2 className="text-uppercase">
                Our <span className="text-danger">Gallery</span>
              </h2>
            </div>
          </div>
        </div>

        <div className="row">
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
