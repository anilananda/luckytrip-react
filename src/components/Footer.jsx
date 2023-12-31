import React from "react";
import { AiOutlineCloudServer } from "react-icons/ai";
import Icon from "./Icon";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="pt-5">
      <div className="footer-top">
        <div className="container">
          <div className="row gy-4 text-start">
            <div className="col-lg-3 col-md-6 text-white">
              <AiOutlineCloudServer />
              &nbsp;
              <a
                href="http://booking-luckytrip.co.in/"
                className="text-white"
                target="_blank"
              >
                Visit Our live booking engine
              </a>
            </div>

            <div className="col-lg-3 text-secondary">
              <h5 className="text-white ">Quick Links</h5>
              <ul className="list-unstyled ">
                <li>
                  <a href="#about">About</a>
                </li>
                <li>
                  <a href="#service">Services</a>
                </li>
                <li>
                  <a href="#service">Contact</a>
                </li>
              </ul>
            </div>

            <div className="col-lg-3 text-secondary">
              <h5 className="text-white ">Important Links</h5>
              <ul className="list-unstyled ">
                <li>
                  <Link to="/luckytrip-react/privacy">
                    <span> Privacy Policy</span>
                  </Link>
                </li>
                <li>
                  <Link to="/luckytrip-react/terms">
                    <span> Terms And Conditions</span>
                  </Link>
                </li>
                <li>
                  <Link to="/luckytrip-react/refund">
                    <span>Refund And Cancellations</span>
                  </Link>
                </li>
              </ul>
            </div>

            <div className="col-lg-3 text-secondary">
              <h5 className="text-white">Contact</h5>
              <ul className="list-unstyled">
                <li>Address: #25 Belthur, Bangalore, Karnataka, 560067</li>
                <li>Email: info@luckytrip.co.in</li>
                <li>Phone: +91 9743231111</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom py-3">
        <div className="container">
          <div className="row">
            <div className="col-md-10 text-secondary text-start">
              <p className="mb-0">© 2022 copyright all right reserved</p>
            </div>
            <div className="col-md-2">
              <div className="social-icons">
                <a href="https://www.facebook.com/blrluckytrip/">
                  <Icon family="Lia" name="LiaFacebookF" />
                </a>
                <a href="https://www.facebook.com/blrluckytrip/">
                  <Icon family="Ant" name="AiOutlineTwitter" />
                </a>
                <a href="https://www.instagram.com/info.luckytrip/">
                  <Icon family="Ant" name="AiFillInstagram" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
