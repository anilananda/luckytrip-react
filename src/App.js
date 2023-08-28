import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./components/Admin/Dashboard";
import HomePage from "./components/HomePage";
import Privacy from "./components/Privacy";
import Terms from "./components/Terms";
import Refund from "./components/Refund";

function App() {
  return (
    <div className="App" id="home">
      <BrowserRouter>
        <Routes>
          <Route path="/luckytrip-react" element={<HomePage />} />
          <Route path="/" element={<HomePage />} />

          <Route path="/luckytrip-react/privacy" element={<Privacy />} />
          <Route path="/luckytrip-react/terms" element={<Terms />} />
          <Route path="/luckytrip-react/refund" element={<Refund />} />

          <Route path="admin/login" element={<h3>Login page</h3>} />
          <Route
            path="/luckytrip-react/admin/dashboard"
            element={<Dashboard />}
          ></Route>
          <Route
            path="/luckytrip-react/admin/banner"
            element={<Dashboard component="banner" />}
          />
          <Route
            path="/luckytrip-react/admin/order"
            element={<Dashboard component="order" />}
          />
          <Route
            path="/luckytrip-react/admin/report"
            element={<Dashboard component="order" />}
          />
          <Route path="*" element={<h2>Error 404</h2>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
