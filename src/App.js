import "./App.css";
import Mainmenu from "./components/Mainmenu";
import Footer from "./components/Footer";
import Aboutus from "./components/Aboutus";
import Contact from "./components/Contact";
import Services from "./components/Services";
import Staticbackground from "./components/Staticbackground";
import HomeCarousel from "./components/HomeCarousel";

function App() {
  return (
    <div className="App">
      <Mainmenu />

      <HomeCarousel />

      {/* <Staticbackground /> */}

      <Aboutus />

      <Services />

      <Contact />

      <Footer />
    </div>
  );
}

export default App;
