import Mainmenu from "./Mainmenu";
import Footer from "./Footer";
import Aboutus from "./Aboutus";
import Contact from "./Contact";
import Services from "./Services";
import Staticbackground from "./Staticbackground";
import HomeCarousel from "./HomeCarousel";
import PromotionBanner from "./PromotionBanner";

import { useState, useEffect } from "react";
import Cookie from "./Cookie";

function HomePage() {
  const gap = 1693211900000 - new Date().getTime();

  const bannerData = {
    mainHeading: `🧳Massive Sale up to 75% off 🔥 on UPI payment`,
    subHeading: `🦹🏽‍♀️Here your Coupon "LUCKY23"`,
    promotionValidity: gap,
    buttonText: "Puja offer",
    buttonLink: "https://google.com/",
  };

  const [cookiAccepted, setCookiAccepted] = useState(true);

  useEffect(() => {
    if (document.cookie.indexOf("cooki_accepted=true") == -1) {
      setCookiAccepted(false);
    }
  }, []);

  const handelCookieCallback = () => {
    setCookiAccepted(true);
    const dat = new Date();
    const res = dat.setDate(dat.getDate() + 15); //15days
    document.cookie = `cooki_accepted=true;expires=${new Date(
      res
    ).toUTCString()};path=/`;
  };

  return (
    <div id="home">
      {gap > 0 && <PromotionBanner {...bannerData} />}
      <div className="luckytrip-sticky-top">
        <Mainmenu />
      </div>
      <Staticbackground />
      {/* <HomeCarousel /> */}
      <Aboutus />
      <Services />
      <Contact />
      <Footer />
      {!cookiAccepted && (
        <Cookie
          handelCallback={handelCookieCallback}
          cookieMessage={"Place add cokkie related info here."}
        />
      )}
    </div>
  );
}

export default HomePage;
