import React from "react";
import { AiOutlineMessage } from "react-icons/ai";
import { GiCash } from "react-icons/gi";
import { VscWorkspaceTrusted } from "react-icons/vsc";

function Services() {
  return (
    <div id="service">
      <section className="jumbotron text-center pt-5">
        <div className="container pt-5">
          <h1 className="jumbotron-heading pt-5">Why to choose us</h1>
          <div className="col-lg-10 mx-auto">
            <p className="lead mt-4">
              We are allied with all the top-notch Domestic Airlines and
              International Airlines, I.e., Indigo, Spicejet, GoAir, Air Asia,
              Air India, AirAsia India, Alliance Air, JetLite, Vistara Airlines,
              SriLankan Airlines, Gulf Air Airlines, Emirates Airline, Qatar
              Airways, Saudi Arabian Airlines, etc. and undertake to provide the
              best services and lowest price for your desire destination for
              airlines ticketing and your Trip with Lucky Trip.
            </p>
          </div>
        </div>
      </section>

      <section className="container pt-5">
        <div className="row g-4">
          <div className="col-lg-4 col-sm-6">
            <div className="service card-effect">
              <div className="iconbox">
                <GiCash />
              </div>
              <h5 className="mt-4 mb-2 text-start">Price</h5>
              <p className="lead">
                At Lucky Trip, you can find the best of deals and cheap air
                tickets to any place you want by booking your tickets on our
                website or app. Lucky Trip helps you book flight tickets that
                are affordable to your convenience.
              </p>
            </div>
          </div>

          <div className="col-lg-4 col-sm-6">
            <div className="service card-effect">
              <div className="iconbox">
                <AiOutlineMessage />
              </div>
              <h5 className="mt-4 mb-2 text-start">Quick Response</h5>
              <p className="lead">
                With customer satisfaction, we also provide a 24/7 dedicated
                helpline to cater to our customer’s queries and concerns.
                Serving over Lakhs of happy customers, we at Lucky Trip are
                thankful to fulfill the dreams of the people who need a quick
                and easy way to find air tickets.
              </p>
            </div>
          </div>

          <div className="col-lg-4 col-sm-6">
            <div className="service card-effect">
              <div className="iconbox">
                <VscWorkspaceTrusted />
              </div>
              <h5 className="mt-4 mb-2 text-start">Trust</h5>
              <p className="lead">
                Domestic Flights, International Flights, Hotels, Homestays and
                Holidays in India, Book your Travel Plan with us Online and
                Offline
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Services;
