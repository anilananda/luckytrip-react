import Mainmenu from "./Mainmenu";
import Footer from "./Footer";
import Aboutus from "./Aboutus";
import Contact from "./Contact";
import Services from "./Services";
import Staticbackground from "./Staticbackground";
import HomeCarousel from "./HomeCarousel";
import PromotionBanner from "./PromotionBanner";

function HomePage() {
  return (
    <div id="home">
      <PromotionBanner />
      <div className="luckytrip-sticky-top">
        <Mainmenu />
      </div>

      <Staticbackground />

      {/* <HomeCarousel /> */}

      <Aboutus />

      <Services />

      <Contact />

      <Footer />
    </div>
  );
}

export default HomePage;
