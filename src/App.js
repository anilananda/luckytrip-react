import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Banner from "./components/Admin/Banner";
import Dashboard from "./components/Admin/Dashboard";
import HomePage from "./components/HomePage";

function App() {
  return (
    <div className="App" id="home">
      <BrowserRouter>
        <Routes>
          <Route path="/luckytrip-react" element={<HomePage />} />
          <Route path="/" element={<HomePage />} />

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
          <Route path="*" element={<h2>Error 404</h2>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
