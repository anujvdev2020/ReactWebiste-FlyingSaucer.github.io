import React from "react";
import "./styles.css";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Home() {
  return (
    <div className="App">
      <div className="container-fluid home">
        <Navbar />
        <div id="center-content">
          <img
            className="img-fluid center-img"
            src="https://www.theflyingsaucercafe.in/assets/images/center-img.png"
            alt=""
          />

          <div>
            <button
              id="bookbtn"
              className="btn text-uppercase btn-outline-danger"
            >
              Book A Table
              <img
                id="fork"
                src="https://www.theflyingsaucercafe.in/assets/images/folk_white.png"
                alt="fork"
              />
            </button>
          </div>
        </div>
      </div>

      <section className="container" id="story">
        <div className="row p_30">
          <div className="col-sm-6 col-md-6 p-0">
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
              style and className. If you want satisfactory food and cracking
              music then It's just the right place you need to be at when in
              mood to party or hang out with your gang!
            </p>
            <button className="btn m-2 text-uppercase" id="aboutbtn">
              About Us
              <img
                src="https://www.theflyingsaucercafe.in/assets/images/folk_grey.png"
                alt="fork"
                id="fork"
              />
            </button>
          </div>
          <div className="col-sm-6 col-md-6 p-0 abt-image">
            <img
              className="img-fluid m-2   about-image"
              src="https://www.theflyingsaucercafe.in/assets/images/A1.jpg"
              alt="abt1"
            />
            <img
              className="img-fluid m-2   about-image"
              src="https://www.theflyingsaucercafe.in/assets/images/A2.jpg"
              alt="abt2"
            />
          </div>
        </div>
      </section>

      <section className="container" id="menu-section">
        <div className="row m-2 pt-3">
          <div className="col-md-12 col-sm-12">
            <div className="img-fluid">
              <img
                id="flames"
                src="https://www.theflyingsaucercafe.in/assets/images/white-flames.png"
                alt="flames"
              />
            </div>
            <h2 className="text-white mt-2">
              OUR <span className="text-danger">MENU</span>
            </h2>
            <p className="text-center text-white m-1">
              You expect the best, we offer you the foremost. Deliciousness
              jumping into the mouth from exotic cocktails to delicious salads.
              The Flying Saucer cafe offers an eccentric newly revamped menu in
              North Indian, Italian, Mediterranean, and continental cuisines.
              The cafe exhibits an alluring medley of delectable cuisine, which
              is presented in an exceedingly Fashionable setting.
            </p>
          </div>
        </div>

        <div className="row p_30">
          <div className="col-md-12  menu-slider">
            <div
              id="carouselExampleControls"
              className="carousel slide"
              data-ride="carousel"
            >
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img
                    className="d-block w-100"
                    src="https://www.theflyingsaucercafe.in/assets/images/food.png"
                    alt="First slide"
                  />
                </div>
                <div className="carousel-item">
                  <img
                    className="d-block w-100"
                    src="https://www.theflyingsaucercafe.in/assets/images/bar.png"
                    alt="Second slide"
                  />
                </div>
                <div className="carousel-item">
                  <img
                    className="d-block w-100"
                    src="https://www.theflyingsaucercafe.in/assets/images/bar.png"
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

          <div className="col-4">
            <div className="card menu-card">
              <div className="card-body">
                <img
                  src="https://www.theflyingsaucercafe.in/assets/images/pizza_icon.png"
                  alt=""
                  className="icon"
                />
                <p className="text-dark">
                  Alluring mocktails in our beverage’s menu are waiting for you.
                  Varieties of astonishing desserts and drinks that will blow
                  your mind.
                </p>
                <button className="btn btn-outline-danger text-center text-uppercase">
                  Beverage
                  <img
                    src="https://www.theflyingsaucercafe.in/assets/images/folk_grey.png"
                    alt="fork"
                    id="fork"
                  />
                </button>
              </div>
            </div>
          </div>

          <div className="col-4">
            <div className="card menu-card">
              <div className="card-body">
                <img
                  src="https://www.theflyingsaucercafe.in/assets/images/drink-icon.png"
                  alt=""
                  className="icon"
                />
                <p className="text-dark">
                  The bar menu is filled with some of the most exotic drinks.
                  The happening place you need to be to change your mood to hang
                  out with your gang!
                </p>
                <button className="btn btn-outline-danger text-center text-uppercase">
                  Bar
                  <img
                    src="https://www.theflyingsaucercafe.in/assets/images/folk_grey.png"
                    alt="fork"
                    id="fork"
                  />
                </button>
              </div>
            </div>
          </div>

          <div className="col-4">
            <div className="card menu-card">
              <div className="card-body">
                <img
                  src="https://www.theflyingsaucercafe.in/assets/images/icon.png"
                  alt=""
                  className="icon"
                />
                <p className="text-dark">
                  Food menu too is extremely elaborate and meanders through the
                  globe, taking in Mexico, Lebanon, China, Thailand, India,
                  Italy and USA .
                </p>
                <button className="btn btn-outline-danger text-uppercase text-center">
                  Food
                  <img
                    src="https://www.theflyingsaucercafe.in/assets/images/folk_grey.png"
                    alt="fork"
                    id="fork"
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container mt-5" id="locations">
        <div className="row p_30">
          <div className="col-md-12 col-sm-12">
            <div className="img-fluid">
              <img
                id="flames"
                src="https://www.theflyingsaucercafe.in/assets/images/flames.png"
                alt="flames"
              />
            </div>
            <h3 className="text-center text-uppercase">
              Our <span className="text-danger">Restaurant</span>
            </h3>
          </div>
        </div>
        <div className="row" id="india-loc">
          <div className="col-12 col-md-12 col-sm-12">
            <div className="all-loc d-flex justify-content-around">
              <div>
                <img
                  src="https://www.theflyingsaucercafe.in/assets/images/delhi.png"
                  alt="delhi"
                  className="loc-image m-2  "
                />
                <p>Delhi</p>
              </div>
              <div>
                <img
                  src="https://www.theflyingsaucercafe.in/assets/images/lukhnow.png"
                  alt="lko"
                  className="loc-image m-2  "
                />
                <p>Lucknow</p>
              </div>

              <div>
                <img
                  src="https://www.theflyingsaucercafe.in/assets/images/mumbai-gateway-of-india.png"
                  alt="mumbai"
                  className="loc-image m-2  "
                />
                <p className="m-0">Mumbai</p>
                <p className="text-uppercase text-danger">(Opened Now)</p>
              </div>
              <div>
                <img
                  src="https://www.theflyingsaucercafe.in/assets/images/kanpur.png"
                  alt="lko"
                  className="loc-image m-2  "
                />
                <p className="m-0" style={{ opacity: "0.5" }}>
                  Chandigarh
                </p>
                <p
                  className="text-uppercase text-danger"
                  style={{ opacity: "0.5" }}
                >
                  (Coming Soon)
                </p>
              </div>
              <div>
                <img
                  src="https://www.theflyingsaucercafe.in/assets/images/chasndigarh.png"
                  alt="lko"
                  className="loc-image m-2  "
                />
                <p className="m-0 " style={{ opacity: "0.5" }}>
                  Kanpur
                </p>
                <p
                  className="text-uppercase text-danger"
                  style={{ opacity: "0.5" }}
                >
                  (Coming Soon)
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="row" id="mobile-loc">
          <div className="col-12 col-md-12 col-sm-12">
            <div
              id="carouselControls"
              className="carousel slide"
              data-ride="carousel"
            >
              <div className="carousel-inner">
                <div className="carousel-item text-center active">
                  <img
                    src="https://www.theflyingsaucercafe.in/assets/images/delhi.png"
                    alt="Delhi"
                  />
                  <p className="m-0">Delhi</p>
                  <p className="text-uppercase text-danger">2015</p>
                </div>
                <div className="carousel-item text-center">
                  <img
                    src="https://www.theflyingsaucercafe.in/assets/images/lukhnow.png"
                    alt="LKO"
                  />
                  <p className="m-0">Lucknow</p>
                  <p className="text-uppercase text-danger">2015</p>
                </div>
                <div className="carousel-item">
                  <img
                    src="https://www.theflyingsaucercafe.in/assets/images/mumbai-gateway-of-india.png"
                    alt="mumbai"
                  />
                  <p className="m-0">Mumbai</p>
                  <p className="text-uppercase text-danger">(Newly Opened )</p>
                </div>
                <div className="carousel-item">
                  <img
                    src="https://www.theflyingsaucercafe.in/assets/images/kanpur.png"
                    alt="Kanpur"
                  />
                  <p className="m-0 " style={{ opacity: "0.5" }}>
                    Kanpur
                  </p>
                  <p
                    className="text-uppercase text-danger"
                    style={{ opacity: "0.5" }}
                  >
                    (Coming Soon)
                  </p>
                </div>
                <div className="carousel-item text-center">
                  <img
                    src="https://www.theflyingsaucercafe.in/assets/images/chasndigarh.png"
                    alt="chandigarh"
                  />
                  <p className="m-0 " style={{ opacity: "0.5" }}>
                    Chandigarh
                  </p>
                  <p
                    className="text-uppercase text-danger"
                    style={{ opacity: "0.5" }}
                  >
                    (Coming Soon)
                  </p>
                </div>
              </div>
              <a
                className="carousel-control-prev"
                href="#carouselControls"
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
                href="#carouselControls"
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

      <section className="container mb-5" id="testimonials">
        <div className="row m-2 pt-3">
          <div className="col-12">
            <div className="img-fluid">
              <img
                id="flames"
                src="https://www.theflyingsaucercafe.in/assets/images/white-flames.png"
                alt="flames"
              />
            </div>
            <h3 className="text-center text-uppercase text-white mt-2">
              Our <span className="text-danger">testimonials</span>
            </h3>
          </div>
        </div>
        <div className="row" id="">
          <div className="col-12 col-md-12 col-sm-12">
            <div
              id="carouselControls-testimonials"
              className="carousel slide"
              data-ride="carousel"
            >
              <div className="carousel-inner">
                <div className="carousel-item text-center active">
                  <img
                    className="img-fluid   br-100"
                    src="https://www.theflyingsaucercafe.in/assets/images/ananya.jpg"
                    alt=""
                  />
                  <p className="m-0 text-danger">★★★★★- Ananya Majumdar</p>
                  <p className="text-white">
                    This place is Nehru Place is located in the basement of the
                    metro station and spans over a huge area. It serves good
                    food which is little on the expensive side comparision to
                    other restaurants in same area.{" "}
                    <span role="img" aria-label="">
                      🙈😉😊
                    </span>
                  </p>
                </div>
                <div className="carousel-item text-center">
                  <img
                    src="https://www.theflyingsaucercafe.in/assets/images/rajat.jpg"
                    alt="LKO"
                    className="img-fluid   br-100"
                  />
                  <p className="m-0 text-danger">★★★★★- Rajat Singh Tomar</p>
                  <p className="text-white">
                    Nice place to spend time with friends. It’s pocket friendly.
                    This is the best place to hangout for IT Hub ( Nehru Place )
                    guys. Sales people can refresh the mind with chilled beer
                    with economical price range.
                  </p>
                </div>
                <div className="carousel-item">
                  <img
                    src="https://www.theflyingsaucercafe.in/assets/images/anurag.jpg"
                    alt="mumbai"
                    className="img-fluid   br-100"
                  />
                  <p className="m-0 text-danger">★★★★★- Anurag Singh</p>
                  <p className="text-white">
                    A happening place to chill out with friends at nehru place.
                    Out of many options available at Epicuria that is on the
                    lower ground floor of nehru place metro station, I always
                    choose "The Flying Saucer Cafe"
                  </p>
                </div>
              </div>
              <a
                className="carousel-control-prev"
                href="#carouselControls-testimonials"
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
                href="#carouselControls-testimonials"
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

      <section className="container mb-5" id="franchise-section">
        <div className="row">
          <div className="col-md-6 col-sm-6">
            <img
              src="https://www.theflyingsaucercafe.in/assets/images/F1.jpg"
              alt=""
              className="img-fluid   about-image m-2"
            />
            <img
              src="https://www.theflyingsaucercafe.in/assets/images/F2.jpg"
              alt=""
              className="img-fluid   about-image m-2"
            />
          </div>

          <div className="col-md-6 col-sm-6">
            <div className="img-fluid">
              <img
                id="flames"
                src="https://www.theflyingsaucercafe.in/assets/images/flames.png"
                alt="flames"
              />
            </div>
            <h3 className="text-center text-uppercase text-black">
              Become <span className="text-danger">Our Franchise</span>
            </h3>
            <p className="text-left mb-7">
              The Flying Saucer Café is another unique concept lounge café
              launched by the First Fiddle Restaurants. Flying saucer cafe is
              quirky & contemporary British-style lounge. Decorated with the
              Greek theme of the custom of Flying Saucer, it is the largest
              stand-alone restaurant in Nehru Place in Delhi because it is
              spread over 15,000 square feet the restaurant. The look and feel
              of this place are both minimalistic and classy yet quirky. The
              Flying Saucer Café is a First Fiddle Restaurants brand that
              presents enormous business opportunities in franchising and
              expansion some of their most classy restaurants.
            </p>
            <button className="btn btn-outline-danger text-center text-uppercase">
              Contact Us
              <img
                src="https://www.theflyingsaucercafe.in/assets/images/folk_grey.png"
                alt="fork"
                id="fork"
              />
            </button>
          </div>
        </div>
      </section>

      <section className="container p_30 mb-5" id="book-table">
        <div className="row">
          <div className="col-md-12 col-sm-12 col-12">
            <div className="img-fluid">
              <img
                id="flames"
                src="https://www.theflyingsaucercafe.in/assets/images/white-flames.png"
                alt="flames"
              />
            </div>
            <h3 className="text-center text-uppercase text-white">
              Book A <span className="text-danger">Table</span>
            </h3>
            <p className="text-center text-white">
              Our Service is top notch and prompts. On Saturday’s the indoor
              area is turned into a DJ floor where you can dance to your heart
              out. Reserve a Seat for you and your family and pamper your taste
              buds with delectable food and drinks with exotic flavours and
              aromas.
            </p>
            <button className="btn btn-outline-danger  text-uppercase">
              Book Now
              <img
                src="https://www.theflyingsaucercafe.in/assets/images/folk_grey.png"
                alt="fork"
                id="fork"
              />
            </button>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
