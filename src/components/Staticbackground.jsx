import React from "react";
import Image from "react-bootstrap/Image";
import ImgFlightSunset from "../../src/images/flightsunset.jpg";
import ImgBooknow from "../../src/images/book now.gif";

const bgStyel = {
  backgroundImage: `url(${ImgFlightSunset})`,
  backgroundPosition: "center",
  backgroundSize: "cover",
  // backgroundAttachment: "fixed",
  // position: "relative",
  zIndex: "58",
};
function Staticbackground() {
  return (
    // <div className="Container-fluid align-items-center" id="home">
    //   <div className="col-md-12">
    //     <Image src={ImgFlightSunset} className="img-fluid" alt="ok" />
    //     <div className="centered col-lg-12 mx-auto text-center">
    //       <h1 className="text-white display-4">
    //         Now book your flight tickets upto 45% discount
    //       </h1>
    //     </div>
    //   </div>
    // </div>

    <div
      className=" vh-100 d-flex align-items-center"
      style={{ ...bgStyel }}
      id="home"
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-12 mx-auto text-center">
            <h5 className="display-4 text-white css-typing">
              Now book your flight tickets upto 45% discount
            </h5>

            <a
              className=""
              href="http://booking-luckytrip.co.in/"
              target="_blank"
            >
              <img
                src={ImgBooknow}
                className="book-now img-responsive"
                alt="http://booking-luckytrip.co.in/"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Staticbackground;
