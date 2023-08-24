import "./App.css";
import Mainmenu from "./components/Mainmenu";
import Footer from "./components/Footer";
import Aboutus from "./components/Aboutus";
import Contact from "./components/Contact";
import Services from "./components/Services";
import Staticbackground from "./components/Staticbackground";
import HomeCarousel from "./components/HomeCarousel";
import PromotionBanner from "./components/PromotionBanner";

function App() {
  return (
    <div className="App" id="home">
      <PromotionBanner />
      <div className="luckytrip-sticky-top">
        <Mainmenu />
      </div>

      <Staticbackground />

      <HomeCarousel />

      <Aboutus />

      <Services />

      <Contact />

      <Footer />
    </div>
  );
}

export default App;
