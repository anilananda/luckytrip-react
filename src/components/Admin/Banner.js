import React, { useState } from "react";
import DateTimePicker from "react-datetime-picker";
import "react-datetime-picker/dist/DateTimePicker.css";
import "react-calendar/dist/Calendar.css";
import "react-clock/dist/Clock.css";

function Banner() {
  const initialBannerValues = {
    mainHeading: "",
    subHeading: "",
    hideBanner: true,
    buttonText: "",
    buttonHyperLink: "",
    //offerValidity: new Date(2017, 2, 1, 3, 15, 10), // yyyy-mm-dd hh-mm-ss
    offerValidity: new Date(), // yyyy-mm-dd hh-mm-ss
  };

  const [bannerInput, setBannerInput] = useState(initialBannerValues);

  const handleInputChange = (inputInfo) => {
    console.log(inputInfo);
    const { name, value, type, checked } = inputInfo;
    setBannerInput({
      ...bannerInput,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const updateBannerInfo = (e) => {
    console.log(bannerInput.offerValidity.getTime());
    console.log(bannerInput);
  };

  const resetBannerInfo = () => {
    setBannerInput(initialBannerValues);
  };

  return (
    <div className="container pt-2">
      <div className="card border-warning">
        <div className="card-header bg-warning">
          <div className="row align-items-center">
            <div className="col-md-10">
              <h5>Customize your Promotion banner</h5>
            </div>
            <div className="col-md-2 ">
              <section>
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="gridCheck"
                  name="hideBanner"
                  checked={bannerInput.hideBanner}
                  onChange={(e) => handleInputChange(e.target)}
                />
                <label className="form-check-label" htmlFor="gridCheck">
                  &nbsp;Hide this Banner
                </label>
              </section>
            </div>
          </div>
        </div>
        <div className="card-body ">
          <div className="row">
            <div className="form-group col-md-8  offset-md-2">
              <label htmlFor="mainHeading">Main Heading</label>
              <input
                type="text"
                className="form-control"
                id="mainHeading"
                name="mainHeading"
                value={bannerInput.mainHeading}
                onChange={(e) => handleInputChange(e.target)}
              />
            </div>
            <div className="form-group col-md-8 pt-3  offset-md-2">
              <label htmlFor="subHeading">Sub Heading</label>
              <input
                type="text"
                className="form-control"
                id="subHeading"
                name="subHeading"
                value={bannerInput.subHeading}
                onChange={(e) => handleInputChange(e.target)}
              />
            </div>
            <div className="form-group pt-3 col-md-8  offset-md-2">
              <label htmlFor="inputAddress">Validity Till</label>
              <DateTimePicker
                name="offerValidity"
                value={bannerInput.offerValidity}
                onChange={(e) =>
                  handleInputChange({
                    name: "offerValidity",
                    value: e,
                    type: "",
                    checked: "",
                  })
                }
                className="form-control"
                minDate={new Date()}
                disableClock={true}
              />
            </div>
          </div>

          <div className="row pt-3">
            <div className="form-group col-md-3 offset-md-2">
              <label htmlFor="buttonText">Button Text</label>
              <input
                type="text"
                className="form-control"
                id="buttonText"
                name="buttonText"
                value={bannerInput.buttonText}
                onChange={(e) => handleInputChange(e.target)}
              />
            </div>

            <div className="form-group col-md-5">
              <label htmlFor="buttonHyperLink">Button Hyper Link</label>
              <input
                type="text"
                className="form-control"
                id="buttonHyperLink"
                name="buttonHyperLink"
                value={bannerInput.buttonHyperLink}
                onChange={(e) => handleInputChange(e.target)}
              />
            </div>
          </div>
          <hr />
          <div className="row">
            <div className="col-md-4 offset-md-2">
              <button
                className="form-control btn btn-danger"
                onClick={resetBannerInfo}
              >
                Reset
              </button>
            </div>
            <div className="col-md-4">
              <button
                className="form-control btn btn-primary"
                type="button"
                onClick={updateBannerInfo}
              >
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
